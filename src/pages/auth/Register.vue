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
            Create new account
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
              Registrasi berhasil, periksa email aktivasi
            </div>
          </div>

          <el-form ref="form" :model="form">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="first-name" class="sr-only">First Name</label>
                <el-form-item prop="first_name">
                  <input
                    v-model="form.first_name"
                    id="first-name"
                    name="first-name"
                    type="text"
                    autocomplete="first-name"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                  />
                </el-form-item>
              </div>
              <div>
                <label for="last-name" class="sr-only">Last Name</label>
                <el-form-item prop="last_name">
                  <input
                    v-model="form.last_name"
                    id="last-name"
                    name="last-name"
                    type="text"
                    autocomplete="last-name"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                  />
                </el-form-item>
              </div>
            </div>
            <div class="py-2"></div>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>

                <el-form-item prop="email">
                  <input
                    v-model="form.email"
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </el-form-item>
              </div>
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
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                    id="password"
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

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="agreement_check"
                name="agreement_check"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                v-model="agree"
              />
              <label
                for="agreement_check"
                class="ml-2 block text-sm text-gray-900"
              >
                I Agree to the Distibutor Management Privacy Policy
              </label>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-3">
            <button
              @click="registerAction"
              :disabled="!agree"
              class="col-span-4 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :class="{
                'bg-indigo-600 hover:bg-indigo-700': agree,
                'bg-indigo-400 hover:bg-indigo-400 cursor-not-allowed': !agree,
              }"
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
              <span v-if="!registerLoading">Register</span>
            </button>
          </div>
          <div class="w-full border-t"></div>
          <router-link
            tag="button"
            class="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-1 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            to="/login"
          >
            Sign In
          </router-link>
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
import { register } from "../../utils/api/auth.api";
import store from "@/store";
import { ElNotification } from "element-plus";

export default defineComponent({
  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        email: null,
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
      this.registerLoading = true;
      store.dispatch("errorBag/clear");
      this.success = false;

      let {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      } = this.form;

      let name = first_name;

      if (last_name) {
        name += " " + last_name;
      }

      await register({
        name,
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      }).then((response) => {
        if ([200, 201].includes(response.status)) {
          // this.success = true
          this.form = {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            password_confirmation: null,
          };

          ElNotification.success({
            title: "Registrasi berhasil",
            message: "Silahkan verifikasi alamat email Anda",
            position: "bottom-right",
          });
          this.registerLoading = false;
        }
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
