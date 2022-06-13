import useVuelidate from "@vuelidate/core";
import { reactive, toRefs, ref, provide, onMounted, onBeforeMount, computed } from "vue-demi";

import apiService from "@/utils/api/documentVerification.api";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function useEvaluationAspectAvailabilityChecking(itemType) {
    const bundleItem = ref({});
    const bundleItemStatus = ref(null);
    const route = useRoute();
    const store = useStore();
    const loading = ref(true);
    const user = store.state.auth.user;
    const verificationActivities = ref([]);

    let distributor_id = null;
    let registration_period = null;

    onBeforeMount(async() => {
        if (itemType != false) {
            if (route.meta.role == 'admin') {
                distributor_id = route.params.distributor_id
                registration_period = route.query.registration_period
            } else {
                if (user.has_registration_number) {
                    distributor_id = store.state.auth.user.distributor.id
                }

            }
        }

        loading.value = false;
    })

    const approveBundleItem = async(notes) => {
        await apiService.approveDistributorBundleItem(distributor_id, registration_period, itemType, notes).then(async response => {
            await getBundleItemData();
            await getVerificationActivities()
        });
    };

    const rejectBundleItem = async(notes) => {
        await apiService.rejectDistributorBundleItem(distributor_id, registration_period, itemType, notes).then(async response => {
            await getBundleItemData();
            await getVerificationActivities()
        });
    };

    const proposeBundleItemRevision = async(notes) => {
        await apiService.proposeDistributorBundleItemRevision(distributor_id, registration_period, itemType, notes).then(async response => {
            await getBundleItemData();
            await getVerificationActivities()
        });
    };

    const getBundleItemData = async() => {
        await apiService.showBundleItemByType(distributor_id, itemType).then(response => {
            bundleItem.value = response.data;
        });
    };

    const getBundleItemStatus = async() => {
        await apiService.distributorBundleItemStatus(distributor_id, itemType).then(response => {
            // bundleItem.value = response.data;
            bundleItemStatus.value = response.data.data
        });
    };

    const getVerificationActivities = async() => {
        await apiService.getVerificationActivities(distributor_id, itemType).then(response => {
            // bundleItem.value = response.data;
            verificationActivities.value = response.data.data
        });
    };

    const submitRevision = async() => {
        await apiService.submitDistributorBundleItemRevision(distributor_id, registration_period, itemType).then(async response => {
            // bundleItem.value = response.data;
            await getBundleItemStatus()
            await getVerificationActivities()
        });
    }

    const allowManage = computed(() => {
        if (route.meta.role == 'distributor') {
            if (bundleItemStatus.value == null) {
                return true;
            }

            if (bundleItemStatus.value.need_revision) {
                return true;
            }
        }

        return false;
    })

    return {
        bundleItem,
        bundleItemStatus,
        allowManage,
        approveBundleItem,
        rejectBundleItem,
        proposeBundleItemRevision,
        loading,
        verificationActivities,
        getVerificationActivities,
        submitRevision
    }
}
