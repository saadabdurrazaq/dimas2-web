<template>
<div>
  <router-view />
</div>
  <!-- <div class="bg-white flex items-center" id="loading-page" v-if="!pageLoaded">
    <div class="self-center mx-auto flex flex-col">
      <img class="w-52" src="@/assets/images/logo-pi.png" alt="" />
      <div class="flex flex-col items-center mx-auto mt-5">
       <svg width="25" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="rgba(74, 85, 104, 1" class="w-8 h-8">
          <circle cx="15" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="60" cy="15" r="9" fill-opacity="0.3">
              <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate>
              <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="105" cy="15" r="15">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
          </circle>
      </svg>
      </div>
    </div>
  </div> -->
</template>

<script>
import { computed, defineComponent, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();

    return {
      pageLoaded: computed(() => store.state.main.pageLoaded),
      route
    }
  },
});
</script>

<style scoped>
#loading-page {
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
}

#progressbar {
 padding:15px;
}
</style>

