<template>
  <!-- BEGIN: Page Title -->
  <div class="col-span-12">
    <div class="intro-y flex items-center mt-3"></div>
  </div>
  <!-- END: Page Title -->

  <!-- BEGIN: Accordion -->
  <div class="col-span-12 xl:col-span-4"> 
    <div class="intro-y col-span-12 lg:col-span-8 xl:col-span-9">
      <div class="intro-y box">
        <div id="faq-accordion-1" class="accordion p-5"> 
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'ln-agen.profile' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.profile'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.profile'
                  )
                    ? 'bg-theme-9 text-white'
                    : ''
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path
                    d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                  ></path>
                  <path
                    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                  ></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'ln-agen.profile'
                    )
                  "
                  >Profile</span
                >
                <span v-else> Profile</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'ln-agen.legalitas' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.legalitas'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.legalitas'
                  )
                    ? 'bg-theme-9 text-white'
                    : ''
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'ln-agen.legalitas'
                    )
                  "
                  >Legality</span
                >
                <span v-else>Legality</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'ln-agen.operasional' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.operasional'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.operasional'
                  )
                    ? 'bg-theme-9 text-white'
                    : ''
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'ln-agen.operasional'
                    )
                  "
                  >Operational</span
                >
                <span v-else>Operational</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'ln-agen.keuangan' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.keuangan'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'ln-agen.keuangan'
                  )
                    ? 'bg-theme-9 text-white'
                    : ''
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'ln-agen.keuangan'
                    )
                  "
                  >Finance</span
                >
                <span v-else>Finance</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'dn-individu.status-verifikasi-dokumen' }"
                :class="
                  $route.matched.some(
                    ({ name }) =>
                      name === 'dn-individu.status-verifikasi-dokumen'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) =>
                      name === 'dn-individu.status-verifikasi-dokumen'
                  )
                    ? 'bg-theme-9 text-white'
                    : ''
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path
                    d="m6 17 2-5h14l-3 8a2 2 0 0 1-2 1H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v4"
                  ></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) =>
                        name === 'dn-individu.status-verifikasi-dokumen'
                    )
                  "
                  >Document Verification Status</span
                >
                <span v-else>Document Verification Status</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Accordion -->
</template>

<script>
import { defineComponent } from "vue-demi";
import DocumentForm from "@/components/panel/DocumentForm.vue";

export default defineComponent({
  components: {
    DocumentForm,
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style></style>
