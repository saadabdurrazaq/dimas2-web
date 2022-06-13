<template>
  <DxDataGrid
    ref="root"
    :data-source="store"
    :show-borders="true"
    :remote-operations="true"
    :selectedRowKeys="selectedRowKeys"
    @selection-changed="onSelectionChanged"
    @toolbar-preparing="onToolbarPreparing($event)"
  >
    <DxFilterRow :visible="true" />
    <DxHeaderFilter :visible="true" />
    <DxColumn data-field="code" data-type="string" caption="Code" />
    <DxColumn data-field="name" data-type="string" caption="Nama" />
    <DxPaging :page-size="10" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[5, 10, 20]"
    />
    <DxSelection
      select-all-mode="allPages"
      show-check-boxes-mode="onClick"
      mode="multiple"
    />
    <template #actionLeft="{ data }"> </template>

    <template #actionRight="{ data }"> </template>
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
  DxSelection,
} from "devextreme-vue/data-grid";

import CustomStore from "devextreme/data/custom_store";
import httpClient from "@/utils/api/httpClient";
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  reactive,
  ref,
} from "vue";
import regionAPI from "@/utils/api/region.api";
import { ElNotification } from "element-plus";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxPager,
    DxSorting,
    DxHeaderFilter,
    DxFilterRow,
    DxSelection,
  },
  setup(props, { emit }) {
    const root = ref(null);
    const route = useRoute();
    const selectedData = ref([]);
    const showDropdown = ref(false);
    const selectedRowKeys = ref([]);

    onMounted(async () => {
      await getAssignedValue();
    });

    function isNotEmpty(value) {
      return value !== undefined && value !== null && value !== "";
    }

    const env = inject("env");

    const store = new CustomStore({
      key: "code",
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
          .get(`${env["VUE_APP_API_ENDPOINT"]}/regions${params}`)
          .then((response) => response.data)
          .catch(() => {
            throw "Data Loading Error";
          });
      },
    });

    const onSelectionChanged = ({ selectedRowsData }) => {
      selectedData.value = selectedRowsData;
      selectedRowKeys.value = selectedRowsData.map((region) => region.code);
    };

    const refreshDataGrid = () => {
      root.value.instance.refresh();
    };

    const clearSelection = () => {
      root.value.instance.clearSelection();
      showDropdown.value = false;
    };

    const onToolbarPreparing = (e) => {
      e.toolbarOptions.items.unshift(
        {
          location: "before",
          template: "actionLeft",
        },
        {
          location: "after",
          template: "actionRight",
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            icon: "refresh",
            onClick: refreshDataGrid.bind(this),
          },
        }
      );
    };

    const save = async () => {
      await regionAPI
        .assignAdminRegions(route.params.user_id, selectedRowKeys.value)
        .then(async (response) => {})
        .catch(() => {})
        .finally(async () => {
          await getAssignedValue();
          await refreshDataGrid();
        });
    };

    const getAssignedValue = async () => {
      selectedRowKeys.value = [];
      return await regionAPI
        .getAdminRegions(route.params.user_id)
        .then((response) => {
          response.data.forEach((region) => {
            selectedRowKeys.value.push(region.code);
          });
        });
    };

    return {
      store,
      onSelectionChanged,
      onToolbarPreparing,
      refreshDataGrid,
      clearSelection,
      root,
      selectedData,
      showDropdown,
      selectedRowKeys,
      save,
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
