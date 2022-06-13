<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav />
    <div class="col-span-12 xl:col-span-8">
      <!-- BEGIN: Payment Type --> 
      <document-form
        title="Payment Type"
        id="updateProfile"
        v-loading="profileLoading"
      >
        <div class="pt-5 pb-5">
          <div class="grid grid-cols-12">
            <div class="col-span-12">
              <form-item
                label="Jumlah Karyawan"
                rules-text="Required"
                :validationData="validate.jumlah_karyawan"
              >
                <el-select
                  class="form-control"
                  v-model="value"
                  multiple
                  filterable
                  remote
                  reserve-keyword
                  placeholder="Please enter a keyword"
                  :remote-method="remoteMethod"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </form-item>
            </div>
          </div>
        </div>
      </document-form>
      <!-- END: Payment Type -->
      <br />
      <!-- BEGIN: Financial Statement -->
      <document-form
        title="Financial Statement"
        id="updateProfile"
        v-loading="profileLoading"
      >
        <div class="pt-5 pb-5">
          <div class="grid grid-cols-12">
            <div class="col-span-12">
              <form-item
                class="intro-y"
                label="Upload Pass Book" 
                rules-text="Required"
                :validationData="validate.pass_book"
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

        <div class="pb-5">
          <div class="grid grid-cols-1 gap-5">
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
      </document-form>
      <!-- END: Financial Statement -->
    </div>

    <!-- Rekening bank -->
    <RekeningBank />
    <!-- End Rekening bank -->
  </div>
</template>

<script>
import { inject } from "vue-demi";
import { defineComponent } from "vue-demi";
import { reactive, toRefs, onMounted, ref } from "vue";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DNNav from "../../../DNNav.vue";
import RekeningBank from "../rekening-bank/CreateRekeningBank.vue";
import formDataDefaults from "./formData.default";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import useMessageBox from "@/composables/useMessageBox";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default defineComponent({
  components: {
    DocumentForm,
    DNNav,
    RekeningBank,
  },
  data() {
    return {
      formData: reactive({ ...formDataDefaults }),
      rules: {
        jumlah_karyawan: { required },
        pass_book: { required },
      },
      store: useStore(),
      route: useRoute(),
      messageBox: useMessageBox(),
      validate: useVuelidate(this.rules, toRefs(this.formData)),
      env: inject("env"),
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },

    handlePreview(file) {
      var win = window.open(
        env["VUE_APP_API_ENDPOINT"] + "/files?filePath=" + file.url,
        "_blank"
      );
      win.focus();
    },

  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
});
</script>

<style></style>
