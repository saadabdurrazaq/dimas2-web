<template>
  <div class="col-span-12 xl:col-span-9">
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="py-3 px-6 border-b border-gray-300 text-center">
        <span style="font-weight: bold">Kuisioner</span>
      </div>
      <div class="p-5">
        <ol start="1">
          <li>
            Apakah usaha Anda merupakan badan hukum resmi dan memiliki legalitas
            pemerintah? <br />
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input type="radio" id="one" value="Ya" v-model="isAnswPartI" />
                <label for="one"> Ya</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Tidak"
                  v-model="isAnswPartI"
                />
                <label for="two"> Tidak</label>
              </div>
            </div>
          </li>

          <!-- questions part II -->
          <li v-if="showQuestionsPartII">
            Anda termasuk pada kelompok? <br />
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Retail"
                  v-model="isAnswPartII"
                />
                <label for="one"> Retail</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Cabang"
                  v-model="isAnswPartII"
                />
                <label for="one"> Cabang</label>
              </div>
              <div class="w-64" v-show="selectOptionCabang">
                <form-item
                  label="Propinsi"
                  rules-text="Required"
                  class="intro-y"
                >
                  <el-select
                    @change="(e) => showButtonLanjutkan()"
                    v-model="form.induk_perusahaan"
                    class="form-control"
                    placeholder="Pilih Induk Perusahaan"
                    filterable
                  >
                    <el-option
                      v-for="item in indukPerusahaan"
                      :key="item.province_id"
                      :label="item.province_name"
                      :value="item"
                    ></el-option>
                  </el-select>
                </form-item>
              </div>
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="two"
                  value="Korporasi"
                  v-model="isAnswPartII"
                />
                <label for="two"> Korporasi</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Retail dan Korporasi"
                  v-model="isAnswPartII"
                />
                <label for="two"> Retail dan Korporasi</label>
              </div>
            </div>
          </li>
          <!-- end questions part II -->

          <!-- questions part IIIB -->
          <li v-if="showQuestionsPartIIIB">
            Transaksi Anda digolongkan dalam tipe penjualan?
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Dalam Negeri (DN)"
                  v-model="isAnswPartIIIB"
                />
                <label for="one"> Dalam Negeri (DN)</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Luar Negeri (LN)"
                  v-model="isAnswPartIIIB"
                />
                <label for="one"> Luar Negeri (LN)</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Agen dari Perusahaan LN"
                  v-model="isAnswPartIIIB"
                />
                <label for="two"> Agen dari Perusahaan LN</label>
              </div>
            </div>
          </li>
          <!-- end questions part IIIB -->

          <!-- questions part IIIA -->
          <li v-if="showQuestionsPartIIIA">
            Termasuk dalam kelompok manakah Anda?
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="AR01"
                  v-model="isAnswPartIIIA1"
                />
                <label for="one">
                  AR01: Kelompok Perusahaan BUMN, Anak dan Cucu Perusahaan BUMN
                  (tidak termasuk Koperasi, Yayasan, dan Anper Yayasan)</label
                >
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="AR02"
                  v-model="isAnswPartIIIA1"
                />
                <label for="two">
                  AR02: Pembeli Pihak Ketiga Diluar Perusahaan BUMN, Anak dan
                  Cucu Perusahaan BUMN</label
                >
              </div>
            </div>
          </li>
          <li v-if="showQuestionsPartIIIA">
            Jenis badan usaha manakah Anda?
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="PT"
                  v-model="isAnswPartIIIA2"
                />
                <label for="one"> PT</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="CV"
                  v-model="isAnswPartIIIA2"
                />
                <label for="two"> CV</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Puskud"
                  v-model="isAnswPartIIIA2"
                />
                <label for="two"> Puskud</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="UD"
                  v-model="isAnswPartIIIA2"
                />
                <label for="two"> UD</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Koperasi"
                  v-model="isAnswPartIIIA2"
                />
                <label for="two"> Koperasi</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Lembaga Pemerintah"
                  v-model="isAnswPartIIIA2"
                />
                <label for="two"> Lembaga Pemerintah</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  :value="
                    form.isAnswPartIIIA2 === ''
                      ? 'Lainnya'
                      : form.isAnswPartIIIA2
                  "
                  v-model="isAnswPartIIIA2"
                  style="margin-right: 3px"
                />
                <input
                  class="inp"
                  type="input"
                  v-model="form.isAnswPartIIIA2"
                  v-on:change="changeValOfAnswPartIIIA2()"
                  placeholder=" Lainnya"
                />
              </div>
            </div>
          </li>
          <!-- end questions part IIIA -->

          <!-- questions part IIIC -->
          <li v-if="showQuestionsPartIIIC">
            Anda merupakan pembeli?
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Trader"
                  v-model="isAnswPartIIIC1"
                />
                <label for="one"> Trader</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="End User"
                  v-model="isAnswPartIIIC1"
                />
                <label for="two"> End User</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Trader and End User"
                  v-model="isAnswPartIIIC1"
                />
                <label for="two"> Trader and End User</label>
              </div>
            </div>
          </li>
          <li v-if="showQuestionsPartIIIC">
            Jika Trader/End User/Trader and End User, termasuk dalam sektor
            manakah Anda?
            <div style="margin-left: 15px">
              <div style="margin-top: 15px; margin-bottom: 10px">
                <input
                  type="radio"
                  id="one"
                  value="Perkebunan"
                  v-model="isAnswPartIIIC2"
                />
                <label for="one"> Perkebunan</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  value="Industri"
                  v-model="isAnswPartIIIC2"
                />
                <label for="two"> Industri</label>
              </div>
              <div style="margin-top: 15px; margin-bottom: 20px">
                <input
                  type="radio"
                  id="two"
                  :value="
                    form.isAnswPartIIIC2 === ''
                      ? 'Lainnya'
                      : form.isAnswPartIIIC2
                  "
                  v-model="isAnswPartIIIC2"
                  style="margin-right: 3px"
                />
                <input
                  type="input"
                  class="inp"
                  v-model="form.isAnswPartIIIC2"
                  v-on:change="changeValOfAnswPartIIIC2()"
                  placeholder=" Lainnya"
                />
              </div>
            </div>
          </li>
          <!-- end questions part IIIC -->
        </ol>
        <div class="px-5 pt-5">
          <div class="w-full text-right">
            <button
              v-if="permitToProceed"
              type="button"
              class="btn btn-primary w-24 mr-2"
              @click.stop.prevent="confirmAllTheAnsw()"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { Form } from "vform";
import axios from "axios";

export default defineComponent({
  components: {
    DocumentForm,
  },
  data() {
    return {
      router: useRouter(),
      isAnswPartI: "",
      isAnswPartII: "",
      isAnswPartIIIA1: "",
      isAnswPartIIIA2: "",
      isAnswPartIIIB: "",
      isAnswPartIIIC1: "",
      isAnswPartIIIC2: "",
      showQuestionsPartII: false,
      showQuestionsPartIIIA: false,
      showQuestionsPartIIIB: false,
      showQuestionsPartIIIC: false,
      form: new Form({
        isAnswPartIIIA2: "",
        isAnswPartIIIC2: "",
        induk_perusahaan: null,
      }),
      indukPerusahaan: [
        "PT Perusahaan 1",
        "PT Perusahaan 2",
        "PT Perusahaan 3",
      ],
      selectOptionCabang: false,
      permitToProceed: false,
      verificationType: "",
    };
  },
  methods: {
    determineUser() {
      let dataAnsw = this.$route.params.dataAnsw;

      if (dataAnsw === "nothing") {
        ElMessageBox.alert(
          "Silahkan isi data kuisioner terlebih dahulu",
          "Title",
          {
            confirmButtonText: "OK",
          }
        );
      }
    },
    changeValOfAnswPartIIIA2() {
      if (this.form.isAnswPartIIIA2 !== "") {
        this.isAnswPartIIIA2 = this.form.isAnswPartIIIA2;
      } else {
        this.isAnswPartIIIA2 = "Lainnya";
      }
    },
    changeValOfAnswPartIIIC2() {
      if (this.form.isAnswPartIIIC2 !== "") {
        this.isAnswPartIIIC2 = this.form.isAnswPartIIIC2;
      } else {
        this.isAnswPartIIIC2 = "Lainnya";
      }
    },
    showButtonLanjutkan() {
      if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Retail" &&
        this.isAnswPartIIIA1 !== "" &&
        this.isAnswPartIIIA2 !== "" &&
        this.isAnswPartIIIA2 !== "Lainnya"
      ) {
        this.permitToProceed = true;
        this.verificationType = "dn-distributor.profile";
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Cabang" &&
        this.form.induk_perusahaan !== null &&
        this.isAnswPartIIIA1 !== "" &&
        this.isAnswPartIIIA2 !== "" &&
        this.isAnswPartIIIA2 !== "Lainnya"
      ) {
        this.permitToProceed = true;
        this.verificationType = "dn-cabang.profile";
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Korporasi" &&
        this.isAnswPartIIIB === "Dalam Negeri (DN)" &&
        this.isAnswPartIIIA1 !== "" &&
        this.isAnswPartIIIA2 !== "" &&
        this.isAnswPartIIIC1 !== "" &&
        this.isAnswPartIIIC2 !== "" &&
        this.isAnswPartIIIA2 !== "Lainnya" &&
        this.isAnswPartIIIC2 !== "Lainnya"
      ) {
        this.permitToProceed = true;
        this.verificationType = "dn-korporasi.profile";
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Korporasi" &&
        this.isAnswPartIIIB === "Luar Negeri (LN)" &&
        this.isAnswPartIIIC1 !== "" &&
        this.isAnswPartIIIC2 !== "" &&
        this.isAnswPartIIIC2 !== "Lainnya"
      ) {
        this.permitToProceed = true;
        this.verificationType = "ln-korporasi.profile";
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Retail dan Korporasi" &&
        this.isAnswPartIIIA1 !== "" &&
        this.isAnswPartIIIA2 !== "" &&
        this.isAnswPartIIIA2 !== "Lainnya" &&
        this.isAnswPartIIIC1 !== "" &&
        this.isAnswPartIIIC2 !== "" &&
        this.isAnswPartIIIC2 !== "Lainnya"
      ) {
        this.permitToProceed = true;
        this.verificationType = "dn-retail-korporasi.profile";
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Korporasi" &&
        this.isAnswPartIIIB === "Agen dari Perusahaan LN"
      ) {
        this.permitToProceed = true;
        this.verificationType = "ln-agen.profile";
      } else if (
        // if user empty the input field "Lainnya"
        (this.isAnswPartI === "Ya" &&
          this.isAnswPartII === "Retail" &&
          this.isAnswPartIIIA2 === "Lainnya") ||
        (this.isAnswPartI === "Ya" &&
          this.isAnswPartII === "Cabang" &&
          this.isAnswPartIIIA2 === "Lainnya") ||
        (this.isAnswPartI === "Ya" &&
          this.isAnswPartII === "Retail dan Korporasi" &&
          (this.isAnswPartIIIA2 === "Lainnya" ||
            this.isAnswPartIIIC2 === "Lainnya")) ||
        (this.isAnswPartI === "Ya" &&
          this.isAnswPartII === "Korporasi" &&
          this.isAnswPartIIIB === "Dalam Negeri (DN)" &&
          (this.isAnswPartIIIA2 === "Lainnya" ||
            this.isAnswPartIIIC2 === "Lainnya")) ||
        (this.isAnswPartI === "Ya" &&
          this.isAnswPartII === "Korporasi" &&
          this.isAnswPartIIIB === "Luar Negeri (LN)" &&
          this.isAnswPartIIIC2 === "Lainnya")
      ) {
        this.permitToProceed = false;
      }
    },
    confirmAllTheAnsw() {
      ElMessageBox.confirm("Apakah pilihan Anda sudah benar?", "Warning", {
        confirmButtonText: "Ya",
        cancelButtonText: "Belum Yakin",
        type: "warning",
      })
        .then(() => {
          let dataUser = this.verificationType;
          localStorage.setItem("user-state", "verifikasi-page");

          return this.router.push({
            name: "verifikasi.verifikasi",
            params: { dataUser },
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Silahkan koreksi lagi pilihan Anda!",
          });
        });
    },
  },
  watch: {
    isAnswPartI: function () {
      if (this.isAnswPartI === "Tidak") {
        this.selectOptionCabang = false;
        this.showQuestionsPartII = false;
        this.showQuestionsPartIIIA = false;
        this.showQuestionsPartIIIB = false;
        this.showQuestionsPartIIIC = false;
        this.permitToProceed = true;
        this.verificationType = "dn-individu.profile";
      } else if (this.isAnswPartI === "Ya") {
        this.selectOptionCabang = false;
        this.permitToProceed = false;
        this.isAnswPartII = "";
        this.isAnswPartIIIA1 = "";
        this.isAnswPartIIIA2 = "";
        (this.isAnswPartIIIB = ""),
          (this.isAnswPartIIIC1 = ""),
          (this.isAnswPartIIIC2 = ""),
          (this.showQuestionsPartII = true);
      }
    },
    isAnswPartII: function () {
      if (this.isAnswPartI === "Ya" && this.isAnswPartII === "Retail") {
        this.selectOptionCabang = false;
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.isAnswPartIIIA1 = "";
        this.isAnswPartIIIA2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = true;
        this.showQuestionsPartIIIB = false;
        this.showQuestionsPartIIIC = false;
      } else if (this.isAnswPartI === "Ya" && this.isAnswPartII === "Cabang") {
        this.selectOptionCabang = true;
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.isAnswPartIIIA1 = "";
        this.isAnswPartIIIA2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = true;
        this.showQuestionsPartIIIB = false;
        this.showQuestionsPartIIIC = false;
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Korporasi"
      ) {
        this.selectOptionCabang = false;
        this.permitToProceed = false;
        this.isAnswPartIIIB = false;
        this.showQuestionsPartIIIA = false;
        this.showQuestionsPartIIIB = true;
        this.showQuestionsPartIIIC = false;
      } else if (
        this.isAnswPartI === "Ya" &&
        this.isAnswPartII === "Retail dan Korporasi"
      ) {
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.selectOptionCabang = false;
        this.isAnswPartIIIA1 = "";
        this.isAnswPartIIIA2 = "";
        this.isAnswPartIIIC1 = "";
        this.isAnswPartIIIC2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = true;
        this.showQuestionsPartIIIB = false;
        this.showQuestionsPartIIIC = true;
      }
    },
    isAnswPartIIIB: function () {
      if (this.isAnswPartIIIB === "Dalam Negeri (DN)") {
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.isAnswPartIIIA1 = "";
        this.isAnswPartIIIA2 = "";
        this.isAnswPartIIIC1 = "";
        this.isAnswPartIIIC2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = true;
        this.showQuestionsPartIIIB = true;
        this.showQuestionsPartIIIC = true;
      } else if (this.isAnswPartIIIB === "Luar Negeri (LN)") {
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.isAnswPartIIIC1 = "";
        this.isAnswPartIIIC2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = false;
        this.showQuestionsPartIIIB = true;
        this.showQuestionsPartIIIC = true;
      } else if (this.isAnswPartIIIB === "Agen dari Perusahaan LN") {
        this.form.isAnswPartIIIA2 = "";
        this.form.isAnswPartIIIC2 = "";
        this.permitToProceed = false;
        this.showQuestionsPartIIIA = false;
        this.showQuestionsPartIIIC = false;
        this.showButtonLanjutkan();
      }
    },
    isAnswPartIIIA1: function () {
      this.showButtonLanjutkan();
    },
    isAnswPartIIIA2: function () {
      this.showButtonLanjutkan();
    },
    isAnswPartIIIC1: function () {
      this.showButtonLanjutkan();
    },
    isAnswPartIIIC2: function () {
      this.showButtonLanjutkan();
    },
  },
  mounted() {},
  created() {
    this.determineUser();
  },
});
</script>

<style>
ol li {
  list-style: decimal;
  list-style-position: inside;
}
.swal2-title {
  position: relative;
  max-width: 100%;
  margin: 0;
  padding: 0.8em 1em 0;
  color: inherit;
  font-size: 1.3em;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
}
body.swal2-shown {
  overflow-y: auto;
}

.inp {
  border: none;
  border-bottom: 1px solid #d6d6d6;
  outline: none;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: text-indent 0.4s 0.4s ease;
  text-indent: -100%;
  opacity: 1;
}
</style>
