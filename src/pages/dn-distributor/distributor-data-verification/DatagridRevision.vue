<template>
  <DxDataGrid
    ref="root"
    :data-source="customStore"
    :show-borders="true"
    :remote-operations="{
      paging: true,
      filtering: true,
      sorting: true
    }"
    :selection="{ mode: 'single' }"
    @selection-changed="onSelectionChanged"
    @toolbar-preparing="onToolbarPreparing($event)"
  >
    <DxFilterRow :visible="true" />

    <DxColumn data-field="registration_number.formatted_number" data-type="string" caption="No Pendaftaran" />
    <DxColumn data-field="distributor.sap_id" data-type="string" caption="Customer ID" cell-template="customerId"/>
    <template #customerId="{ data }">
      <span v-if="data.data.distributor.sap_id">{{ data.data.distributor.sap_id }}</span>
      <span v-else>NEW</span>
    </template>
    <DxColumn data-field="distributor.name" data-type="string" caption="Nama Distributor" />
    <DxColumn data-field="distributor.classification" data-type="string" caption="Klasifikasi Distributor" />
    <DxColumn data-field="registration_number.created_at" data-type="string" caption="Tanggal Pendaftaran" />
    
    <DxColumn :width="100" data-field="id" caption="Action" cell-template="cellTemplate" />
    <template #cellTemplate="{ data }">
      <router-link tag="button" class="btn btn-sm rounded-lg px-4" :to="linkToProcessDocument(data)">
        Proses
      </router-link>
    </template>

    <DxPaging :page-size="20" />
    <DxPager :show-page-size-selector="true" :allowed-page-sizes="[5, 10, 20, 50]" />
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
import { useStore } from "@/store";

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
  props: ["registrationPeriod"],
  setup(props, { emit }) {
    const store = useStore();
    const root = ref(null);
    const router = onMounted(() => {
    });

    function isNotEmpty(value) {
      return value !== undefined && value !== null && value !== "";
    }

    const env = inject("env");

    const customStore = new CustomStore({
      key: "distributor_id",
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

        params += `&registration_period=${props.registrationPeriod.id}`;
        return httpClient.get(
            `${env["VUE_APP_API_ENDPOINT"]}/bundles-revision/by-admin-region${params}`
          ).then((response) => response.data)
          .catch(() => {
            throw "Data Loading Error";
          });
      },
    });

    const onSelectionChanged = ({ selectedRowsData }) => {
      // updateFormData(selectedRowsData[0]);
    };

    const activate = async (id) => {
      await companyManagementAPI
        .activate(id)
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
      await companyManagementAPI
        .deactivate(id)
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

    const user = store.state.auth.user;

    const linkToProcessDocument = (data) => {
      if (['svp_region', 'svp_pso_planning_management', 'sevp_marketing_ops', 'marketing_director'].includes(user.role.name)) {
        return {
          name: "admin-document-verification.distributor-profile.document-verification",
          params: {
            distributor_id: data.data.distributor_id,
          },
          query: {
            registration_period: props.registrationPeriod.id,
          },
        };
      }

      return {
        name: "admin-document-verification.distributor-profile.document-verification",
        params: {
          distributor_id: data.data.distributor_id,
        },
        query: {
          registration_period: props.registrationPeriod.id,
        },
      };
    };

    return {
      customStore,
      onSelectionChanged,
      activate,
      deactivate,
      onToolbarPreparing,
      refreshDataGrid,
      clearSelection,
      root,
      linkToProcessDocument,
      user
    };
  },
});
</script>

<style>
</style>
