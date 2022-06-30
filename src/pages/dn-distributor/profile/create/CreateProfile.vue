<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav />
    <!-- BEGIN: Transactions -->
    <div class="col-span-12 xl:col-span-8">
      <document-form
        title="Profile"
        id="updateProfile"
        v-loading="profileLoading"
      >
        <div class="pt-5">
          Company code: ...
          <div class="border-t pt-3" style="margin-top: 10px"></div>
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6">
              <form-item
                label="Nama Distributor"
                rules-text="Required"
                :validationData="validate.name"
                class="intro-y"
              >
                <input
                  placeholder="Nama Distributor"
                  type="text"
                  class="form-control"
                  v-model="validate.name.$model"
                  :class="{
                    'border-theme-6': validate.name.$error,
                  }"
                />
              </form-item>
            </div>
            <div class="col-span-6">
              <form-item
                label="Direktur Utama"
                rules-text="Required"
                :validationData="validate.president_director"
                class="intro-y"
              >
                <input
                  placeholder="Direktur Utama"
                  type="text"
                  class="form-control"
                  v-model="validate.president_director.$model"
                  :class="{
                    'border-theme-6': validate.president_director.$error,
                  }"
                />
              </form-item>
            </div>
            <div class="col-span-6">
              <form-item
                label="Email Perusahaan"
                rules-text="Required"
                :validationData="validate.company_email"
              >
                <input
                  v-model="validate.company_email.$model"
                  type="email"
                  class="form-control"
                  placeholder="distributor@mail.com"
                  :class="{
                    'border-theme-6': validate.company_email.$error,
                  }"
                />
              </form-item>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <div class="w-full text-right">
            <button
              type="button"
              class="btn btn-primary w-24"
              @click="save"
            >
              Save
            </button>
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
  getDistributorProfile,
  updateDistributorProfile,
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
  components: { DocumentForm, FormItem, DNNav },
  setup() {
    const formData = reactive({
      ...formDataDefaults,
    });
    const rules = {
      // nama_perusahaan: { required },
      name: { required },
      // direktur_utama: { required },
      president_director: { required },
      // alamat_perusahaan: { required },
      // kode_pos: { required },
      company_email: { required },
      // nomor_handphone: { required },
      // nomor_telepon: { required },
      // province_id: { required },
      // city_id: { required },
      // district_id: { required },
      // village_id: { required },
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

    let distributor_id = "";

    if (user.role.name == "distributor") {
      distributor_id = user.distributor.id;
    }

    onMounted(async () => {
      await getProvinces();
      await getDistributorData();

      if (provinces.value != null) {
        loading.value = false;
      }
    });

    const getDistributorData = async () => {
      if (user.role.name == "distributor") {
        await getDistributorProfile(distributor_id)
          .then((response) => {
            const data = response.data.data;

            Object.keys(formData).forEach((key) => {
              if (data.hasOwnProperty(key)) {
                formData[key] = data[key];
              }
            });
          })
          .finally(() => {
            loading.value = false;
          });
      } else {
        await getBundleItemDetailData(route.params.distributor_id, 1)
          .then((response) => {
            const data = response.data.data;

            Object.keys(formData).forEach((key) => {
              if (data.hasOwnProperty(key)) {
                formData[key] = data[key];
              }
            });
          })
          .finally(() => {
            loading.value = false;
          });
      }
    };

    const loading = ref(true);

    const save = async () => { 
      validate.value.$touch();
      if (!validate.value.$invalid) {
        const { id, ...data } = formData;

        data.distributor_id = distributor_id;

        loading.value = true;
        await updateDistributorProfile(formData.id, data)
          .then(async (response) => {
            ElNotification.success({
              title: "Data berhasil disimpan",
              position: "bottom-right",
            });

            await getDistributorData();
          })
          .catch((error) => {
            console.log(error);
            ElNotification.error({
              title: "Data gagal disimpan",
              message: "Silahkan periksa form sekali lagix",
              position: "bottom-right",
            });
          })
          .finally(() => {
            loading.value = false;
          });
      } else {
        ElNotification.error({
          title: "Submit Gagal",
          message: "Silahkan periksa form sekali lagic",
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
                console.log(error);
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
