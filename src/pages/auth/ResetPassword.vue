<template>
  <div
    class="container min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="grid grid-cols-12 w-full">
      <div class="hidden col-span-12 md:col-span-8 md:flex items-center">
        <!-- <p class="text-3xl leading-normal">
          Distributor Management <br />
          PT Pupuk Indonesia (Persero)
        </p> -->
        <img
            alt="Distributor Management"
            src="@/assets/images/logo-dimas-cropped.png"
            style="max-width: 35% !important; margin-left: 5% !important"
          />
      </div>
      <div class="col-span-12 md:col-span-4 max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="">
          <input type="hidden" name="remember" value="true" />

          <div v-if="errors != null && errors.length != 0" role="alert">
            <div class="bg-red-500 text-white font-bold rounded px-4 py-2">
              {{
                errors.hasOwnProperty(Object.keys(errors)[0])
                  ? errors[Object.keys(errors)[0]][0]
                  : ""
              }}
            </div>
          </div>

          <div v-if="success" role="alert">
            <div class="bg-green-500 text-white font-bold rounded px-4 py-2">
              Reset Password Berhasil
            </div>
          </div>

          <el-form ref="form" :model="form">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="password" class="sr-only">Password</label>
                <el-form-item prop="password">
                  <input
                    v-model="form.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </el-form-item>
              </div>
              <div>
                <label for="password" class="sr-only"
                  >Password Confirmation</label
                >
                <el-form-item prop="password_confirmation">
                  <input
                    v-model="form.password_confirmation"
                    id="password_confirmation"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password Confirmation"
                  />
                </el-form-item>
              </div>
            </div>
          </el-form>

          <div class="grid grid-cols-4 gap-3">
            <button
              @click="registerAction"
              class="col-span-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700"
            >
              <svg
                class="flex items-center my-2"
                width="25"
                v-if="registerLoading"
                viewBox="0 0 120 30"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgba(99, 102, 241, 0.8)"
              >
                <circle cx="15" cy="15" r="15">
                  <animate
                    attributeName="r"
                    from="15"
                    to="15"
                    begin="0s"
                    dur="0.8s"
                    values="15;9;15"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="fill-opacity"
                    from="1"
                    to="1"
                    begin="0s"
                    dur="0.8s"
                    values="1;.5;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                  <animate
                    attributeName="r"
                    from="9"
                    to="9"
                    begin="0s"
                    dur="0.8s"
                    values="9;15;9"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="fill-opacity"
                    from="0.5"
                    to="0.5"
                    begin="0s"
                    dur="0.8s"
                    values=".5;1;.5"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle cx="105" cy="15" r="15">
                  <animate
                    attributeName="r"
                    from="15"
                    to="15"
                    begin="0s"
                    dur="0.8s"
                    values="15;9;15"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="fill-opacity"
                    from="1"
                    to="1"
                    begin="0s"
                    dur="0.8s"
                    values="1;.5;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
              </svg>
              <span v-if="!registerLoading">Update Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from "vue";
import { getError } from "../../utils/helpers";
import client from "../../utils/api/httpClient";
import axios from "axios";
import { mapGetters, mapState } from "vuex";
import { resetPassword } from "../../utils/api/auth.api";
import store from "@/store";
import { ElNotification } from "element-plus";

export default defineComponent({
  data() {
    return {
      form: {
        password: null,
        password_confirmation: null,
      },
      success: false,
      agree: false,
      registerLoading: false,
    };
  },
  methods: {
    async registerAction() {
      let token = this.$route.query.token;
      let email = this.$route.query.email;

      this.registerLoading = true;
      store.dispatch("errorBag/clear");
      this.success = false;

      let {
        password,
        password_confirmation,
      } = this.form;

      await resetPassword({
        email,
        password,
        password_confirmation,
        token
      }).then((response) => {
        ElNotification.success({
          title: "Reset Password Berhasil",
          message: "Silahkan gunakan password baru untuk login.",
          position: "bottom-right",
        });
        this.$router.push({name: 'login'});
      }).catch((e) => {
        ElNotification.error({
          title: "Failed",
          message: e.data.message,
          position: "bottom-right",
        });
      }).finally(() => {
        this.registerLoading = false;
      });
    },
  },
  setup() {
    onMounted(() => {
      cash("body")
        .removeClass("main")
        .removeClass("error-page")
        .addClass("bg-white p-0");
    });

    onUnmounted(() => {
      cash("body").addClass("main").removeClass("bg-white p-0");
    });
  },
  computed: {
    ...mapGetters("errorBag", ["errors"]),
  },
});
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0px !important;
}
</style>
