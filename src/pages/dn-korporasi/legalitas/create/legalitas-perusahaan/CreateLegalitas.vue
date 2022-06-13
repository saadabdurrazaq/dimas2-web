<template>
  <document-form title="Legalitas Perusahaan" v-loading="legalitasLoading">
    <div class="pb-5 pt-3">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-6">
          <form-item
            class="col-span-6"
            label="NIB"
            rules-text="Required"
            :validationData="validate.nib"
          >
            <input
              v-model="validate.nib.$model"
              placeholder="NIB"
              class="form-control"
              :class="{
                'border-theme-6': validate.nib.$error,
              }"
            />
          </form-item>
        </div>
        <div class="col-span-6">
          <form-item
            class="col-span-6"
            label="Bukti Fisik NIB"
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
        <div class="col-span-12">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="flexCheckChecked"
          >
            Tidak memiliki NIB
          </label>
        </div>
      </div>
    </div>

    <!-- form SIUP (Surat Izin Usaha Perdagangan) -->
    <div class="col-span-12 xl:col-span-9">
      <div
        class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
      >
        <div class="pl-4 pr-4">
          <div class="py-3 border-b border-gray-300">
            <span>SIUP (Surat Izin Usaha Perdagangan)</span>
          </div>
          <div class="pb-5 pt-3">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-6">
                <form-item
                  class="col-span-6"
                  label="Nomor SIUP"
                  rules-text="Required"
                  :validationData="validate.nomor_siup"
                >
                  <input
                    v-model="validate.nomor_siup.$model"
                    placeholder="Nomor SIUP"
                    class="form-control"
                    :class="{
                      'border-theme-6': validate.nomor_siup.$error,
                    }"
                  />
                </form-item>
              </div>
              <div class="col-span-6">
                <form-item
                  class="col-span-4"
                  label="Start Date"
                  rules-text="Required"
                  :validationData="validate.start"
                >
                  <el-date-picker
                    v-model="validate.start.$model"
                    type="date"
                    placeholder="Start Date"
                    style="width: 100%"
                    class="form-control w-full"
                    :class="{
                      'border-theme-6': validate.start.$error,
                    }"
                  ></el-date-picker>
                </form-item>
              </div>
              <div class="col-span-12">
                <form-item
                  class="col-span-6"
                  label="Bukti Fisik NIB"
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
    <!-- end form SIUP (Surat Izin Usaha Perdagangan) -->
    <br />
    <!-- form TDP -->
    <div class="col-span-12 xl:col-span-9">
      <div
        class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
      >
        <div class="pl-4 pr-4">
          <div class="py-3 border-b border-gray-300">
            <span>TDP (Tanda Daftar Perusahaan)</span>
          </div>
          <div class="pb-5 pt-3">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-6">
                <form-item
                  class="col-span-6"
                  label="Nomor TDP"
                  rules-text="Required"
                  :validationData="validate.nomor_tdp"
                >
                  <input
                    v-model="validate.nomor_tdp.$model"
                    placeholder="Nomor TDP"
                    class="form-control"
                    :class="{
                      'border-theme-6': validate.nomor_tdp.$error,
                    }"
                  />
                </form-item>
              </div>
              <div class="col-span-6">
                <form-item
                  class="col-span-4"
                  label="Start Date"
                  rules-text="Required"
                  :validationData="validate.start"
                >
                  <el-date-picker
                    v-model="validate.start.$model"
                    type="date"
                    placeholder="Start Date"
                    style="width: 100%"
                    class="form-control w-full"
                    :class="{
                      'border-theme-6': validate.start.$error,
                    }"
                  ></el-date-picker>
                </form-item>
              </div>
              <div class="col-span-12">
                <form-item
                  class="col-span-6"
                  label="Bukti Fisik TDP"
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
    <!-- end form TDP -->
    <br />
    <!-- form SKDU -->
    <div class="col-span-12 xl:col-span-9">
      <div
        class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
      >
        <div class="pl-4 pr-4">
          <div class="py-3 border-b border-gray-300">
            <span>SKDU (Surat Keterangan Domisili Usaha)</span>
          </div>
          <div class="pb-5 pt-3">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-6">
                <form-item
                  class="col-span-6"
                  label="Nomor SKDU"
                  rules-text="Required"
                  :validationData="validate.nomor_skdu"
                >
                  <input
                    v-model="validate.nomor_skdu.$model"
                    placeholder="Nomor SKDU"
                    class="form-control"
                    :class="{
                      'border-theme-6': validate.nomor_skdu.$error,
                    }"
                  />
                </form-item>
              </div>
              <div class="col-span-6">
                <form-item
                  class="col-span-4"
                  label="Start Date"
                  rules-text="Required"
                  :validationData="validate.start"
                >
                  <el-date-picker
                    v-model="validate.start.$model"
                    type="date"
                    placeholder="Start Date"
                    style="width: 100%"
                    class="form-control w-full"
                    :class="{
                      'border-theme-6': validate.start.$error,
                    }"
                  ></el-date-picker>
                </form-item>
              </div>
              <div class="col-span-12">
                <form-item
                  class="col-span-6"
                  label="Bukti Fisik SKDU"
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
    <!-- end form SKDU -->
    <br />
    <!-- form SKDP -->
    <div class="col-span-12 xl:col-span-9">
      <div
        class="block rounded-lg shadow-lg bg-white border-r border-b border-l border-gray-400 border-t"
      >
        <div class="pl-4 pr-4">
          <div class="py-3 border-b border-gray-300">
            <span>SKDP (Surat Keterangan Domisili Perusahaan)</span>
          </div>
          <div class="pb-5 pt-3">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-6">
                <form-item
                  class="col-span-6"
                  label="Nomor SKDP"
                  rules-text="Required"
                  :validationData="validate.nomor_skdp"
                >
                  <input
                    v-model="validate.nomor_skdp.$model"
                    placeholder="Nomor SKDP"
                    class="form-control"
                    :class="{
                      'border-theme-6': validate.nomor_skdp.$error,
                    }"
                  />
                </form-item>
              </div>
              <div class="col-span-6">
                <form-item
                  class="col-span-4"
                  label="Start Date"
                  rules-text="Required"
                  :validationData="validate.start"
                >
                  <el-date-picker
                    v-model="validate.start.$model"
                    type="date"
                    placeholder="Start Date"
                    style="width: 100%"
                    class="form-control w-full"
                    :class="{
                      'border-theme-6': validate.start.$error,
                    }"
                  ></el-date-picker>
                </form-item>
              </div>
              <div class="col-span-12">
                <form-item
                  class="col-span-6"
                  label="Bukti Fisik SKDP"
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
    <!-- end form SKDP -->

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
      nib: { required },
      nomor_tdp: { required },
      start: { required },
      file_path: { required },
      nomor_siup: { required },
      skdu: { required },
      nomor_skdu: { required },
      nomor_skdp: { required },
      nomor_surat: { required },
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
