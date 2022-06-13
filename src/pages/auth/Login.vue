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
            Sign in to your account
          </h2>
        </div>
        <div class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />

          <el-alert
            v-if="formErrorMessage"
            :title="formErrorMessage"
            show-icon
            type="error"
          ></el-alert>
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>

              <div class="inline-block relative w-full">
                <input
                  @keyup.enter="loginAction(credential)"
                  v-model="validate.password.$model"
                  id="password"
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  :class="{ 'border-theme-6': validate.password.$error }"
                  autocomplete="current-password"
                  placeholder="Password"
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 z-50 cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <EyeIcon v-if="!showPassword" class="h-1/2" />
                  <EyeOffIcon v-else class="h-1/2" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                v-model="credential.remember"
                id="remember"
                name="remember"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <router-link
                tag="button"
                :to="{ name: 'forgot-password' }"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </router-link>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-3">
            <button
              :disabled="loginLoading"
              @click="loginAction(credential)"
              class="group col-span-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              <span v-if="!loginLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span v-if="!loginLoading">Sign in</span>
            </button>
            <router-link
              tag="button"
              class="group col-span-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dark-1 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
              to="register"
            >
              Register
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
      // login page style
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
      password: null,
      remember: false,
    });

    const rules = {
      email: { required },
      password: { required },
    };

    const validate = useVuelidate(rules, toRefs(credential));
    const store = useStore();
    const showPassword = ref(0);

    const loginAction = async (credential) => { 
      loginLoading.value = true;

      try {
        await store.dispatch("auth/login", credential);
      } catch (e) {
        ElNotification.error({
          title: "Failed",
          message: e.statusText,
          position: "bottom-right",
        });
      } finally {
        loginLoading.value = false;
      }
    };

    return {
      store,
      validate,
      credential,
      showPassword,
      loginAction,
      loginLoading,
    };
  },
});
</script>
