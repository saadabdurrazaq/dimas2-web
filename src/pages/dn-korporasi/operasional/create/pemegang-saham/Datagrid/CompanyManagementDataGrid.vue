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
    <DxColumn
      data-field="name"
      data-type="string"
      caption="Nama"
    />
    <DxColumn
      data-field="nik"
      data-type="string"
      caption="NIK"
    />
    <DxColumn
      data-field="position"
      data-type="string"
      caption="Jabatan"
    />

    <DxPaging :page-size="5" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[5, 10, 20]"
    />
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
import { defineComponent, inject, onMounted, ref } from "vue";
import companyManagementAPI from "@/utils/api/companyManagement.api";
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
  },
  props: ['allowManage'],
  setup(props, { emit }) {
    const root = ref(null);
    const route = useRoute();

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

        let endpoint = `${env["VUE_APP_API_ENDPOINT"]}/company-management${params}`;

        if (route.meta.role == 'admin') {
          endpoint = `${env["VUE_APP_API_ENDPOINT"]}/distributor/${route.params.distributor_id}/item-details-data/item-type/11`
        }

        return httpClient
          .get(endpoint)
          .then((response) => response.data)
          .catch(() => {
            throw "Data Loading Error";
          });
      },
    });

    const updateFormData = inject("updateFormData");

    const onSelectionChanged = ({ selectedRowsData }) => {
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
    };

    const onToolbarPreparing = (e) => {
      e.toolbarOptions.items.unshift({
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
      route
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
