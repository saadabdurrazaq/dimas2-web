<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
      <div class="intro-y flex items-center mt-8">
        <router-link
          tag="button"
          :to="{ name: 'manage-user.admin.index' }"
          class="btn btn-sm bg-white mr-5"
        >
          ← Back
        </router-link>
        <h2 class="text-lg font-medium mr-auto">
          {{ originalData.name }} - Update
        </h2>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-3">
      <div class="xl:border-r border-theme-5 -mb-10 pb-10">
        <div class="xl:pr-6 grid grid-cols-12 gap-5 pb-0">
          <!-- BEGIN: Accordion -->
          <div
            class="col-span-12 md:col-span-12 xl:col-span-12 xxl:col-span-12"
          >
            <!-- <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Profil Distributor
              </h2>
            </div> -->

            <div class="intro-y col-span-12 lg:col-span-8 xl:col-span-9">
              <div class="intro-x">
                <a
                  tag="div"
                  class="box px-5 py-3 mb-3 flex items-center zoom-in"
                  href="#updateProfile"
                >
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Update Profile</div>
                  </div>
                </a>
              </div>
              <div class="intro-x">
                <a
                  class="box px-5 py-3 mb-3 flex items-center zoom-in"
                  href="#assignRegion"
                >
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Assign Region</div>
                  </div>
                </a>
              </div>
              <div class="intro-x">
                <a
                  class="box px-5 py-3 mb-3 flex items-center zoom-in"
                  href="#assignRole"
                >
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Assign Role</div>
                  </div>
                </a>
              </div>
              <div class="intro-x">
                <a
                  class="box px-5 py-3 mb-3 flex items-center zoom-in"
                  href="#changePassword"
                >
                  <div class="ml-2 mr-auto">
                    <div class="font-medium">Change Password</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- END: Transactions -->
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-9">
      <document-form title="Update Profile" id="updateProfile">
        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">
            <form-item
              class="col-span-6"
              label="Nama"
              rules-text="Required"
              :validationData="validate.name"
            >
              <input
                placeholder="Nama"
                class="form-control"
                v-model="validate.name.$model"
                :class="{
                  'border-theme-6': validate.name.$error,
                }"
              />
            </form-item>
            <form-item
              class="col-span-6"
              label="Email"
              rules-text="Required"
              :validationData="validate.email"
            >
              <input
                placeholder="Email"
                class="form-control"
                v-model="validate.email.$model"
                :class="{
                  'border-theme-6': validate.email.$error,
                }"
              />
            </form-item>
            <form-item
              class="col-span-12"
              label="Role"
              rules-text="Required"
              :validationData="validate.name"
            >
              <el-select v-model="validate.role_id.$model" class="form-control">
                <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.id"></el-option>
              </el-select>
            </form-item>
          </div>
        </div>
        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button
              type="button"
              class="btn btn-outline-secondary w-24 mr-2"
              @click="resetFormData"
            >
              Reset
            </button>
            <button
              type="button"
              class="btn btn-primary w-24 mr-2"
              @click="saveProfile"
            >
              Save
            </button>
          </div>
        </div>
      </document-form>

      <assign-region></assign-region>
      <!-- <assign-role></assign-role> -->

      <document-form title="Change Password" id="changePassword" class="mt-5">
        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">
            <form-item
              class="col-span-6"
              label="New Password"
              rules-text="Required"
              :validationData="validatePassword.password"
            >
              <input
                class="form-control"
                v-model="validatePassword.password.$model"
                :class="{
                  'border-theme-6': validatePassword.password.$error,
                }"
              />
            </form-item>
            <form-item
              class="col-span-6"
              label="Confirm New Password"
              rules-text="Required"
              :validationData="validatePassword.repeatPassword"
            >
              <input
                class="form-control"
                v-model="validatePassword.repeatPassword.$model"
                :class="{
                  'border-theme-6': validatePassword.repeatPassword.$error,
                }"
              />
            </form-item>
          </div>
        </div>
        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button
              type="button"
              class="btn btn-outline-secondary w-24 mr-2"
              @click="resetFormData"
            >
              Reset
            </button>
            <button
              type="button"
              class="btn btn-primary w-24 mr-2"
              @click="savePassword"
            >
              Save
            </button>
          </div>
        </div>
      </document-form>
    </div>
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
import DataGrid from "./Datagrid";
import FormItem from "@/components/form/FormItem";
import { adminManagement, roleManagement } from "@/utils/api/userManagement.api";
import { useRoute } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import formDataDefault from "./formData.default";
import AssignRegion from "./assign-region"
import AssignRole from "./assign-role"

export default defineComponent({
  components: { DocumentForm, DataGrid, FormItem, AssignRegion, AssignRole },
  setup() {
    const route = useRoute();
    const userData = ref({});
    const roles = ref([]);

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

      await adminManagement.show(route.params.user_id).then((response) => {
        originalData.value = response.data.data;

        for (const key in formDataDefault) {
          if (formData.hasOwnProperty(key)) {
            formData[key] = response.data.data[key];
          }
        }
      });

      await roleManagement.index().then(response => {
        roles.value = response.data.data
      })
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
      await adminManagement.update(route.params.user_id, formData).then(response => {})
    }

    const savePassword = async () => {
      await adminManagement.changePassword(route.params.user_id, {
        password: formDataPassword.password,
        password_confirmation: formDataPassword.repeatPassword
      }).then(response => {
        resetFormPassword()
        validatePassword.value.$reset();
      })
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
      roles
    };
  },
});
</script>

<style>
</style>
