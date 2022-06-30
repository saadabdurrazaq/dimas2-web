<template>
  <div class="intro-y col-span-12 lg:col-span-4"></div>
  <div class="intro-y col-span-12 lg:col-span-8">
    <!-- BEGIN: Form Kendaraan -->
    <document-form title="Kendaraan" v-loading="loading" :itemType="2">
      <div>
        <div class="p-5">
          <div class="grid grid-cols-2 gap-5">
            <form-item
              label="Jenis Kendaraan"
              rules-text="Required"
              :validationData="validate.jenis_kendaraan"
            >
              <el-select
                class="form-control"
                v-model="validate.jenis_kendaraan.$model"
                :class="{
                  'border-theme-6': validate.jenis_kendaraan.$error,
                }"
              >
                <el-option value="Truk"></el-option>
                <el-option value="Truk Tronton"></el-option>
                <el-option value="Kapal Laut"></el-option>
              </el-select>
            </form-item>
            <form-item
              label="Jumlah Kendaraan"
              rules-text="Required"
              :validationData="validate.jumlah_kendaraan"
            >
              <el-select
                class="form-control"
                v-model="validate.jumlah_kendaraan.$model"
                :class="{
                  'border-theme-6': validate.jumlah_kendaraan.$error,
                }"
              >
                <el-option value="Truk"></el-option>
                <el-option value="Truk Tronton"></el-option>
                <el-option value="Kapal Laut"></el-option>
              </el-select>
            </form-item>
            <form-item
              class="intro-y"
              label="Kapasitas"
              rules-text="Required"
              :validationData="validate.kapasitas"
            >
              <input
                v-model="validate.kapasitas.$model"
                placeholder="Kapasitas"
                class="form-control"
                :class="{
                  'border-theme-6': validate.kapasitas.$error,
                }"
              />
            </form-item>
            <form-item
              class="intro-y"
              label="Status Kepemilikan" 
              rules-text="Required"
              :validationData="validate.status_kepemilikan"
            >
              <input
                v-model="validate.status_kepemilikan.$model"
                placeholder="Status Kepemilikan"
                class="form-control"
                :class="{
                  'border-theme-6': validate.status_kepemilikan.$error,
                }"
              />
            </form-item>
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
            <div class="grid grid-cols-2 gap-5"></div>
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
          <div
            class="ml-auto"
            v-if="route.meta.role == 'distributor' && allowManage"
          >
            <button
              :disabled="loading"
              :class="{ 'cursor-not-allowed': loading }"
              v-if="updateMode"
              type="button"
              class="btn w-24 bg-theme-9 text-white"
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
    <!-- END: Form Kendaraan -->
  </div>
</template>

<script>
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
import formDataDefaults from "../jaringan-distribusi/formData.default";
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
      jenis_kendaraan: { required },
      jumlah_kendaraan: { required },
      kapasitas: { required },
      status_kepemilikan: { required },
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

<style></style>
