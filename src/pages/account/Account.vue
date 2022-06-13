<template>
  <div class="grid grid-cols-12 gap-6">
    <!-- BEGIN: Page Title -->
    <div class="col-span-12">
      <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">
          Update Account
        </h2>
      </div>
    </div>
    <!-- END: Page Title -->

    <!-- BEGIN: Accordion -->
    <div class="col-span-12 xl:col-span-3">
      <div class="xl:border-r border-theme-5 -mb-10 pb-10">
        <div class="xl:pr-6 grid grid-cols-12 gap-5 pb-0">
          <div class="col-span-12 md:col-span-12 xl:col-span-12 xxl:col-span-12">
            <div class="intro-y col-span-12 lg:col-span-8 xl:col-span-9">

              <div class="intro-x">
                <a tag="div" class="box px-5 py-3 mb-3 flex items-center zoom-in" href="#updateProfile">
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Update Profile</div>
                  </div>
                </a>
              </div>

              <div class="intro-x">
                <a class="box px-5 py-3 mb-3 flex items-center zoom-in" href="#changePassword">
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Change Password</div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Accordion --> 
    
    <!-- BEGIN: Transactions -->
    <div class="col-span-12 xl:col-span-9">
      <document-form title="Update Profile" id="updateProfile" v-loading="profileLoading"> 
        
        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">  
            <form-item class="col-span-6" label="Nama" rules-text="Required" :validationData="validate.name">
              <input placeholder="Nama" class="form-control" v-model="validate.name.$model" :class="{ 'border-theme-6': validate.name.$error, }"/>
            </form-item>

            <form-item class="col-span-6" label="Email" rules-text="Required" :validationData="validate.email">
              <input placeholder="Email" class="form-control" v-model="validate.email.$model" :class="{ 'border-theme-6': validate.email.$error, }"/>
            </form-item>
          </div>
        </div>

        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button type="button" class="btn btn-outline-secondary w-24 mr-2" @click="resetFormData">Reset</button>
            <button type="button" class="btn btn-primary w-24 mr-2" @click="saveProfile">Save</button>
          </div>
        </div>

      </document-form>

      <document-form title="Change Password" id="changePassword" class="mt-5" v-loading="passwordLoading">
        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">
            <form-item class="col-span-6" label="New Password" rules-text="Required" :validationData="validatePassword.password">
              <input type="password" class="form-control" v-model="validatePassword.password.$model" :class="{ 'border-theme-6': validatePassword.password.$error, }"/>
            </form-item>
            <form-item class="col-span-6" label="Confirm New Password" rules-text="Required" :validationData="validatePassword.repeatPassword">
              <input type="password" class="form-control" v-model="validatePassword.repeatPassword.$model" :class="{ 'border-theme-6': validatePassword.repeatPassword.$error, }"/>
            </form-item>
          </div>
        </div>

        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button type="button" class="btn btn-outline-secondary w-24 mr-2" @click="resetFormData">Reset</button>
            <button type="button" class="btn btn-primary w-24 mr-2" @click="savePassword">Save</button>
          </div>
        </div>
      </document-form>
    </div>
    <!-- END: Transactions -->
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
} from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import FormItem from "@/components/form/FormItem";
import { adminManagement, roleManagement, userManagement } from "@/utils/api/userManagement.api";
import { useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import formDataDefault from "./formData.default";
import { useStore } from "vuex";
import { ElNotification } from "element-plus";

export default defineComponent({
  components: { DocumentForm, FormItem },
  setup() {
    const route = useRoute();
    const userData = ref({});
    const roles = ref([]);

    const profileLoading = ref(true);
    const passwordLoading = ref(true);

    const store = useStore();
    const user = store.state.auth.user;

    const originalData = ref({});
    const formData = reactive({ ...formDataDefault });
    const rules = {
      name: { required },
      email: { required },
      role_id: { required }
    };

    const validate = useVuelidate(rules, toRefs(formData));

    const formPasswordDefault = {
      password: null,
      repeatPassword: null,
    };

    const formDataPassword = reactive({ ...formPasswordDefault });
    const sameAsPassword = (param) =>
      helpers.withMessage("Password konfirmasi harus sama", (value) => {
        return value == param.password;
      });

    const passwordRules = {
      password: { required, minLength: minLength(8) },
      repeatPassword: { sameAsPassword: sameAsPassword(formDataPassword) },
    };

    const validatePassword = useVuelidate(passwordRules, formDataPassword);


    onMounted(async () => {
      profileLoading.value = true;
      passwordLoading.value = false;
      await userManagement
        .show(user.id)
        .then((response) => {
          originalData.value = response.data.data;
          for (const key in formDataDefault) {
            if (formData.hasOwnProperty(key)) {
              formData[key] = response.data.data[key];
            }
          }
        }).finally(() => {
          profileLoading.value = false;
        });
    });

    const resetFormData = () => {

      for (const key in formDataDefault) {
        if (formData.hasOwnProperty(key)) {
          formData[key] = originalData.value[key];
        }
      }
      
    };

    const resetFormPassword = () => {
      formDataPassword['password'] = null;
      formDataPassword['repeatPassword'] = null;
      validatePassword.value.$reset();
    }

    const saveProfile = async () => {
      profileLoading.value = true;
      await userManagement
        .update(user.id, formData)
        .then((response) => {
          ElNotification.success({
            title: "Data berhasil disimpan",
            position: "bottom-right",
          });
        })
        .catch((error) => {
          ElNotification.error({
            title: "Data gagal disimpan",
            message: "Silahkan periksa form sekali lagi",
            position: "bottom-right",
          });
        }).finally(() => {
          profileLoading.value = false;
        });
    }

    const savePassword = async () => {
      passwordLoading.value = true;
      await userManagement.changePassword(user.id, {
        password: formDataPassword.password,
        password_confirmation: formDataPassword.repeatPassword
      }).then(response => {
        ElNotification.success({
          title: "Password berhasil diubah",
          position: "bottom-right",
        });
      }).catch((error) => {
        ElNotification.error({
          title: "Password gagal diubah",
          message: "Silahkan periksa form sekali lagi",
          position: "bottom-right",
        });
      }).finally(() => {
        resetFormPassword();
        passwordLoading.value = false;
      });
    }

    return {
      formData,
      originalData,
      route,
      validate,
      resetFormData,
      validatePassword,
      saveProfile,
      savePassword,
      roles,

      profileLoading,
      passwordLoading,
    };
  },
});
</script>

<style>
</style>
