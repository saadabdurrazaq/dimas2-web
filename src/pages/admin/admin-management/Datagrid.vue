<template>
  <DxDataGrid
    ref="root"
    :data-source="store"
    :show-borders="true"
    :remote-operations="true"
    :selection="{ mode: 'single' }"
    @selection-changed="onSelectionChanged"
    @toolbar-preparing="onToolbarPreparing($event)"
  >
    <DxFilterRow :visible="true"/>
    <DxHeaderFilter :visible="true"/>

    <DxColumn data-field="name" data-type="string" caption="Nama"/>
    <DxColumn data-field="email" data-type="string" caption="Email" />
    <DxColumn data-field="role.name" data-type="string" caption="Role" :allow-filtering="false"/>
    <DxColumn data-field="created_at" data-type="date" caption="Tanggal Pendaftaran"/>
    <DxColumn data-field="verification_status" data-type="string" caption="Status"/>

    <DxPaging :page-size="10" />
    <DxPager :show-page-size-selector="true" :allowed-page-sizes="[5, 10, 20]" />
    <template #actionLeft="">
      <div v-if="selectedData.length != 0" class="flex">
        <button @click="clearSelection" class="btn bg-white mr-2">Clear Selection</button>
      </div>
    </template>

    <template #actionRight="">
      <div class="relative inline-block text-left mr-2" v-if="selectedData.length">
        <div>
          <button v-click-outside="() => showDropdown = false" @click="showDropdown = !showDropdown" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
            Action
            <!-- Heroicon name: solid/chevron-down -->
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div v-show="showDropdown" class="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div class="py-1" role="none">
            <router-link
              tag="a"
              :to="{
                name: 'manage-user.admin.update',
                params: {
                  user_id: selectedData[0].id
                }
              }"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Update
            </router-link>
            <a href="#" v-if="['vp_sales_region', 'svp_region'].includes(selectedData[0].role.name)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Assign Region</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Reset Password</a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Deactivate</a>
          </div>
        </div>
      </div>
    </template>

    <template #addUser="">
      <div class="relative inline-block text-left mr-2">
        <div class="py-1" role="none">
          <router-link tag="a" :to="{ name: 'manage-user.admin.create' }" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            New Admin User
          </router-link>
        </div>
      </div>
    </template>

  </DxDataGrid>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxPager,
  DxSorting,
  DxHeaderFilter,
  DxFilterRow,
} from "devextreme-vue/data-grid";

import CustomStore from "devextreme/data/custom_store";
import httpClient from "@/utils/api/httpClient";
import { computed, defineComponent, inject, onMounted, reactive, ref } from "vue";
import companyManagementAPI from "@/utils/api/companyManagement.api";
import { ElNotification } from "element-plus";

export default defineComponent({
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxPager,
    DxSorting,
    DxHeaderFilter,
    DxFilterRow,
  },
  setup(props, { emit }) {
    const root = ref(null);
    const selectedData = ref([]);
    const showDropdown = ref(false)

    onMounted(() => {

    });

    function isNotEmpty(value) {
      return value !== undefined && value !== null && value !== "";
    }

    const env = inject("env");

    const store = new CustomStore({
      key: "id",
      load: function (loadOptions) {
        let params = "?";
        [
          "skip",
          "take",
          "requireTotalCount",
          "requireGroupCount",
          "sort",
          "filter",
          "totalSummary",
          "group",
          "groupSummary",
        ].forEach(function (i) {
          if (i in loadOptions && isNotEmpty(loadOptions[i])) {
            params += `${i}=${JSON.stringify(loadOptions[i])}&`;
          }
        });
        params = params.slice(0, -1);
        return httpClient
          .get(`${env["VUE_APP_API_ENDPOINT"]}/admins${params}`)
          .then((response) => response.data)
          .catch(() => {
            throw "Data Loading Error";
          });
      },
    });

    const updateFormData = inject("updateFormData");

    const onSelectionChanged = ({ selectedRowsData }) => {
      selectedData.value = selectedRowsData
      updateFormData(selectedRowsData[0]);
    };

    const activate = async (id) => {
      await companyManagementAPI.activate(id)
        .then((response) => {
          ElNotification.success({
            title: "Success",
            position: "bottom-right",
          });

          refreshDataGrid();
        })
        .catch((error) => {
          ElNotification.error({
            title: "Failed",
            position: "bottom-right",
          });
        });
    };

    const deactivate = async (id) => {
      await companyManagementAPI.deactivate(id)
        .then((response) => {
          ElNotification.success({
            title: "Success",
            position: "bottom-right",
          });

          refreshDataGrid();
        })
        .catch((error) => {
          ElNotification.error({
            title: "Failed",
            position: "bottom-right",
          });
        });
    };

    const refreshDataGrid = () => {
      root.value.instance.refresh();
    };

    const clearSelection = () => {
      root.value.instance.clearSelection();
      showDropdown.value = false
    };

    const onToolbarPreparing = (e) => {
      e.toolbarOptions.items.unshift(
      {
        location: 'before',
        template: 'actionLeft'
      },
      {
        location: 'after',
        template: 'actionRight'
      },
      {
        location: 'after',
        template: 'addUser'
      },
      {
        location: "after",
        widget: "dxButton",
        options: {
          icon: "refresh",
          onClick: refreshDataGrid.bind(this),
        },
      });
    };

    return {
      store,
      onSelectionChanged,
      activate,
      deactivate,
      onToolbarPreparing,
      refreshDataGrid,
      clearSelection,
      root,
      selectedData,
      showDropdown
    };
  },
  // methods: {
  //   clearSelection() {
  //     this.$refs.dataGrid.instance.clearSelection()
  //   },
  //    onToolbarPreparing(e) {
  //     e.toolbarOptions.items.unshift({
  //       location: 'after',
  //       widget: 'dxButton',
  //       options: {
  //         icon: 'refresh',
  //         onClick: this.refreshDataGrid.bind(this)
  //       }
  //     });
  //   },
  //   refreshDataGrid() {
  //     this.$refs.dataGrid.instance.refresh();
  //   }
  // }
});
</script>

<style>
</style>
