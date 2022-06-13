<template>
  <div class="intro-y box">
    <div
      class="flex items-center p-5 border-b rounded-t-md bg-gray-700 text-white border-gray-200 dark:border-dark-5 cursor-pointer"
      @click="minimized = !minimized"
    >
      <slot name="title">
        <div class="flex w-full">
          <div class="flex items-center">
            <h2 class="font-medium text-base mr-auto">{{ title }}</h2>
          </div>
          <div class="flex items-center sm:ml-auto hover:-">
            <div
              v-if="isRegional"
              class="bg-theme-14 text-gray-800 inline-block px-4 py-1 rounded-xl mr-2"
            >
              Dokumen Regional
            </div>
            <div
              v-if="isDataBySystem"
              class="bg-theme-14 text-gray-800 inline-block px-4 py-1 rounded-xl mr-2"
            >
              Data by System
            </div>
            <div v-if="useVerificationButtons && bundleItemStatus != null">
              <div
                v-if="bundleItemStatus.need_revision"
                class="bg-yellow-400 text-yellow-800 inline-block px-4 py-1 rounded-xl mr-2"
              >
                Perlu Revisi
              </div>
            </div>
            <Maximize2Icon class="w-4" v-if="minimized" />
            <Minimize2Icon class="w-4" v-else />
          </div>
        </div>
      </slot>
    </div>
    <div :class="{ hidden: minimized }" class="pb-5">
      <div class="px-5">
        <div class="sm:grid grid-cols-2 gap-5 px-5 pt-5">
          <div class="">
            <p>Periode Penilaian:</p>
            <p class="text-xl" v-if="evaluationPeriod != null">{{ evaluationPeriod.period }}</p>
          </div>
          <div class="mt-5 text-right">
            <el-checkbox-group v-model="activeQuartal">
              <el-checkbox :label="1" disabled>Q1</el-checkbox>
              <el-checkbox :label="2" disabled>Q2</el-checkbox>
              <el-checkbox :label="3" disabled>Q3</el-checkbox>
              <el-checkbox :label="4" disabled>Q4</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <el-tabs class="m-5" v-model="activeName">
          <el-tab-pane label="Data" name="first">
            <div class="">
              <div v-if="itemType && !isAvailableByQuartal" class="mt-3 flex items-center bg-yellow-500 text-white text-sm font-bold px-4 py-3" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>Item Penilaian tidak tersedia pada kuartal saat ini</p>
              </div>
            </div>

            <slot :user="user" :bundleItemStatus="bundleItemStatus" :allowManage="allowManage" :isAvailableByQuartal="isAvailableByQuartal">
              <div class="h-10"></div>
            </slot>
            
            <div class="px-5" v-if="bundleItemStatus != null && bundleItemStatus.need_revision && user.role.name == 'distributor'">
              <button @click="submitRevision" class="btn bg-yellow-400 text-yellow-800 px-8">Kirim Revisi</button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Status Verifikasi" name="second" v-if="!(itemType && !isAvailableByQuartal)">
            <div class="ml-5 mt-3">
              <button @click="getVerificationActivities" class="btn btn-default px-4 mb-4">
                Refresh
              </button>
              <button @click="submitRevision" v-if="bundleItemStatus != null && bundleItemStatus.need_revision && user.role.name == 'distributor'" class="btn bg-yellow-400 text-yellow-800 px-8 ml-2">Kirim Revisi</button>
              <el-timeline>
                <el-timeline-item v-for="(activity, index) in verificationActivities" :key="index" :timestamp="activity.created_at">
                  <template v-if="route.meta.role == 'distributor'">
                    <span class="font-semibold">{{ titleCase(activity.action) }} (Region : {{ activity.evaluation_bundle_region.region_code }})</span>
                    <p v-if="activity.notes == null">
                      <i>No description provided</i>
                    </p>
                    <p v-else>{{ activity.notes }}</p>
                  </template>
                  <template v-else>
                    <p><span class="font-semibold">{{ titleCase(activity.action) }} (Region : {{ activity.evaluation_bundle_region.region_code }})</span> <br>{{ activity.created_by_user_email }} ({{ activity.created_by_role_name }})</p>
                    <p v-if="activity.notes == null">
                      <i>No description provided</i>
                    </p>
                    <p v-else>{{ activity.notes }}</p>
                  </template>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    
    <div v-if="!(itemType && !isAvailableByQuartal)">
      <div class="" v-if="route.meta.role == 'admin' && useVerificationButtons && ['vp_sales_region', 'ae_avp'].includes(user.role.name) && !loading && !(bundleItemStatus != null && bundleItemStatus.need_revision)">
        <div class="grid grid-cols-1 gap-5 border-t p-5" v-if=" ['BELUM_DIVERIFIKASI'].includes( bundleItem.verification_status ) && !['PERLU_DIREVISI'].includes( bundleItem.revision_status )">
          <div class="col-span-1">
            <form-item label="Catatan Verifikasi">
              <textarea :readonly=" ['SUDAH_DIVERIFIKASI'].includes( bundleItem.revision_status ) " v-model="notes" class="form-control"></textarea>
            </form-item>
          </div>
          <div class="col-span-1">
            <form-item label="Action">
              <div class="w-100 grid grid-cols-2 gap-2">
                <button :disabled=" ['SUDAH_DIVERIFIKASI'].includes( bundleItem.revision_status ) " @click="proposeBundleItemRevision(notes)" class="btn bg-theme-12 text-white disabled:opacity-50 disabled:cursor-not-allowed">
                  Revisi
                </button>
                <button :disabled=" ['SUDAH_DIVERIFIKASI'].includes( bundleItem.revision_status ) " @click="approveBundleItem(notes)" class="btn bg-theme-9 text-white disabled:opacity-50 disabled:cursor-not-allowed">
                  Setuju
                </button>
              </div>
            </form-item>
          </div>
        </div>
      </div>
    </div>
    <div v-if="minimized" class="pb-5"></div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  inject,
  provide,
  reactive,
  ref,
  toRefs,
} from "vue-demi";
import { useRoute } from "vue-router";
import { useStore } from "../../store";
import FormItem from "../form/FormItem.vue";
import useEvaluationItemApproval from "@/composables/useEvaluationItemApproval";

export default defineComponent({
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const notes = ref("");
    const user = computed(() => store.state.auth.user);
    // const approve = inject("approveBundleItem", () => false);
    // const proposeRevision = inject("proposeBundleItemRevision", () => false);
    const activeName = ref("first");

    const titleCase = (s) => {
        return s
            .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
            .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
            .toLowerCase()
            .replace(/(^\w|\b\w)/g, function(m) { return m.toUpperCase(); }) // title case words
            .replace(/\s+/g, ' ') // collapse repeated whitespace
            .replace(/^\s+|\s+$/, ''); // remove leading/trailing whitespace
    }

    if (props.itemType != false) {
      const {
        loading,
        bundleItem,
        bundleItemStatus,
        allowManage,
        approveBundleItem,
        proposeBundleItemRevision,
        verificationActivities,
        getVerificationActivities,
        submitRevision
      } = useEvaluationItemApproval(props.itemType, props.evaluationPeriod.active_kuartal);

      // bundleItem = bundleItemApproval.bundleItem;
      // bundleItemStatus = bundleItemApproval.bundleItemStatus;
      // allowManage = bundleItemApproval.allowManage;
      // approveBundleItem = bundleItemApproval.approveBundleItem;
      // proposeBundleItemRevision = bundleItemApproval.proposeBundleItemRevision;
      return {
        route,
        // approve,
        // reject,
        // proposeRevision,
        bundleItem,
        bundleItemStatus,
        allowManage,
        user,
        // allowedToManageDocument,
        activeName,
        minimized: ref(false),
        bundleItemApproval,
        approveBundleItem,
        proposeBundleItemRevision,
        loading,
        notes,
        verificationActivities,
        getVerificationActivities,
        submitRevision,
        titleCase,
        activeQuartal: computed(() => [props.evaluationPeriod.active_kuartal]),
        isAvailableByQuartal: computed(() => store.getters['evaluationAspectAvailability/isAvailableByQuartal'](props.itemType, props.evaluationPeriod.active_kuartal))
      };
    }

    // const allowedToManageDocument = ref(true);

    // if (route.meta.role === "admin") {
    //   allowedToManageDocument.value = false;
    // } else {
    //   allowedToManageDocument.value = user.allowed_to_manage_document;
    // }

    // provide("allowedToManageDocument", allowedToManageDocument);
    let bundleItemApproval = {};
    let bundleItem, allowManage = reactive({});

    let approveBundleItem, proposeBundleItemRevision = () => false;

    let loading = ref(true);

    let bundleItemStatus = reactive({ verification_status: null });

    return {
      route,
      // approve,
      // proposeRevision,
      bundleItem,
      bundleItemStatus,
      allowManage,
      user,
      // allowedToManageDocument,
      activeName,
      minimized: ref(false),
      bundleItemApproval,
      approveBundleItem,
      proposeBundleItemRevision,
      loading,
      notes,
      titleCase,
      activeQuartal: computed(() => [props.evaluationPeriod.active_kuartal]),
      isAvailableByQuartal: computed(() => store.getters['evaluationAspectAvailability/isAvailableByQuartal'](props.itemType, props.evaluationPeriod.active_kuartal))
    };
  },
  components: { FormItem },
  props: {
    title: {
      required: true,
    },
    useVerificationButtons: {
      default: true,
    },
    isRegional: {
      default: false,
    },
    isDataBySystem : {
      default: false,
    },
    itemType: {
      default: false,
    },
    evaluationPeriod: {
      required: true
    }
  },
});
</script>
