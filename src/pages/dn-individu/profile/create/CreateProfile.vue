<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav />
    <!-- BEGIN: Transactions -->
    <div class="col-span-12 xl:col-span-8">
      <document-form
        title="Profile"
        id="updateProfile"
        v-loading="profileLoading"
      >
        <div class="pt-5 pb-5">
          <div class="grid grid-cols-12">
            <div class="col-span-12">
              <form-item
                label="Nama Usaha"
                rules-text="Required"
                :validationData="validate.nama_usaha"
              >
                <input
                  v-model="validate.nama_usaha.$model"
                  placeholder="Nama Usaha"
                  class="form-control"
                  :class="{
                    'border-theme-6': validate.nama_usaha.$error,
                  }"
                />
              </form-item>
            </div>
          </div>
        </div>

        <!-- form biodata Pemilik Usaha -->
        <div class="col-span-12 xl:col-span-9">
          <div
            class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
          >
            <div class="pl-4 pr-4">
              <div class="py-3 border-b border-gray-300">
                <span>Biodata Pemilik Usaha</span>
              </div>
              <div class="pb-5 pt-3">
                <div class="grid grid-cols-12 gap-5">
                  <div class="col-span-12">
                    <form-item
                      class="col-span-6"
                      label="Nama Pemilik Usaha"
                      rules-text="Required"
                      :validationData="validate.nama_pemilik_usaha"
                    >
                      <input
                        v-model="validate.nama_pemilik_usaha.$model"
                        placeholder="Nama Pemilik Usaha"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nama_pemilik_usaha.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="NIK"
                      rules-text="Required"
                      :validationData="validate.document_name"
                    >
                      <input
                        v-model="validate.document_name.$model"
                        placeholder="NIK"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.document_name.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Bukti Fisik KTP"
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
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="NPWP"
                      rules-text="Required"
                      :validationData="validate.npwp"
                    >
                      <input
                        v-model="validate.npwp.$model"
                        placeholder="NIK"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.npwp.$error,
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
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Email"
                      rules-text="Required"
                      :validationData="validate.email"
                    >
                      <input
                        v-model="validate.email.$model"
                        placeholder="Email"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.email.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Nomor Handphone"
                      rules-text="Required" 
                      :validationData="validate.nomor_handphone"
                    >
                      <input
                        v-model="validate.nomor_handphone.$model"
                        placeholder="Nomor Handphone"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nomor_handphone.$error,
                        }"
                      />
                    </form-item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end form biodata Pemilik Usaha -->
        
        <br>

        <!-- form biodata pasangan -->
        <div class="col-span-12 xl:col-span-9">
          <div
            class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
          >
            <div class="pl-4 pr-4">
              <div class="py-3 border-b border-gray-300">
                <span>Biodata Pasangan</span>
              </div>
              <div class="pb-5 pt-3">
                <div class="grid grid-cols-12 gap-5">
                  <div class="col-span-12">
                    <form-item
                      class="col-span-6"
                      label="Nama Pasangan"
                      rules-text="Required"
                      :validationData="validate.nama_pasangan"
                    >
                      <input
                        v-model="validate.nama_pasangan.$model"
                        placeholder="Nama Pasangan"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nama_pasangan.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="NIK"
                      rules-text="Required"
                      :validationData="validate.nik_pasangan" 
                    >
                      <input
                        v-model="validate.nik_pasangan.$model"
                        placeholder="NIK"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nik_pasangan.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Bukti Fisik KTP"
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
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="NPWP"
                      rules-text="Required"
                      :validationData="validate.npwp"
                    >
                      <input
                        v-model="validate.npwp.$model"
                        placeholder="NIK"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.npwp.$error,
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
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Nomor KK"
                      rules-text="Required"
                      :validationData="validate.nomor_kk" 
                    >
                      <input
                        v-model="validate.nomor_kk.$model"
                        placeholder="Nomor KK"
                        class="form-control"
                        :class="{
                          'border-theme-6': validate.nomor_kk.$error,
                        }"
                      />
                    </form-item>
                  </div>
                  <div class="col-span-6">
                    <form-item
                      class="col-span-6"
                      label="Bukti Fisik KK"
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
              </div>
            </div>
          </div>
        </div>
        <!-- end form biodata pasangan -->

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
      </document-form>
    </div>
    <!-- END: Transactions -->
  </div>
</template>

<script>
import {
  defineComponent,
  inject,
  provide,
  reactive,
  ref,
  toRefs,
} from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import useFormData from "@/composables/useFormData";
import formDataDefault from "./formData.default"; 
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import DNNav from "../../DNNav.vue";
import FormItem from "@/components/form/FormItem";
import statementLetterTemplateAPI from "@/utils/api/statementLetterTemplate.api";
import { ElNotification } from "element-plus";

export default defineComponent({
  components: {
    DocumentForm,
    FormItem,
    DNNav,
  },
  setup() {
    const originalData = ref({ ...formDataDefault });

    const rules = {
      document_name: { required },
      nama_pemilik_usaha: { required },
      nama_usaha: { required },
      npwp: { required },
      email: { required }, 
      nomor_handphone: { required },
      nama_pasangan: { required },
      nik_pasangan: { required },
      nomor_kk: { required },
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
        await statementLetterTemplateAPI
          .add({
            ...formData,
          })
          .then((response) => {
            formData.file_path = response.data.file_path;

            ElNotification.success({
              title: "Success",
              position: "bottom-right",
              message: "Data submitted",
            });
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
