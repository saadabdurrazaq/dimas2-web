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
      <el-tabs v-model="activeName" class="p-5" v-if="useVerificationButtons && (user.has_registration_number || route.meta.role == 'admin') && itemType != false">
        <el-tab-pane label="Data" name="first">
          <slot
            :user="user"
            :bundleItemStatus="bundleItemStatus"
            :allowManage="allowManage"
          >
            <div class="h-10"></div>
          </slot>
          <div class="px-5" v-if="bundleItemStatus != null && bundleItemStatus.need_revision && user.role.name == 'distributor'">
            <button @click="submitRevision" class="btn bg-yellow-400 text-yellow-800 px-8">Kirim Revisi</button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Status Verifikasi" name="second">
          <div class="ml-5 mt-3">
            <button
              @click="getVerificationActivities"
              class="btn btn-default px-4 mb-4"
            >
              Refresh
            </button>
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in verificationActivities"
                :key="index"
                :timestamp="activity.created_at"
              >
                <!-- <span class="font-semibold">{{activity.created_by_user_email}} &nbsp;</span> -->
                <template v-if="route.meta.role == 'distributor'">
                  <span class="font-semibold">{{ titleCase(activity.action) }}</span>
                  <p v-if="activity.notes == null">
                    <i>No description provided</i>
                  </p>
                  <p v-else>{{ activity.notes }}</p>
                </template>
                <template v-else>
                  <p><span class="font-semibold">{{ titleCase(activity.action) }}</span> <br>{{ activity.created_by_user_email }} ({{ activity.created_by_role_name }})</p>
                  <p v-if="activity.notes == null">
                    <i>No description provided</i>
                  </p>
                  <p v-else>{{ activity.notes }}</p>
                </template>
              </el-timeline-item>
              <el-timeline-item :key="verificationActivities.length + 1" v-if="bundleItemStatus != null && bundleItemStatus.need_revision && user.role.name == 'distributor'">
                <button @click="submitRevision" class="btn bg-yellow-400 text-yellow-800 px-8">Kirim Revisi</button>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-tab-pane>
      </el-tabs>
      <template v-else>
        <div class="px-5">
          <slot
            :user="user"
            :bundleItemStatus="bundleItemStatus"
            :allowManage="allowManage"
          >
            <div class="h-10"></div>
          </slot>
        </div>
      </template>
    </div>
    <!-- here -->
    <!-- <pre>allow manage: {{ allowManage }}</pre> -->
    <div
      class=""
      v-if="
        route.meta.role == 'admin' &&
        useVerificationButtons &&
        ['vp_sales_region', 'ae_avp'].includes(user.role.name) &&
        !loading
      "
    >
      <div
        class="grid grid-cols-1 gap-5 border-t p-5"
        v-if="
          !['SUDAH_DIVERIFIKASI', 'DITOLAK'].includes(
            bundleItem.verification_status
          ) &&
          ['TIDAK_ADA_REVISI', 'SUDAH_DIREVISI'].includes(
            bundleItem.revision_status
          )
        "
      >
        <div class="col-span-1">
          <form-item label="Catatan Verifikasi">
            <textarea
              :readonly="
                ['SUDAH_DIVERIFIKASI', 'DITOLAK'].includes(
                  bundleItem.verification_status
                )
              "
              v-model="notes"
              class="form-control"
            ></textarea>
          </form-item>
        </div>
        <div class="col-span-1">
          <form-item label="Action">
            <div class="w-100 grid grid-cols-3 gap-2">
              <button
                :disabled="
                  ['SUDAH_DIVERIFIKASI', 'DITOLAK'].includes(
                    bundleItemStatus.verification_status
                  )
                "
                @click="rejectBundleItem(notes)"
                class="btn bg-theme-6 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tolak
              </button>
              <button
                :disabled="
                  ['SUDAH_DIVERIFIKASI', 'DITOLAK'].includes(
                    bundleItemStatus.verification_status
                  )
                "
                @click="proposeBundleItemRevision(notes)"
                class="btn bg-theme-12 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Revisi
              </button>
              <button
                :disabled="
                  ['SUDAH_DIVERIFIKASI', 'DITOLAK'].includes(
                    bundleItemStatus.verification_status
                  )
                "
                @click="approveBundleItem(notes)"
                class="btn bg-theme-9 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Setuju
              </button>
            </div>
          </form-item>
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
import useBundleItemApproval from "@/composables/useBundleItemApproval";

export default defineComponent({
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const notes = ref("");
    const user = computed(() => store.state.auth.user);
    // const approve = inject("approveBundleItem", () => false);
    // const reject = inject("rejectBundleItem", () => false);
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
        rejectBundleItem,
        proposeBundleItemRevision,
        verificationActivities,
        getVerificationActivities,
        submitRevision
      } = useBundleItemApproval(props.itemType);

      // bundleItem = bundleItemApproval.bundleItem;
      // bundleItemStatus = bundleItemApproval.bundleItemStatus;
      // allowManage = bundleItemApproval.allowManage;
      // approveBundleItem = bundleItemApproval.approveBundleItem;
      // rejectBundleItem = bundleItemApproval.rejectBundleItem;
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
        rejectBundleItem,
        proposeBundleItemRevision,
        loading,
        notes,
        verificationActivities,
        getVerificationActivities,
        submitRevision,
        titleCase
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
    let bundleItem,
      allowManage = reactive({});

    let approveBundleItem,
      rejectBundleItem,
      proposeBundleItemRevision = () => false;

    let loading = ref(true);

    let bundleItemStatus = reactive({ verification_status: null });

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
      rejectBundleItem,
      proposeBundleItemRevision,
      loading,
      notes,
      titleCase
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
    itemType: {
      default: false,
    },
  },
});
</script>
