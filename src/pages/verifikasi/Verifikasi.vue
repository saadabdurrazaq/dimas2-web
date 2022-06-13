<template>
  <div class="col-span-12 xl:col-span-9">
    <document-form title="Kuisioner">
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
      <div class="px-5 pt-5">
        <div class="w-full text-right">
          <button
            type="submit"
            class="btn btn-primary btn-md"
            id="loadingButton"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </document-form>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import { Form } from "vform";

export default defineComponent({
  components: {
    DocumentForm,
  },
  data() {
    return {
      form: new Form({
        nik: "",
        npwp: "",
      }),
    };
  },
});
</script>

<style></style>
