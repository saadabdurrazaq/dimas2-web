<template>
  <div class="intro-y col-span-12 lg:col-span-12">
    <!-- BEGIN: Form Nama Perusahaan Layout -->
    <document-form title="Pemegang Saham">
      <div class="p-5">
        <div class="grid grid-cols-2 gap-5">
          <form-item
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
            label="Jabatan"
            rules-text="Required"
            :validationData="validate.position"
            class="intro-y"
          >
            <input
              placeholder="Jabatan"
              class="form-control"
              v-model="validate.position.$model"
              :class="{
                'border-theme-6': validate.position.$error,
              }"
            />
          </form-item>
          <form-item
            label="NIK"
            rules-text="Required"
            :validationData="validate.province_id"
            class="intro-y"
          >
            <input
              placeholder="NIK"
              class="form-control"
              v-model="validate.nik.$model"
              :class="{
                'border-theme-6': validate.nik.$error,
              }"
            />
          </form-item>
          <form-item
            label="File KTP"
            rules-text="Required"
            :validationData="validate.ktp_file_path"
            class="intro-y"
          >
            <el-upload
              ref="elUpload"
              class="upload-demo"
              :action="env['VUE_APP_API_ENDPOINT'] + '/files'"
              :headers="{
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
              }"
              :with-credentials="true"
              :on-success="onUploadSuccees"
              :file-list="
                formData.ktp_file_path != null
                  ? [
                      {
                        name: 'file-ktp',
                        url: formData.ktp_file_path,
                      },
                    ]
                  : []
              "
              :on-preview="handlePreview"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
              <template #tip>
                <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
              </template>
            </el-upload>
          </form-item>
        </div>
      </div>

      <div class="p-5">
        <div class="grid grid-cols-1 gap-5">
          <div class="w-full text-right">
            <button
              type="button"
              class="btn w-24 bg-theme-9 text-white"
              @click="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div class="flex w-full px-5">
        <button
          v-if="updateMode"
          type="button"
          class="btn btn-outline-secondary mr-2"
          @click="dataGrid.clearSelection"
        >
          Clear Selection
        </button>
        <div class="ml-auto" v-if="allowManage">
          <button
            v-if="updateMode"
            type="button"
            class="btn btn-primary w-24 mr-2"
            @click="save"
          >
            Save
          </button>
          <div v-else>
            <button
              type="button"
              class="btn btn-outline-secondary w-24 mr-2"
              @click="resetFormData"
            >
              Reset
            </button>
            <button
              type="button"
              class="btn bg-theme-9 text-white w-24"
              @click="add"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <!-- <Tabulator></Tabulator> -->
      <DataGrid
        ref="dataGrid"
        class="m-5"
        :allowManage="allowManage"
      ></DataGrid>
    </document-form>
    <!-- END: Form Nama Perusahaan Layout -->
  </div>
</template>

<script>
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DataGrid from "./Datagrid/CompanyManagementDataGrid";
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  provide,
  reactive,
  ref,
  toRef,
  toRefs,
} from "vue";

import formDataDefaults from "./formData.default";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import FormItem from "@/components/form/FormItem";
import companyManagementAPI from "@/utils/api/companyManagement.api";
import { ElNotification } from "element-plus";
import { useStore } from "vuex";

import useDistributorRegionDropdown from "@/composables/useDistributorRegionDropdown";

import useMessageBox from "@/composables/useMessageBox";
import useBundleItemApproval from "@/composables/useBundleItemApproval";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { DocumentForm, DataGrid, FormItem },
  setup() {
    // Init reactive variables
    // https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref
    // https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity

    const route = useRoute();
    const store = useStore();
    const user = store.state.auth.user;

    const updateMode = ref(false);
    const loading = ref(false);

    const messageBox = useMessageBox();

    // Accessing in-template element using ref
    // https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs
    const dataGrid = ref(null);
    const elUpload = ref(null);

    // Injecting env variable from main.js
    // Contains .env's variables
    // https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity

    const env = inject("env");

    // Reactive variable for form input and its validation
    // Using formDataDefault to maintain the consistency of object attributes during mutation like
    // - resetFormData
    // - hydrateFormData

    const formData = reactive({ ...formDataDefaults });

    const rules = {
      name: { required },
      nik: { required },
      ktp_file_path: { required },
      position: {},
      phone_number: { required },
      email: { required },
      region_code: { required },
    };

    const validate = useVuelidate(rules, toRefs(formData));

    // --

    // Form related functions
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

    // Bring back each formData attribute to its default state according to formData.default
    const resetFormData = () => {
      for (const key in formDataDefaults) {
        formData[key] = formDataDefaults[key];
      }

      validate.value.$reset();
    };

    // Map each available keys from formDataDefault and fill it with new data value
    const hydrateFormData = (data) => {
      // https://v3.vuejs.org/api/refs-api.html#torefs
      const formDataAsRefs = toRefs(formData);

      for (const key in formDataDefaults) {
        if (Object.hasOwnProperty.call(data, key)) {
          formDataAsRefs[key].value = data[key];
        }
      }
    };

    const updateFormData = async (data) => {
      if (data != null) {
        hydrateFormData(data);

        updateMode.value = true;
      } else {
        resetFormData();

        updateMode.value = false;
      }
    };

    const save = async () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        messageBox
          .$confirm("Simpan data. Lanjutkan?", "Konfirmasi", {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning",
            closeOnClickModal: false,
          })
          .then(async () => {
            const { id, ...data } = formData;

            data.distributor_id = user.distributor.id;

            loading.value = true;
            await companyManagementAPI
              .update(formData.id, data)
              .then((response) => {
                ElNotification.success({
                  title: "Data berhasil disimpan",
                  position: "bottom-right",
                });

                // elUpload.value.clearFiles();
                dataGrid.value.clearSelection();
                dataGrid.value.refreshDataGrid();
                resetFormData();
              })
              .catch((error) => {
                ElNotification.error({
                  title: "Data gagal disimpan",
                  message: "Silahkan periksa form sekali lagi",
                  position: "bottom-right",
                });
              })
              .finally(() => {
                loading.value = false;
              });
          })
          .catch(() => {
            // Cancel
          });
      } else {
        ElNotification.error({
          title: "Submit Gagal",
          message: "Silahkan periksa form sekali lagi",
          position: "bottom-right",
        });
      }
    };

    const add = async () => {
      validate.value.$touch();
      if (!validate.value.$invalid) {
        messageBox
          .$confirm("Simpan data. Lanjutkan?", "Konfirmasi", {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning",
            closeOnClickModal: false,
          })
          .then(async () => {
            const { id, ...data } = formData;

            data.distributor_id = user.distributor.id;
            loading.value = true;
            await companyManagementAPI
              .add(data)
              .then((response) => {
                ElNotification.success({
                  title: "Data berhasil disimpan",
                  position: "bottom-right",
                });

                elUpload.value.clearFiles();
                dataGrid.value.refreshDataGrid();
                resetFormData();
              })
              .catch((error) => {
                ElNotification.error({
                  title: "Data gagal disimpan",
                  message: "Silahkan periksa form sekali lagi",
                  position: "bottom-right",
                });
              })
              .finally(() => {
                loading.value = false;
              });
          })
          .catch(() => {
            // Cancel
          });
      } else {
        ElNotification.error({
          title: "Submit Gagal",
          message: "Silahkan periksa form sekali lagi",
          position: "bottom-right",
        });
      }
    };

    // --

    // File upload related functions
    // ElementPlus - ElUpload function callback

    const onUploadSuccees = (response, file, fileList) => {
      formData.ktp_file_path = response.id;
    };

    const handlePreview = (file) => {
      var win = window.open(
        env["VUE_APP_API_ENDPOINT"] + "/files?filePath=" + file.url,
        "_blank"
      );
      win.focus();
    };

    // --

    // Provide updateFormData, to use later in children component
    provide("updateFormData", updateFormData);

    const { distributorRegions } = useDistributorRegionDropdown(user);
    provide("distributorRegions", distributorRegions);

    // Expose all variable and functions to template
    return {
      env,
      formData,
      validate,
      dataGrid,
      updateMode,
      loading,
      save,
      add,
      resetFormData,
      onUploadSuccees,
      elUpload,
      handlePreview,
      distributorRegions,
    };
  },
});
</script>

<style></style>
