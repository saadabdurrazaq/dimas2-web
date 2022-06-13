<template>
  <div>
    <DxDataGrid
    ref="root"
    :data-source="store"
    :show-borders="true"
    :remote-operations="true"
    :selection="{ mode: 'single' }"
    @selection-changed="onSelectionChanged"
    :column-auto-width="true"
    @toolbar-preparing="onToolbarPreparing($event)"
  >
    <DxColumn data-field="full_address" data-type="string" caption="Alamat"       :allow-header-filtering="false"
/>
    <DxColumn data-field="city.city_name" data-type="string" caption="Kota"       :allow-header-filtering="false"
/>
    <DxColumn
      data-field="district.district_name"
      data-type="string"
      caption="Kecamatan"
      :allow-header-filtering="false"
    />
    <DxColumn
      data-field="village.postal_code"
      data-type="string"
      caption="Kode Pos"
      :allow-header-filtering="false"
    />
    <DxColumn
      data-field="region.name"
      data-type="string"
      caption="Region"
      :header-filter="{ dataSource: availableRegions }"
    />
    <DxColumn
      data-field="is_headquarter"
      data-type="boolean"
      caption="Pusat/Cabang"
      cell-template="hqOrBranchTemplate"
      :allow-header-filtering="true"
      :allow-filtering="false"
      :header-filter="{ dataSource: [
        { text: 'Pusat', value: true },
        { text: 'Cabang', value: false },
      ] }"
    />
    <template #hqOrBranchTemplate="{ data }">
      <span v-if="data.data.is_headquarter">Pusat</span>
      <span v-else>Cabang</span>
    </template>

    <DxFilterRow :visible="true" />
    <DxHeaderFilter :visible="true" />

    <DxColumn
      v-if="route.meta.role == 'distributor' && allowManage"
      :allowFiltering="false"
      data-field="is_active"
      caption="Status Aktivasi"
      data-type="boolean"
      cell-template="statusAktivasiCellTemplate"
    />
    <template #statusAktivasiCellTemplate="{ data }">
      <span
        v-if="data.data.is_active"
      >
        Active
      </span>
      <span
        v-else
      >
        Non-Active
      </span>
    </template>

    <DxColumn
      v-if="route.meta.role == 'distributor' && allowManage"
      :allowFiltering="false"
      :width="100"
      data-field="id"
      caption="Aksi"
      cell-template="cellTemplate"
    />
    <template #cellTemplate="{ data }">
      <button
        @click="activate(data.data.id)"
        class="btn btn-sm bg-theme-9 rounded-lg text-white"
        v-if="!data.data.is_active"
      >
        Activate
      </button>
      <button
        @click="deactivate(data.data.id)"
        class="btn btn-sm bg-theme-6 rounded-lg text-white"
        v-else
      >
        Deactivate
      </button>
    </template>
    <DxPaging :page-size="5" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[5, 10, 20]"
    />
  </DxDataGrid>
  </div>
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
import { defineComponent, inject, onMounted, ref, computed } from "vue";
import {
  activateCompanyAddress,
  deactivateCompanyAddress,
} from "@/utils/api/companyProfile.api";
import { ElNotification } from "element-plus";
import { useRoute } from "vue-router";
import { end } from "@popperjs/core";

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

    onMounted(() => {});

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

        let endpoint = `${env["VUE_APP_API_ENDPOINT"]}/company-address${params}`;

        if (route.meta.role == "admin") {
          endpoint = `${env["VUE_APP_API_ENDPOINT"]}/distributor/${route.params.distributor_id}/item-details-data/item-type/2`;
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
      await activateCompanyAddress(id)
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
      await deactivateCompanyAddress(id)
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

    const distributorRegions = inject("distributorRegions");

    const availableRegions = computed(() => distributorRegions.value.map((region) => {
      return {
        text: region.name,
        value: ['region_code', '=', region.code]
      }
    }))

    return {
      store,
      onSelectionChanged,
      activate,
      deactivate,
      onToolbarPreparing,
      refreshDataGrid,
      clearSelection,
      root,
      route,
      availableRegions,
    };
  }
});
</script>

<style>
</style>
