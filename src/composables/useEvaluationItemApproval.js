import useVuelidate from "@vuelidate/core";
import { reactive, toRefs, ref, provide, onMounted, onBeforeMount, computed } from "vue-demi";

import apiService from "@/utils/api/evaluation/evaluationDocumentVerification.api";
import evaluationPeriodAPI from "@/utils/api/evaluation/evaluationPeriod.api";

import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function useEvaluationItemApproval(itemType, activeKuartal) {
    const bundle = ref(null);
    const bundleItem = ref({});
    const bundleItemStatus = ref(null);
    
    const route = useRoute();
    const store = useStore();
    
    const loading = ref(true);
    
    const user = store.state.auth.user;
    const verificationActivities = ref([]);

    let distributor_id = null;

    onBeforeMount(async() => {
        if (itemType != false) {
            if (route.meta.role == 'admin') {
                distributor_id = route.params.distributor_id;

                await getBundleItemData();
                await getBundleItemStatus();
                await getVerificationActivities();
            } else {
                distributor_id = store.state.auth.user.distributor.id;

                await getBundleItemStatus();
                await getVerificationActivities();
            }
            await getEvaluationBundle();
        }

        loading.value = false;
    })

    const getEvaluationBundle = async() => {
        await apiService.getEvaluationBundle(distributor_id).then(response => {
            bundle.value = response.data.any_bundle;
        });
    };

    // APPROVAL METHODS
    const approveBundleItem = async(notes) => {
        let bundleId = bundleItem.value.distributor_evaluation_id;
        await apiService.approveDistributorBundleItem(distributor_id, itemType, notes, bundleId).then(async response => {
            await getBundleItemData();
            await getVerificationActivities()
        });
    };

    const proposeBundleItemRevision = async(notes) => {
        let bundleId = bundleItem.value.distributor_evaluation_id;
        await apiService.proposeDistributorBundleItemRevision(distributor_id, itemType, notes, bundleId).then(async response => {
            await getBundleItemData();
            await getVerificationActivities()
        });
    };
    // END OF APPROVAL METHODS

    // GET BUNDLE DATA METHODS
    const getBundleItemData = async() => {
        await apiService.showBundleItemByType(distributor_id, itemType).then(response => {
            bundleItem.value = response.data;
        });
    };

    const getBundleItemStatus = async() => {
        await apiService.distributorBundleItemStatus(distributor_id, itemType).then(response => {
            // bundleItem.value = response.data;
            bundleItemStatus.value = response.data.data
        }).catch((error) => {

        });
    };

    const getVerificationActivities = async() => {
        await apiService.getVerificationActivities(distributor_id, itemType).then(response => {
            // bundleItem.value = response.data;
            verificationActivities.value = response.data.data
        });
    };
    // END OF GET BUNDLE DATA METHODS

    // DISTRIBUTOR SUBMIT REVISION METHODS
    const submitRevision = async() => {
        await apiService.submitDistributorBundleItemRevision(distributor_id, itemType).then(async response => {
            // bundleItem.value = response.data;
            await getBundleItemStatus()
            await getVerificationActivities()
        });
    }
    // END OF DISTRIBUTOR SUBMIT REVISION METHODS

    const parentAllowManage = computed(() => store.getters['evaluationAspectAvailability/isAvailableByQuartal'](itemType, activeKuartal));
    const allowManage = computed(() => {
        if (route.meta.role == 'distributor') {
            if (bundle.value) {
                if (bundleItemStatus.value != null && bundleItemStatus.value.need_revision) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (parentAllowManage.value === undefined) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return false;
    })

    return {
        bundleItem,
        bundleItemStatus,
        allowManage,
        approveBundleItem,
        proposeBundleItemRevision,
        loading,
        verificationActivities,
        getVerificationActivities,
        submitRevision
    }
}
