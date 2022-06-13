<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumbx -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <SidebarIcon class="mr-4 cursor-pointer" :class="{'text-theme-1': !sideMenuCollapse}" @click="toggleSidebar"></SidebarIcon>
      <div v-for="(item, i) in breadcrumb" :key="i">
        <a  href="" :class="{'breadcrumb--active': i + 1 == breadcrumb.length}">{{ item }}</a>
        <ChevronRightIcon v-if="i != 0" class="breadcrumb__icon" />
      </div>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <!-- <div class="intro-x relative mr-3 sm:mr-6">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input form-control border-transparent placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href="">
        <SearchIcon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Pages</div>
          <div class="mb-5">
            <a href="" class="flex items-center">
              <div
                class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"
              >
                <InboxIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Mail Settings</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"
              >
                <UsersIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Users & Permissions</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"
              >
                <CreditCardIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Transactions Report</div>
            </a>
          </div>
          <div class="search-result__content__title">Users</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="require(`@/assets/images/${faker.photos[0]}`)"
                />
              </div>
              <div class="ml-3">{{ faker.users[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>
          <div class="search-result__content__title">Products</div>
          <a
            v-for="(faker, fakerKey) in $_.take($f(), 4)"
            :key="fakerKey"
            href
            class="flex items-center mt-2"
          >
            <div class="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.images[0]}`)"
              />
            </div>
            <div class="ml-3">{{ faker.products[0].name }}</div>
            <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              {{ faker.products[0].category }}
            </div>
          </a>
        </div>
      </div>
    </div> -->
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <!-- <div class="intro-x dropdown mr-auto sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
        role="button"
        aria-expanded="false"
      >
        <BellIcon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="notification-content pt-2 dropdown-menu">
        <div
          class="notification-content__box dropdown-menu__content box dark:bg-dark-6"
        >
          <div class="notification-content__title">Notifications</div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 5)"
            :key="fakerKey"
            class="cursor-pointer relative flex items-center"
            :class="{ 'mt-5': fakerKey }"
          >
            <div class="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
              <div
                class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
              ></div>
            </div>
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a href="javascript:;" class="font-medium truncate mr-5">{{
                  faker.users[0].name
                }}</a>
                <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                  {{ faker.times[0] }}
                </div>
              </div>
              <div class="w-full truncate text-gray-600 mt-0.5">
                {{ faker.news[0].shortContent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- END: Notifications -->

    <div class="intro-x dropdown mr-auto sm:mr-6" v-if="userRole == 'distributor' && isRegistered">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
        role="button"
        aria-expanded="false"
      >
        <span v-if="notification.length != 0" class="badge"></span>
        <BellIcon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="notification-content pt-2 dropdown-menu" v-loading="loading">
        <div
          style="padding: 1.25rem;"
          class="notification-content__box dropdown-menu__content box dark:bg-dark-6"
        >
          <div style="font-weight: 500; display: inline-block; width: 100%;" class="notification-content__title">
            Notification Center
            <a @click="updateNotification" style="float: right;" class="ml-auto flex text-right items-center text-theme-1 dark:text-theme-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw w-4 h-4 mr-3"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
            </a>
          </div>
          <div style="height: 0; margin: .8rem 0; overflow: hidden; border-top: 1px solid #e9ecef;"></div>
          <div v-if="notification.length == 0">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="w-full truncate text-gray-600 mt-0.5">
                  <h5 class="font-medium truncate text-center">No new notification</h5>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              v-for="(doc, docKey) in notification"
              :key="docKey"
              class="cursor-pointer relative flex items-center"
              :class="{ 'mt-5': docKey }"
            >
              <div class="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                  style="margin-top: .5rem"
                  class="feather feather-edit-3 block mx-auto">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>

              <div class="overflow-hidden" v-if="doc.notification_type == 'document_expired'">
                <div class="flex items-center">
                  <a :href="doc.path" class="font-medium truncate mr-5">
                    {{ doc.jenis_doc }}
                    <div class="w-full truncate text-gray-600 mt-0.5">
                      {{ doc.jumlah_doc }} dokumen akan/sudah expired.
                    </div>
                  </a>
                </div>
              </div>

              <div class="overflow-hidden" v-else>
                <div class="flex items-center">
                  <router-link :to="mapDistributorRoute()[doc.doc_id]" class="font-medium truncate mr-5">
                    {{ doc.jenis_doc }}
                    <div class="w-full truncate text-gray-600 mt-0.5">
                      Dokumen perlu direvisi
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="bg-theme-26 dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in text-center"
        role="button"
        aria-expanded="false"
      >
       <UserIcon class="w-5 text-white mt-1"/>
      </div>
      <div class="dropdown-menu w-56">
        <div
          class="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-27 dark:border-dark-3">
            <div class="font-medium">{{ user?.name ?? 'Name' }}</div>
            <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
              {{ user?.email ?? 'Email' }}
            </div>
          </div>
          <div class="p-2">
            <router-link tag="button" :to="{ name: 'user-account.update' }" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
              <UserIcon class="w-4 h-4 mr-2" /> Account
            </router-link>
          </div>
          <div class="p-2 border-t border-theme-27 dark:border-dark-3">
            <a
              href="#"
              @click="logout"
            class="flex w-full items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import { defineComponent, ref, computed, onMounted, reactive, } from "vue";
import { useStore } from "@/store"
import { logout } from "../../utils/api/auth.api"
import store from "../../store";
import { mapActions } from "vuex";
import apiService from "@/utils/api/notification.api";

import { mapDistributorRoute } from "@/utils/constants/documentTypeRouteMap"

export default defineComponent({
  props: {
    breadcrumb: {
      default: [
        'Distributor Management - Non PSO'
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['logout'])
  },
  setup() {
    const store = useStore();
    const searchDropdown = ref(false);
    const user = computed(() => store.state.auth.user);
    const userRole = store.state.auth.user.role.name;
    const isRegistered = (store.state.auth.user.distributor == null) ? false : true;

    const loading = ref(true);
    const notification = reactive([]);

    onMounted(() => {
      getNotification();
    });

    const getNotification = () => {
      if (userRole == 'distributor' && isRegistered) {
        apiService.get(store.state.auth.user.distributor.id)
          .then((response) => {
            response.data.forEach(item => { notification.push(item) });
          }).catch((error) => {
            
          }).finally(() => {
            loading.value = false;
          });
      }
    };

    const updateNotification = () => {
      loading.value = true;
      notification.splice(0);
      getNotification();
    };

    const sideMenuCollapse = computed(() => store.state.main.sideMenuCollapse);

    const toggleSidebar = () => {
      store.dispatch("main/toggleSidemenu");
    };

    const showSearchDropdown = () => {
      searchDropdown.value = true;
    };

    const hideSearchDropdown = () => {
      searchDropdown.value = false;
    };

    return {
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      toggleSidebar,
      sideMenuCollapse,
      store,
      user,

      notification,
      loading,
      updateNotification,
      userRole,
      isRegistered,

      mapDistributorRoute,
    };
  }
});
</script>

<style>
  .badge {
    position: absolute;
    right: 0;
    padding: 5px 5px;
    border-radius: 100%;
    background-color: rgba(211, 41, 41);
  }
</style>
