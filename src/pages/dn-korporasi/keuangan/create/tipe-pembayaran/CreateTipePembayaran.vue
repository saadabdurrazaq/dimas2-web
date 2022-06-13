<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav />
    <div class="col-span-12 xl:col-span-8">
      <!-- BEGIN: Tipe Pembayaran -->
      <document-form
        title="Tipe Pembayaran"
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
      <!-- END: Tipe Pembayaran -->
      <br>
      <!-- BEGIN: SKBDN -->
      <document-form
        title="SKBDN"
        id="updateProfile" 
        v-loading="profileLoading"
      >
        <div class="pt-5 pb-5">
          <div class="grid grid-cols-12">
            <div class="col-span-12">
              <el-checkbox v-model="bank1" label="Bank 1" size="large" />
              <el-checkbox v-model="bank2" label="Bank 2" size="large" />  
              <el-checkbox v-model="bank3" label="Bank 3" size="large" /> 
              <el-checkbox v-model="bank4" label="Bank 4" size="large" />          
            </div>
          </div>
        </div>
      </document-form>
      <!-- END: SKBDN -->
      <br>
      <!-- Distributor Financing -->
      <DistributorFinancing />
      <!-- End Distributor Financing -->
    </div>
    
    <!-- Rekening bank -->
    <RekeningBank />
    <!-- End Rekening bank -->
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import { reactive, toRefs, onMounted, ref } from "vue";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DNNav from "../../../DNNav.vue";
import DistributorFinancing from "../distributor-financing/CreateDistributorFinancing.vue";
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
    DistributorFinancing,
    RekeningBank,
  },
  data() {
    return {
      formData: reactive({ ...formDataDefaults }),
      rules: {
        jumlah_karyawan: { required },
        bank_1: { required },
      },
      store: useStore(),
      route: useRoute(),
      messageBox: useMessageBox(),
      validate: useVuelidate(this.rules, toRefs(this.formData)),
      options: [],
      value: [],
      list: [],
      loading: false,
      bank1: ref(true),
      bank2: ref(true),
      bank3: ref(true),
      bank4: ref(true),
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
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
});
</script>

<style></style>
