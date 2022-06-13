<template>
  <div class="col-span-12 xl:col-span-9">
    <div class="intro-y box">
      <div style="margin: auto; width: 60%; padding: 10px; margin-top: 20px">
        <div style="text-align: center">
          <font-awesome-icon icon="fa-solid fa-trash" />
          <br />
          <span style="font-weight: bold">Pilih Aplikasi</span>
          <br />
          <span style="color: gray"
            >Pilih satu aplikasi yang ingin dikunjungi.
          </span>
          <div class="col-span-12 xl:col-span-9">
            <div class="row">
              <div
                class="parallelogram"
                style="
                  height: 150px;
                  width: 150px;
                  border: 1px solid gray;
                  margin: auto;
                  margin-top: 25px;
                  margin-right: 20px;
                "
              >
                <img
                  :src="require('@/assets/images/logo-dimas.png')"
                  @click.stop.prevent="goToDimas1()"
                  class="img-circle elevation-2"
                  alt="User Image"
                  style="
                    width: 100%;
                    height: 100%;
                    left: 5px;
                    bottom: 5px;
                    border-radius: 50%;
                    margin: auto;
                    cursor: pointer
                  "
                />
              </div>
              <div
                class="parallelogram"
                style="
                  height: 150px;
                  width: 150px;
                  border: 1px solid gray;
                  margin: auto;
                  margin-top: 25px;
                "
              >
                <img
                  :src="require('@/assets/images/logo-dimas.png')"
                  @click.stop.prevent="goToDimas2()"
                  class="img-circle elevation-2"
                  alt="User Image"
                  style="
                    width: 100%;
                    height: 100%;
                    left: 5px;
                    bottom: 5px;
                    border-radius: 50%;
                    margin: auto;
                    cursor: pointer
                  "
                />
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
      return this.router.push({
        name: "kuisioner.kuisioner",
      });
    },
  },
});
</script>

<style>
.parallelogram {
  width: 20px;
  height: 60px;
  margin: 0 0 0 20px;
  display: inline-block;
}
</style>
