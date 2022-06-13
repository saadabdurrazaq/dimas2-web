<template>
  <document-form title="Assign Role" id="assignRole" class="mt-5">
    <div class="p-5">
      <data-grid ref="dataGrid"></data-grid>
    </div>
    <div class="border-t px-5 pt-5">
      <div class="w-full text-right">
        <button
          type="button"
          class="btn btn-outline-secondary w-24 mr-2"
          @click="resetFormData"
        >
          Reset
        </button>
        <button type="button" class="btn btn-primary w-24 mr-2" @click="save">
          Save
        </button>
      </div>
    </div>
  </document-form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { defineComponent, onMounted, reactive, ref } from "vue-demi";
import formDefault from "./form.default";
import { required } from "@vuelidate/validators";
import regionAPI from "@/utils/api/region.api";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DataGrid from "./Datagrid"

export default defineComponent({
  components: { DocumentForm, DataGrid },
  setup() {
    const regions = ref([]);
    const dataGrid = ref(false);

    const formDataRegion = reactive({ ...formDefault });
    const regionRules = {
      region_ids: { required },
    };

    const validate = useVuelidate(regionRules, formDataRegion);

    onMounted(async () => {
      await regionAPI.index().then((response) => {
        regions.value = response.data.data;
      });
    });

    const save = () => {
      dataGrid.value.save();
    }

    return {
      regions,
      validate,
      dataGrid,
      save
    };
  },
});
</script>

<style>
</style>
