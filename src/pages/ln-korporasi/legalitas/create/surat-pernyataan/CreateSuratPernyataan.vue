<template>
  <document-form title="Letter of Intent" v-loading="legalitasLoading">
    <div class="pb-5 pt-3">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-6">
          <form-item
            class="col-span-6"
            label="Letter Number"  
            rules-text="Required"
            :validationData="validate.letter_number"
          >
            <input
              v-model="validate.letter_number.$model"
              placeholder="Letter Number"
              class="form-control"
              :class="{
                'border-theme-6': validate.letter_number.$error,
              }"
            />
          </form-item>
        </div>
        <div class="col-span-6">
          <form-item
            class="col-span-4"
            label="Letter of Intent Date" 
            rules-text="Required"
            :validationData="validate.tanggal_surat_pernyataan"
          >
            <el-date-picker
              v-model="validate.tanggal_surat_pernyataan.$model" 
              type="date"
              placeholder="Letter of Intent Date"
              style="width: 100%"
              class="form-control w-full"
              :class="{
                'border-theme-6': validate.tanggal_surat_pernyataan.$error,
              }"
            ></el-date-picker>
          </form-item>
        </div>
        <div class="col-span-12">
          <form-item
            class="col-span-6"
            label="Upload Letter"
            rules-text="Required"
            :validationData="validate.file_path"
          >
            <el-upload
              ref="elUpload"
              class="upload-demo form-control"
              :action="env['VUE_APP_API_ENDPOINT'] + '/files'"
              :headers="{
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
              }"
              :with-credentials="true"
              :on-success="onUploadSuccees"
              :file-list="
                formData.file_path != null
                  ? [
                      {
                        name: 'file-template',
                        url: formData.file_path,
                      },
                    ]
                  : []
              "
              :on-preview="handlePreview"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
              <template #tip>
                <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
              </template>
            </el-upload>
          </form-item>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="w-full text-right">
        <button type="button" class="btn btn-primary w-24" @click="submit">
          Save
        </button>
      </div>
    </div>
  </document-form>
</template>

<script>
import {
  defineComponent,
  provide,
  reactive,
  ref,
  toRefs,
  inject,
} from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import useFormData from "@/composables/useFormData";
import formDataDefault from "./formData.default";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import FormItem from "@/components/form/FormItem";
import registrationPeriod from "@/utils/api/registrationPeriod.api";
import { ElNotification } from "element-plus";

export default defineComponent({
  components: { DocumentForm, FormItem },
  setup() {
    const originalData = ref({ ...formDataDefault });

    const rules = {
      letter_number: { required },
      tanggal_surat_pernyataan: { required },
      file_path: { required },
    };

    const { formData, validate, resetFormData } = useFormData(
      formDataDefault,
      rules
    );

    const env = inject("env");

    const submit = async () => {
      validate.value.$validate();

      if (!validate.value.$error) {
        const { ...data } = formData;

        await registrationPeriod
          .create({
            ...data,
          })
          .then((response) => {
            ElNotification.success({
              title: "Success",
              position: "bottom-right",
              message: "Data submitted",
            });

            resetFormData();
          })
          .catch((error) => {
            ElNotification.error({
              title: "Failed",
              position: "bottom-right",
              message: error.data.message,
            });
          });
      }
    };

    const onUploadSuccees = (response, file, fileList) => {
      formData.file_path = response.id;
    };

    const handlePreview = (file) => {
      var win = window.open(
        env["VUE_APP_API_ENDPOINT"] + "/files?filePath=" + file.url,
        "_blank"
      );
      win.focus();
    };

    return {
      formData,
      validate,
      originalData,
      submit,
      onUploadSuccees,
      handlePreview,
      env,
    };
  },
});
</script>

<style></style>
