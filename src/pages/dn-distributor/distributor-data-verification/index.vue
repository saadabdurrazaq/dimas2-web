<template>
  <document-form title="Daftar Verifikasi Data">
    <div class="p-5">
      <p>Periode Registrasi:</p>
      <p class="text-xl" v-if="registrationPeriod != null">{{ registrationPeriod.period }}</p>
      <el-tabs>
        <el-tab-pane label="Verifikasi Data" class="pb-10">
          <data-grid v-if="registrationPeriod != null" :registrationPeriod="registrationPeriod"></data-grid>
        </el-tab-pane>
        <el-tab-pane label="Dokumen Telah Direvisi" class="pb-10">
          <data-grid-revision v-if="registrationPeriod != null" :registrationPeriod="registrationPeriod"></data-grid-revision>
        </el-tab-pane>
      </el-tabs>
    </div>
  </document-form>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DataGrid from "./Datagrid.vue";
import DataGridRevision from "./DatagridRevision.vue";
import registrationPeriodAPI from "@/utils/api/registrationPeriod.api"

export default defineComponent({
  components: { DocumentForm, DataGrid, DataGridRevision },
  setup() {
    const registrationPeriod = ref(null) 

    onMounted(async () => {
      await registrationPeriodAPI.getActive().then(response =>{
        registrationPeriod.value = response.data
      })
    })

    return {
      registrationPeriod
    }
  },
});
</script>

<style>
</style>
