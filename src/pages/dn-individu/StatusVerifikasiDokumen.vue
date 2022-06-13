<template>
  <div class="grid grid-cols-12 gap-6">
    <DNNav/>
    <!-- BEGIN: Transactions -->
    <div class="col-span-12 xl:col-span-8">
      <document-form title="Status Verifikasi Dokumen" id="updateProfile" v-loading="profileLoading">
        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">  
            <form-item class="col-span-12" label="Nama" rules-text="Required">
              <label for="nama">Nama Usaha</label>
              <input placeholder="Nama" class="form-control"/>
            </form-item>

            <form-item class="col-span-6" label="Email" rules-text="Required">
              <input placeholder="Email" class="form-control"/>
            </form-item>
          </div>
        </div>
        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button type="button" class="btn btn-outline-secondary w-24 mr-2" @click="resetFormData">Reset</button>
            <button type="button" class="btn btn-primary w-24 mr-2" @click="saveProfile">Save</button>
          </div>
        </div>

        <div class="p-5">
          <div class="grid grid-cols-12 gap-5">  
            <form-item class="col-span-12" label="Nama" rules-text="Required">
              <label for="nama">Nama Usaha</label>
              <input placeholder="Nama" class="form-control"/>
            </form-item>

            <form-item class="col-span-6" label="Email" rules-text="Required">
              <input placeholder="Email" class="form-control"/>
            </form-item>
          </div>
        </div>
        <div class="border-t px-5 pt-5">
          <div class="w-full text-right">
            <button type="button" class="btn btn-outline-secondary w-24 mr-2" @click="resetFormData">Reset</button>
            <button type="button" class="btn btn-primary w-24 mr-2" @click="saveProfile">Save</button>
          </div>
        </div>
      </document-form>
    </div>
    <!-- END: Transactions -->
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import DNNav from "./DNNav.vue";

export default defineComponent({
  components: {
    DocumentForm,
    DNNav
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style>
</style>
