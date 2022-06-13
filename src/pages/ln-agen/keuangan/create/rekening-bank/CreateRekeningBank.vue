<template>
  <div class="intro-y col-span-12 lg:col-span-4"></div>
  <div class="intro-y col-span-12 lg:col-span-8">
    <!-- BEGIN: Form Bank Account -->
    <document-form title="Bank Account" v-loading="loading" :itemType="2">
      <div>
        <div class="pt-5">
          <div class="grid grid-cols-2 gap-5">
            <form-item
              class="intro-y"
              label="Name of Bank"
              rules-text="Required"
              :validationData="validate.bank_name"
            >
              <input
                v-model="validate.bank_name.$model"
                placeholder="Name of Bank"
                class="form-control"
                :class="{
                  'border-theme-6': validate.bank_name.$error,
                }"
              />
            </form-item>
            <form-item
              class="intro-y"
              label="Swift Code"
              rules-text="Required"
              :validationData="validate.swift_code"
            >
              <input
                v-model="validate.swift_code.$model"
                placeholder="Swift Code"
                class="form-control"
                :class="{
                  'border-theme-6': validate.swift_code.$error,
                }"
              />
            </form-item>
            <form-item
              class="intro-y"
              label="Account Number"
              rules-text="Required"
              :validationData="validate.account_number"
            >
              <input
                v-model="validate.account_number.$model"
                placeholder="Account Number"
                class="form-control"
                :class="{
                  'border-theme-6': validate.account_number.$error,
                }"
              />
            </form-item>
            <form-item
              class="intro-y"
              label="Upload Pass Book"
              rules-text="Required"
              :validationData="validate.pass_book"
            >
              <el-upload
                ref="elUpload"
                class="upload-demo form-control"
                :action="env['VUE_APP_API_ENDPOINT'] + '/files'"
                :headers="{
                  Accept: 'application/json',
                  'X-Requested-With': 'XMLHttpRequest',
                }"
                :with-credentials="true"
                :on-success="onUploadSuccees"
                :file-list="
                  formData.file_path != null
                    ? [
                        {
                          name: 'file-template',
                          url: formData.file_path,
                        },
                      ]
                    : []
                "
                :on-preview="handlePreview"
              >
                <el-button size="small" type="primary"
                  >Click to upload</el-button
                >
                <template #tip>
                  <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
                </template>
              </el-upload>
            </form-item>
            <div class="grid grid-cols-2 gap-5"></div>
          </div>
        </div>
        <div class="pt-5">
          <div class="grid grid-cols-1 gap-5">
            <div class="w-full text-right">
              <button
                type="button"
                class="btn btn-primary w-24"
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
          <div
            class="ml-auto"
            v-if="route.meta.role == 'distributor' && allowManage"
          >
            <button
              :disabled="loading"
              :class="{ 'cursor-not-allowed': loading }"
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
                :disabled="loading"
                :class="{ 'cursor-not-allowed': loading }"
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
          :allowManage="allowManage"
          ref="dataGrid"
          class="m-5"
        ></DataGrid>
      </div>
    </document-form>
    <!-- END: Form Bank Account -->
  </div>
</template>

<script>
import { inject } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DataGrid from "./Datagrid/BusinessAddressDataGrid";
import {
  defineComponent,
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
import {
  addCompanyAddress,
  updateCompanyAddress,
} from "@/utils/api/companyProfile.api";
import { ElNotification } from "element-plus";
import { useStore } from "vuex";

import useRegionSearch from "@/composables/useRegionSearch";
import { useRoute } from "vue-router";
import useBundleItemApproval from "@/composables/useBundleItemApproval";
import useFormData from "@/composables/useFormData";
import useDistributorRegionDropdown from "@/composables/useDistributorRegionDropdown";
import useMessageBox from "@/composables/useMessageBox";

export default defineComponent({
  components: { DocumentForm, DataGrid, FormItem },
  setup() {
    const formData = reactive({ ...formDataDefaults });
    const rules = {
      bank_name: { required },
      swift_code: { required },
      account_number: { required },
      alamat_kios: { required },
      pass_book: { required },
    };

    const store = useStore();
    const user = store.state.auth.user;
    const route = useRoute();
    const messageBox = useMessageBox();

    const validate = useVuelidate(rules, toRefs(formData));

    const {
      provinces,
      cities,
      districts,
      villages,
      getProvinces,
      getCities,
      getDistricts,
      getVillages,
      provinceOptionsLoading,
      cityOptionsLoading,
      districtOptionsLoading,
      villageOptionsLoading,
    } = useRegionSearch(formData);

    const { distributorRegions, getProposedRegions } =
      useDistributorRegionDropdown(user);
    provide("distributorRegions", distributorRegions);

    const updateMode = ref(false);

    const resetFormData = () => {
      const formDataAsRefs = toRefs(formData);

      for (const key in formDataDefaults) {
        formDataAsRefs[key].value = formDataDefaults[key];
      }

      validate.value.$reset();
    };

    const hydrateFormData = (data) => {
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

        loading.value = true;
        updateMode.value = true;

        await getProvinces(false);
        await getCities(data.province_id, false);
        await getDistricts(data.city_id, false);
        await getVillages(data.district_id, false);

        if (villages.value != null) {
          loading.value = false;
        }
      } else {
        resetFormData();

        updateMode.value = false;
      }
    };

    provide("updateFormData", updateFormData);

    const dataGrid = ref(null);

    onMounted(async () => {
      await getProvinces();

      if (provinces.value != null) {
        loading.value = false;
      }
    });

    const loading = ref(true);

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
            await updateCompanyAddress(formData.id, data)
              .then((response) => {
                ElNotification.success({
                  title: "Data berhasil disimpan",
                  position: "bottom-right",
                });

                resetFormData();
                dataGrid.value.clearSelection();
                dataGrid.value.refreshDataGrid();
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
            await addCompanyAddress(data)
              .then((response) => {
                ElNotification.success({
                  title: "Data berhasil disimpan",
                  position: "bottom-right",
                });

                resetFormData();
                dataGrid.value.refreshDataGrid();
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

    const env = inject("env");

    const handlePreview = (file) => {
      var win = window.open(
        env["VUE_APP_API_ENDPOINT"] + "/files?filePath=" + file.url,
        "_blank"
      );
      win.focus();
    };

    return {
      handlePreview,
      env,
      formData,
      validate,
      provinces,
      cities,
      districts,
      villages,
      provinceOptionsLoading,
      cityOptionsLoading,
      districtOptionsLoading,
      villageOptionsLoading,
      dataGrid,
      getProvinces,
      getCities,
      getDistricts,
      getVillages,
      updateMode,
      loading,
      save,
      add,
      resetFormData,
      route,
      distributorRegions,
      getProposedRegions,
    };
  },
  data() {
    return {
      kecamatan: [
        { id: 1, name: "Kecamatan 1" },
        { id: 2, name: "Kecamatan 2" },
        { id: 3, name: "Kecamatan 3" },
      ],
      provinsi: [
        { id: 1, name: "Provinsi 1" },
        { id: 2, name: "Provinsi 2" },
        { id: 3, name: "Provinsi 3" },
      ],
      desa: [
        { id: 1, name: "Desa 1" },
        { id: 2, name: "Desa 2" },
        { id: 3, name: "Desa 3" },
      ],
      kota: [
        { id: 1, name: "Kota 1" },
        { id: 2, name: "Kota 2" },
        { id: 3, name: "Kota 3" },
      ],
      kode_pos: [
        { id: 1, name: "Kode Pos 1" },
        { id: 2, name: "Kode Pos 2" },
        { id: 3, name: "Kode Pos 3" },
      ],
    };
  },
});
</script>

<style></style>
