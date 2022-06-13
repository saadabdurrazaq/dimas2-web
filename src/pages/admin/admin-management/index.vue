<template>
  <document-form title="User Management">
    <div class="p-5">
      <data-grid></data-grid> 
    </div>
  </document-form>
</template>

<script>
import { defineComponent, provide } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DataGrid from "./Datagrid";
import useFormData from "@/composables/useFormData"
import formDataDefaults from "./formData.default"

export default defineComponent({
  components: { DocumentForm, DataGrid },
  setup() {
        const { updateMode, formData, resetFormData, updateFormData } = useFormData(formDataDefaults);

        provide('updateFormData', updateFormData)

        return {
          formData
        }
  },
});
</script>

<style>
</style>
