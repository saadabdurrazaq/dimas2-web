<template>
  <!-- BEGIN: Form Jaringan Distribusi / Pengecer Layout -->
  <document-form title="Distributor Financing" v-loading="loading" :itemType="2">
    <div>
      <div class="p-5">
        <div class="grid grid-cols-2 gap-5">
          <form-item
            class="intro-y"
            label="Bank Pemberi DF"
            rules-text="Required"
            :validationData="validate.bank_pemberi_df"
          >
            <input
              v-model="validate.bank_pemberi_df.$model"
              placeholder="Bank Pemberi DF"
              class="form-control"
              :class="{
                'border-theme-6': validate.bank_pemberi_df.$error,
              }"
            />
          </form-item>
          <form-item
            class="intro-y"
            label="Surat Referensi Bank (.pdf)"
            rules-text="Required"
            :validationData="validate.surat_referensi_bank"
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
              <el-button size="small" type="primary">Click to upload</el-button>
              <template #tip>
                <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
              </template>
            </el-upload>
          </form-item>
          <form-item
            class="intro-y"
            label="Nominal"
            rules-text="Required"
            :validationData="validate.nominal"
          >
            <input
              v-model="validate.nominal.$model"
              placeholder="Nominal"
              class="form-control"
              :class="{
                'border-theme-6': validate.nominal.$error,
              }"
            />
          </form-item>
          <form-item
            class="intro-y"
            label="Masa Berlaku"
            rules-text="Required"
            :validationData="validate.masa_berlaku"
          >
            <el-date-picker
              v-model="validate.masa_berlaku.$model"
              type="date"
              placeholder="Masa Berlaku"
              style="width: 100%"
              class="form-control w-full"
              :class="{
                'border-theme-6': validate.masa_berlaku.$error,
              }"
            ></el-date-picker>
          </form-item>
          <form-item
            class="intro-y"
            label="Laporan Keuangan (.pdf)"
            rules-text="Required"
            :validationData="validate.laporan_keuangan"
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
              <el-button size="small" type="primary">Click to upload</el-button>
              <template #tip>
                <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
              </template>
            </el-upload>
          </form-item>
          <form-item
            class="intro-y"
            label="Rekening Koran 6 Bulan (.pdf)"
            rules-text="Required"
            :validationData="validate.laporan_keuangan"
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
            <button type="button" class="btn btn-primary w-24" @click="submit">
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
    </div>
  </document-form>
  <!-- END: Form Nama Perusahaan Layout -->
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
      bank_pemberi_df: { required },
      laporan_keuangan: { required },
      surat_referensi_bank: { required },
      rekening_koran_6_bulan: { required },
      nominal: { required },
      masa_berlaku: { required },
      nama_kios: { required },
      pic: { required },
      nomor_handphone: { required },
      alamat_kios: { required },
      province_id: { required },
      city_id: { required },
      district_id: { required },
      village_id: { required },
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
