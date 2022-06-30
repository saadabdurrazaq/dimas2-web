<template>
  <div class="col-span-12 xl:col-span-9">
    <div class="intro-y box">
      <div style="margin: auto; width: 60%; padding: 10px; margin-top: 20px">
        <div style="text-align: center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="#1c3faa"
            stroke="#1c3faa"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="margin: 0 auto; margin-top: 10px; margin-bottom: -5px"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <br />
          <span style="font-weight: bold">Pilih Aplikasi</span>
          <br />
          <span style="color: gray"
            >Pilih satu aplikasi yang ingin dikunjungi.
          </span>
          <div class="grid grid-cols-2 gap-2 mt-5">
            <div class="border-solid border-2 rounded-md">
              <div style="margin: 0; position: relative; top: 35%">
                <img
                  :src="require('@/assets/images/logo-dimas-cropped.png')"
                  @click.stop.prevent="goToDimas1()"
                  class="img-circle elevation-2"
                  alt="User Image"
                  style="
                    width: 60%;
                    margin: auto;
                    display: block;
                    margin-bottom: 10px;
                    cursor: pointer;
                  "
                />
                <span style="font-weight: bold">Subsidi</span>
              </div>
            </div>
            <div class="border-solid border-2 rounded-md">
              <div class="pt-20 pb-20">
                <img
                  :src="require('@/assets/images/logo-dimas2.png')"
                  @click.stop.prevent="goToDimas2()"
                  class="img-circle elevation-2"
                  alt="User Image"
                  style="
                    width: 60%;
                    margin: auto;
                    display: block;
                    margin-bottom: 10px;
                    cursor: pointer;
                  "
                />
                <span style="font-weight: bold">Non Subsidi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    DocumentForm,
    FontAwesomeIcon,
  },
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    goToDimas1() {
      //
    },
    goToDimas2() {
      localStorage.setItem("user-state", "kuisioner-page");

      return this.router.push({
        name: "kuisioner.kuisioner",
      });
    },
  },
  created() {
    //
  },
  mounted() {
    //
  },
});
</script>

<style>
.parallelogram {
  width: 20px;
  height: 60px;
  margin: 0 0 0 20px;
  display: inline-block;
  height: 150px;
  width: 150px;
  border: 1px solid gray;
  margin: auto;
  margin-top: 25px;
}
</style>
