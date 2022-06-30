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
                :to="{ name: 'dn-cabang.profile' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.profile'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.profile'
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
                      ({ name }) => name === 'dn-cabang.profile'
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
                :to="{ name: 'dn-cabang.legalitas' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.legalitas'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.legalitas'
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
                      ({ name }) => name === 'dn-cabang.legalitas'
                    )
                  "
                  >Legalitas</span
                >
                <span v-else>Legalitas</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'dn-cabang.pasar' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.pasar'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.pasar'
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
                  <path d="M2 2v20h20"></path>
                  <path d="M17 18V9"></path>
                  <path d="M12 18V4"></path>
                  <path d="M7 18v-4"></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'dn-cabang.pasar'
                    )
                  "
                  >Pasar</span
                >
                <span v-else>Pasar</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'dn-cabang.operasional' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.operasional'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.operasional'
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
                      ({ name }) => name === 'dn-cabang.operasional'
                    )
                  "
                  >Operasional</span
                >
                <span v-else>Operasional</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'dn-cabang.keuangan' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.keuangan'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.keuangan'
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
                      ({ name }) => name === 'dn-cabang.keuangan'
                    )
                  "
                  >Keuangan</span
                >
                <span v-else>Keuangan</span>
              </router-link>
            </div>
          </div>
          <div class="accordion-item">
            <div id="faq-accordion-content-5" class="accordion-header">
              <router-link
                :to="{ name: 'dn-cabang.informasi-cabang' }"
                :class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.informasi-cabang'
                  )
                    ? 'box px-3 py-3 flex items-center'
                    : 'flex accordion-button'
                "
                :exact-active-class="
                  $route.matched.some(
                    ({ name }) => name === 'dn-cabang.informasi-cabang'
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin-right: 5px"
                >
                  <path
                    d="M6 22V4c0-.27 0-.55.07-.82.07-.27.2-.52.4-.72.19-.2.44-.32.7-.39C7.46 2 8.73 2 9 2h7c.27 0 .55 0 .82.07.27.07.52.2.72.4.2.19.32.44.39.7.07.28.07.56.07.83v18H6Z"
                  ></path>
                  <path
                    d="M2 14v6c0 1.1.9 2 2 2h2V12H4c-.27 0-.55 0-.82.07-.27.07-.52.2-.72.4-.19.19-.32.44-.39.71A3.4 3.4 0 0 0 2 14Z"
                  ></path>
                  <path
                    d="M20.82 9.07A3.4 3.4 0 0 0 20 9h-2v13h2a2 2 0 0 0 2-2v-9c0-.28 0-.55-.07-.82-.07-.27-.2-.52-.4-.72-.19-.19-.44-.32-.71-.39Z"
                  ></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
                <span
                  v-if="
                    $route.matched.some(
                      ({ name }) => name === 'dn-cabang.informasi-cabang'
                    )
                  "
                  >Informasi Cabang</span
                >
                <span v-else>Informasi Cabang</span>
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
                  >Status Verifikasi Dokumen</span
                >
                <span v-else>Status Verifikasi Dokumen</span>
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
