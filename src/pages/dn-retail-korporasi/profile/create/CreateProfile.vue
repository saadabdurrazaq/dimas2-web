<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav/>
    <!-- BEGIN: Transactions -->
    <div class="col-span-12 xl:col-span-8">
      <document-form title="Profile" id="updateProfile" v-loading="profileLoading">
        <div class="pt-5">
          Company code: ...
          <div class="border-t pt-3" style="margin-top:10px;">  
          </div>
          <div class="grid grid-cols-12 gap-5">  
            <div class="col-span-6">
              <form-item
                class="intro-y"
                label="Nama Perusahaan"
                rules-text="Required"
                :validationData="validate.nama_perusahaan"
              >
                <input
                  v-model="validate.nama_perusahaan.$model"
                  placeholder="Nama Perusahaan"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.nama_perusahaan.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                class="intro-y"
                label="Direktur Utama" 
                rules-text="Required"
                :validationData="validate.direktur_utama"
              >
                <input
                  v-model="validate.direktur_utama.$model"
                  placeholder="Direktur Utama"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.direktur_utama.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-12">
              <form-item
                class="intro-y"
                label="Alamat Perusahaan" 
                rules-text="Required"
                :validationData="validate.alamat_perusahaan"
              >
                <input
                  v-model="validate.alamat_perusahaan.$model"
                  placeholder="Alamat Perusahaan"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.alamat_perusahaan.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                label="Propinsi"
                rules-text="Required"
                :validationData="validate.province_id"
                class="intro-y"
              >
                <el-select
                  @change="(e) => getCities(e)"
                  v-model="formData.province_id"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.province_id.$error,
                  }"
                  filterable
                >
                  <el-option
                    v-for="item in provinces"
                    :key="item.province_id"
                    :label="item.province_name"
                    :value="item.province_id"
                  ></el-option>
                </el-select>
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                label="Kota/Kabupaten"
                rules-text="Required"
                :validationData="validate.city_id"
                class="intro-y"
              >
                <el-select
                  @change="(e) => getDistricts(e)"
                  v-model="formData.city_id"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.city_id.$error,
                  }"
                  :disabled="formData.province_id == null"
                  :loading="cityOptionsLoading"
                  filterable
                >
                  <el-option
                    v-for="item in cities"
                    :key="item.city_id"
                    :label="item.city_type + ' ' + item.city_name"
                    :value="item.city_id"
                  ></el-option>
                </el-select>
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                key=""
                label="Kecamatan"
                rules-text="Required"
                :validationData="validate.district_id"
                class="intro-y"
              >
                <el-select
                  @change="(e) => getVillages(e)"
                  v-model="formData.district_id"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.district_id.$error,
                  }"
                  :disabled="formData.city_id == null"
                  :loading="districtOptionsLoading"
                  filterable
                >
                  <el-option
                    v-for="item in districts"
                    :key="item.district_id"
                    :label="item.district_name"
                    :value="item.district_id"
                  ></el-option>
                </el-select>
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                label="Kelurahan/Desa - Kode Pos"
                rules-text="Required"
                :validationData="validate.village_id"
                class="intro-y"
              >
                <el-select
                  v-model="formData.village_id"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.village_id.$error,
                  }"
                  :disabled="formData.district_id == null"
                  :loading="villageOptionsLoading"
                  filterable
                >
                  <el-option
                    v-for="item in villages"
                    :key="item.village_id"
                    :label="`${item.village_name} - ${item.postal_code}`"
                    :value="item.village_id"
                  ></el-option>
                </el-select>
              </form-item>
            </div>

            <div class="col-span-6"> 
              <form-item
                class="intro-y"
                label="Kode Pos" 
                rules-text="Required"
                :validationData="validate.kode_pos"
              >
                <input
                  v-model="validate.kode_pos.$model"
                  placeholder="Kode Pos"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.kode_pos.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                class="intro-y"
                label="Email Perusahaan" 
                rules-text="Required"
                :validationData="validate.email_perusahaan"
              >
                <input
                  v-model="validate.email_perusahaan.$model"
                  placeholder="Email Perusahaan"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.email_perusahaan.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                class="intro-y"
                label="Nomor Handphone" 
                rules-text="Required"
                :validationData="validate.nomor_handphone"
              >
                <input
                  v-model="validate.nomor_handphone.$model"
                  placeholder="Nomor Handphone"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.nomor_handphone.$error,
                  }"
                />
              </form-item>
            </div>

            <div class="col-span-6">
              <form-item
                class="intro-y"
                label="Nomor Telepon" 
                rules-text="Required"
                :validationData="validate.nomor_telepon"
              >
                <input
                  v-model="validate.nomor_telepon.$model"
                  placeholder="Nomor Telepon"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.nomor_telepon.$error,
                  }"
                />
              </form-item>
            </div>
          </div>
        </div>
        <div class="pt-5"> 
          <div class="w-full text-right">
            <button type="button" class="btn btn-primary w-24" @click="saveProfile">Save</button>
          </div>
        </div>
      </document-form>
    </div>
    <!-- END: Transactions -->
  </div>
</template>

<script>
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DNNav from "../../DNNav.vue";
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
  components: { DocumentForm, FormItem, DNNav},
  setup() {
    const formData = reactive({ ...formDataDefaults });
    const rules = {
      nama_perusahaan: { required },
      direktur_utama: { required },
      alamat_perusahaan: { required },
      kode_pos: { required },
      email_perusahaan: { required },
      nomor_handphone: { required },
      nomor_telepon: { required },
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

    return {
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

<style>
</style>
