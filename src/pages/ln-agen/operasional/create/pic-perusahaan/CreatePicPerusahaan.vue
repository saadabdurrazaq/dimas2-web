<template>
  <document-form title="PIC Company" v-loading="loading" :itemType="2">
    <div>
      <div class="p-5">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-6">
            <form-item
              class="intro-y"
              label="Name"
              rules-text="Required"
              :validationData="validate.name"
            >
              <input
                v-model="validate.name.$model"
                placeholder="Name"
                class="form-control"
                :class="{
                  'border-theme-6': validate.name.$error,
                }"
              />
            </form-item>
          </div>
          <div class="col-span-6">
            <form-item
              class="intro-y"
              label="Position"
              rules-text="Required"
              :validationData="validate.position"
            >
              <input
                v-model="validate.position.$model"
                placeholder="Position"
                class="form-control"
                :class="{
                  'border-theme-6': validate.position.$error,
                }"
              />
            </form-item>
          </div>
          <div class="col-span-12">
            <form-item
              class="intro-y"
              label="Company Address"
              rules-text="Required"
              :validationData="validate.company_address"
            >
              <input
                v-model="validate.company_address.$model"
                placeholder="Company Address"
                class="form-control"
                :class="{
                  'border-theme-6': validate.company_address.$error,
                }"
              />
            </form-item>
          </div>
          <div class="col-span-6">
            <form-item
              class="intro-y"
              label="Email"
              rules-text="Required"
              :validationData="validate.email"
            >
              <input
                v-model="validate.email.$model"
                placeholder="Email"
                class="form-control"
                :class="{
                  'border-theme-6': validate.email.$error,
                }"
              />
            </form-item>
          </div>
          <div class="col-span-6"> 
            <form-item
              class="intro-y"
              label="Phone Number" 
              rules-text="Required"
              :validationData="validate.phone_number"
            >
              <input
                v-model="validate.phone_number.$model"
                placeholder="Phone Number"
                class="form-control"
                :class="{
                  'border-theme-6': validate.phone_number.$error,
                }"
              />
            </form-item>
          </div>
          <div class="grid grid-cols-2 gap-5"></div>
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

      <!-- <Tabulator></Tabulator> -->
      <DataGrid
        :allowManage="allowManage"
        ref="dataGrid"
        class="m-5"
      ></DataGrid>
    </div>
  </document-form>
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
      name: { required },
      position: { required },
      email: { required },
      phone_number: { required },
      company_address: { required },
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
