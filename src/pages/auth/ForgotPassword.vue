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
            Forgot Password
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                v-model="validate.email.$model"
                @keyup.enter="loginAction(credential)"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div class="grid grid-cols-4 gap-3">
            <button
              :disabled="loginLoading"
              @click="loginAction(credential)"
              class="group col-span-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :class="{
                'bg-indigo-600 hover:bg-indigo-700': !loginLoading,
                'bg-indigo-400 hover:bg-indigo-400 cursor-not-allowed py-2 px-4': loginLoading,
              }"
            >
              <svg
                class="flex items-center my-auto"
                v-if="loginLoading"
                width="25"
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
              <span v-if="!loginLoading">Send Reset Link</span>
            </button>
            <router-link
              tag="button"
              class="relative col-span-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-1 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
              to="/login"
            >
              Sign In
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
} from "vue";
import { useStore } from "@/store";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { forgotPassword } from "../../utils/api/auth.api";
import { mapGetters } from "vuex";
import { ElAlert, ElNotification } from "element-plus";

export default defineComponent({
  components: {
    ElAlert,
  },
  computed: {
    ...mapGetters("errorBag", ["errors", "errorMessage"]),
    formErrorMessage() {
      if (this.errors != null) {
        return this.errors[Object.keys(this.errors)[0]][0];
      } else if (this.errorMessage != null) {
        return this.errorMessage;
      }

      return false;
    },
  },
  setup() {
    const loginLoading = ref(false);

    onMounted(async () => {
      cash("body")
        .removeClass("main")
        .removeClass("error-page")
        .addClass("bg-white p-0");
    });

    onUnmounted(() => {
      cash("body").addClass("main").removeClass("bg-white p-0");
    });

    const credential = reactive({
      email: null,
    });

    const rules = {
      email: { required },
    };

    const validate = useVuelidate(rules, toRefs(credential));
    const store = useStore();

    const loginAction = async (credential) => {
      loginLoading.value = true;

      await forgotPassword( {email: credential.email} )
        .then((response) => {
          ElNotification.success({
            title: "Success",
            message: response.data.message,
            position: "bottom-right",
          });
        })
        .catch((e) => {
          ElNotification.error({
            title: "Failed",
            message: e.data.message,
            position: "bottom-right",
          });
        })
        .finally(() => {
          loginLoading.value = false;
        });
    };

    return {
      store,
      validate,
      credential,
      loginAction,
      loginLoading,
    };
  },
});
</script>
