import { ref } from "vue-demi";
import territoryAPI from "@/utils/api/territory.api";

import RegionsAPI from "@/utils/api/distributorRegions.api";

export default function useRegionSearch(formData) {  
    const provinces = ref([]);
    const cities = ref([]);
    const districts = ref([]);
    const villages = ref([]);

    const provinceOptionsLoading = ref(false);
    const cityOptionsLoading = ref(false);
    const districtOptionsLoading = ref(false);
    const villageOptionsLoading = ref(false);

    const getProvinces = async(resetInput = true) => {
        provinceOptionsLoading.value = true;

        await territoryAPI
            .province()
            .then(response => {
                provinces.value = response.data;
                if (resetInput) {
                    formData.city_id = null;
                    formData.district_id = null;
                    formData.village_id = null;
                }
            })
            .finally(() => {
                provinceOptionsLoading.value = false;
            });
    };

    const getCities = async(province_id = null, resetInput = true) => {
        cityOptionsLoading.value = true;

        cities.value = [];

        await territoryAPI
            .city(province_id)
            .then(response => {
                cities.value = response.data;
                if (resetInput) {
                    formData.city_id = null;
                    formData.district_id = null;
                    formData.village_id = null;
                }
            })
            .finally(() => {
                cityOptionsLoading.value = false;
            });
    };

    const getDistricts = async(city_id = null, resetInput = true) => {
        districtOptionsLoading.value = true;
        districts.value = [];

        await territoryAPI
            .district(city_id)
            .then(response => {
                districts.value = response.data;

                if (resetInput) {
                    formData.district_id = null;
                    formData.village_id = null;
                }
            })
            .finally(() => {
                districtOptionsLoading.value = false;
            });
    };

    const getVillages = async(district_id = null, resetInput = true) => {
        villageOptionsLoading.value = true;
        villages.value = [];

        await territoryAPI
            .village(district_id)
            .then(response => {
                villages.value = response.data;

                if (resetInput) {
                    formData.village_id = null;
                }
            })
            .finally(() => {
                villageOptionsLoading.value = false;
            });
    };

    const regions = ref([]);
    const regionsOptionsLoading = ref(false);
    const getRegions = async(resetInput = true) => {
        regionsOptionsLoading.value = true;
        await RegionsAPI.regions()
            .then(response => {
                if (resetInput) {
                    formData.regions_code = null;
                    formData.regions_provinces_id = null;
                    formData.producer_area_city_id = null;
                }
                regions.value = response.data;
            })
            .catch((e) => {

            })
            .finally(() => {
                provinceOptionsLoading.value = false;
            });
    };

    const regionProvinces = ref([]);
    const regionProvincesOptionsLoading = ref(false);
    const getRegionProvinces = async(regions_code = null, resetInput = true) => {
        regionProvincesOptionsLoading.value = true;

        regionProvinces.value = [];

        await RegionsAPI.regionProvinces(regions_code)
            .then(response => {
                if (resetInput) {
                    formData.producer_area_city_id = null;
                }
                regionProvinces.value = response.data;
            })
            .finally(() => {
                regionProvincesOptionsLoading.value = false;
            });
    };

    const regionProducerArea = ref([]);
    const regionProducerAreaOptionsLoading = ref(false);
    const getRegionProducerArea = async(regions_code = null, resetInput = true) => {
        regionProducerAreaOptionsLoading.value = true;

        regionProducerArea.value = [];

        await RegionsAPI.regionProducerArea(regions_code)
            .then(response => {
                regionProducerArea.value = response.data;
            }).finally(() => {
                regionProducerAreaOptionsLoading.value = false;
            });
    };

    return {
        provinces,
        getProvinces,
        provinceOptionsLoading,
        cities,
        getCities,
        cityOptionsLoading,
        districts,
        getDistricts,
        districtOptionsLoading,
        villages,
        getVillages,
        villageOptionsLoading,

        regions,
        getRegions,
        regionsOptionsLoading,
        regionProvinces,
        getRegionProvinces,
        regionProvincesOptionsLoading,
        regionProducerArea,
        getRegionProducerArea,
        regionProducerAreaOptionsLoading
    };
}