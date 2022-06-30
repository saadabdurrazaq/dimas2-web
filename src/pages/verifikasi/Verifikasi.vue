<template>
  <div
    class="col-span-12 xl:col-span-9"
    v-if="verificationType === 'dn-individu.profile'"
  >
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="p-5">
        <p style="text-align: center; font-weight: bold; margin-bottom: 20px">
          Verifikasi Data Individu
        </p>
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-6">
            <label for="nik">NIK</label>
            <input placeholder="NIK" class="form-control" v-model="form.nik" />
          </div>
          <div class="col-span-6">
            <label for="npwp">NPWP</label>
            <input
              placeholder="NPWP"
              class="form-control"
              v-model="form.npwp"
            />
          </div>
        </div>
      </div>
      <div class="px-5 pb-5">
        <div class="w-full text-right">
          <button
            type="submit"
            class="btn btn-primary btn-md"
            id="loadingButton"
            @click.stop.prevent="confirmAllTheAnsw()"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="col-span-12 xl:col-span-9"
    v-if="verificationType !== 'dn-individu.profile'"
  >
    <div class="block rounded-lg shadow-lg bg-white">
      <div class="p-5">
        <p style="text-align: center; font-weight: bold; margin-bottom: 20px">
          Verifikasi Badan Usaha
        </p>
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12">
            <label for="nik">NPWP / TIN (TAX IDENTITY NUMBER)</label>
            <input placeholder="NIK" class="form-control" v-model="form.nik" />
          </div>
        </div>
      </div>
      <div class="px-5 pb-5">
        <div class="w-full text-right">
          <button
            type="submit"
            class="btn btn-primary btn-md"
            id="loadingButton"
            @click.stop.prevent="confirmAllTheAnsw()"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import { Form } from "vform";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
  components: {
    DocumentForm,
  },
  data() {
    return {
      router: useRouter(),
      form: new Form({
        nik: "",
        npwp: "",
      }),
      verificationType: "",
    };
  },
  methods: {
    determineUser() {
      let data = this.$route.params.dataUser;
      this.verificationType = data;

      if (data === undefined) {
        // if user already answered kuisioner or hasn't yet.
        const userState = localStorage.getItem("user-state");
        if (userState === "kuisioner-page") {
          let dataAnsw = "nothing";
          this.$router.push({
            name: "kuisioner.kuisioner",
            params: { dataAnsw },
          });
        } else if (userState === null || userState === undefined) {
          this.$router.push({ name: "option-app.option" });
        } else {
          this.$router.push({
            name: userState,
          });
        }
      }
    },
    confirmAllTheAnsw() {
      ElMessageBox.confirm("Apakah pilihan Anda sudah benar?", "Warning", {
        confirmButtonText: "Ya",
        cancelButtonText: "Belum Yakin",
        type: "warning",
      })
        .then(() => {
          if (this.verificationType === "dn-individu.profile") {
            localStorage.setItem("user-state", "dn-individu.profile");

            return this.router.push({
              name: "dn-individu.profile",
            });
          } else {
            /*
            Ya & Retail: DN Distributor
            Ya & Cabang: DN Cabang
            Ya & Korporasi & Dalam Negeri: DN Korporasi
            Ya & Korporasi & Luar Negeri: LN Korporasi
            Ya & Korporasi & Agen dari Perusahaan LN: Agen LN
            Ya & Retail dan Korporasi: DN Retail Korporasi
            */
            localStorage.setItem("user-state", this.verificationType);

            return this.router.push({
              name: this.verificationType,
            });
          }
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Silahkan koreksi lagi pilihan Anda!",
          });
        });
    },
  },
  mounted() {
    //
  },
  created() {
    this.determineUser();
  },
});
</script>

<style></style>
