import { onMounted, ref } from "vue-demi";
import distributorRegionAPI from "@/utils/api/distributorRegion.api";
import { useRoute } from "vue-router";

export default function useDistributorRegionDropdown(user, formData) {
  const distributorRegions = ref([]);
  const distributorProvinces = ref([]);
  const distributorCities = ref([]); 

  const route = useRoute();

  let distributorId = "";

  onMounted(async () => {
    if (route.meta.role != "admin") {
      distributorId = 222;
    } else {
      distributorId = route.params.distributor_id;
    }

    await getProposedRegions();
  }); 

  async function onRegionChanged(region_code) {
    formData.province_id = null;
    formData.city_id = null;

    if (region_code) {
      await distributorRegionAPI
        .getProposedProvinces(distributorId, region_code)
        .then(response => {
          distributorProvinces.value = response.data.data;
        });
    }
  }

  async function onProvinceChanged(region_code, province_id) {
    formData.city_id = null;

    if (region_code && province_id) {
      await distributorRegionAPI
        .getProposedCities(distributorId, region_code, province_id)
        .then(response => {
          distributorCities.value = response.data.data;
        });
    }
  }

  async function getProposedRegions() {
    await distributorRegionAPI
      .getProposedRegions(distributorId)
      .then(response => {
        distributorRegions.value = response.data.data;
      });
  }

  return {
    distributorRegions,
    distributorProvinces,
    distributorCities,
    onRegionChanged,
    onProvinceChanged,
    getProposedRegions
  };
}
