<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav />
    <div class="col-span-12 xl:col-span-8">
      <!-- Start: NPWP -->
      <document-form title="NPWP (Nomor Pokok Wajib Pajak)" v-loading="legalitasLoading">
        <div class="pb-5 pt-3">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6">
              <form-item
                class="col-span-6"
                label="Nomor NPWP Pusat"
                rules-text="Required"
                :validationData="validate.nomor_npwp_pusat"
              >
                <input
                  v-model="validate.nomor_npwp_pusat.$model"
                  placeholder="Nomor NPWP Pusat"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.nomor_npwp_pusat.$error,
                  }"
                />
              </form-item>
            </div>
            <div class="col-span-6">
              <form-item
                class="col-span-6"
                label="Bukti Fisik NPWP"
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
                  <el-button size="small" type="primary"
                    >Click to upload</el-button
                  >
                  <template #tip>
                    <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
                  </template>
                </el-upload>
              </form-item>
            </div>
          </div>
          <div class="pt-5">
            <div class="w-full text-right">
              <button
                type="button"
                class="btn btn-primary w-24"
                @click="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-12 xl:col-span-9">
          <div
            class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
          >
            <div class="pl-4 pr-4">
              <div class="pb-5 pt-3">
                <div class="grid grid-cols-12 gap-5">
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Nomor NPWP Cabang" 
                      rules-text="Required"
                      :validationData="validate.nomor_npwp_cabang"
                    >
                      <input
                        v-model="validate.nomor_npwp_cabang.$model"
                        placeholder="Nomor NPWP Cabang"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nomor_npwp_cabang.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Bukti Fisik NPWP Cabang"
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
                        <el-button size="small" type="primary"
                          >Click to upload</el-button
                        >
                        <template #tip>
                          <!-- <div class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
                        </template>
                      </el-upload>
                    </form-item>
                  </div>
                </div>
                <div class="pt-5">
                  <div class="w-full text-right">
                    <button
                      type="button"
                      class="btn w-24 bg-theme-9 text-white"
                      @click="submit"
                    >
                      Add
                    </button>
                  </div>
                </div>
                DataGrid here...
              </div>
            </div>
          </div>
        </div>
        
      </document-form> 
      <!-- End: NPWP -->
      <br>
      <AktaPendirian/>
      <br>
      <LegalitasPerusahaan/>
      <br>
      <SuratPernyataan/>
    </div>
  </div>
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
import DNNav from "../../../DNNav.vue";
import AktaPendirian from "../akta-pendirian/CreateAktaPendirian.vue"; 
import LegalitasPerusahaan from "../legalitas-perusahaan/CreateLegalitas.vue"; 
import SuratPernyataan from "../surat-pernyataan/CreateSuratPernyataan.vue"; 

export default defineComponent({
  components: { DocumentForm, FormItem, DNNav, AktaPendirian, LegalitasPerusahaan, SuratPernyataan},
  setup() {
    const originalData = ref({ ...formDataDefault });

    const rules = {
      nomor_npwp_pusat: { required },
      nomor_npwp_cabang: { required },
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
