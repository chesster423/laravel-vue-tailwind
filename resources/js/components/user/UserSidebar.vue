<template>
  <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div
    id="main-nav"
    class="fixed z-30 h-screen w-1/2 border-r bg-white dark:bg-slate-800 md:left-0 md:top-0 md:w-1/3 lg:block lg:w-64"
    :class="sideBarOpen ? '' : 'hidden'"
  >
    <div class="flex h-20 w-full items-center p-60">
      <div class="flex hidden justify-center lg:block lg:w-0 lg:flex-1">
        <router-link :to="{ name: 'home' }">
          <img :src="companyLogo" class="mx-auto" :alt="logoImageAlt" />
          <p class="sr-only text-3xl font-semibold text-blue-400">
            {{ appName }}
          </p>
        </router-link>
      </div>
    </div>

    <div class="mb-20 hidden text-center lg:block">
      <p class="text-base font-bold">{{ user.name }}</p>
      <p class="text-sm text-slate-400">{{ user.email }}</p>
    </div>

    <div class="mb-4 px-4 text-black">
      <!-- <p class="mb-1 pl-4 text-sm font-semibold dark:text-gray-100">MAIN</p> -->
      <router-link
        v-if="authenticated && roles && roles.user"
        v-slot="{ isActive }"
        :to="{ name: 'history' }"
        @click="toggleSidebar"
      >
        <div
          class="flex h-10 w-full items-center rounded-lg pl-4 text-blue-400"
          :class="
            isActive
              ? 'cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900'
              : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span class="ml-3 text-sm font-bold text-black">Dashboard</span>
        </div>
      </router-link>

      <router-link
        v-if="authenticated && roles && roles.user"
        v-slot="{ isActive }"
        :to="{ name: 'saved-cars' }"
        @click="toggleSidebar"
      >
        <div
          class="flex h-10 w-full items-center rounded-lg pl-4 text-blue-400"
          :class="
            isActive
              ? 'cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900'
              : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          <span class="ml-3 text-sm font-bold text-black">Saved Cars</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from 'vuex';
import {
  UsersIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  CogIcon,
  ServerStackIcon,
  BookOpenIcon,
  CubeIcon,
  TruckIcon,
} from '@heroicons/vue/24/outline';

export default {
  name: 'AdminSidebar',
  components: {
    UsersIcon,
    BuildingLibraryIcon,
    ShieldCheckIcon,
    ShieldExclamationIcon,
    ServerStackIcon,
    CogIcon,
    BookOpenIcon,
    CubeIcon,
    TruckIcon,
  },
  props: {
    appName: { type: String, default: 'Carsona' },
  },
  setup() {
    return {};
  },
  data() {
    return {
      companyLogo: window.location.origin + '/images/logo-2.png',
      logoImageAlt: 'Company Logo',
      //
    };
  },
  computed: {
    ...mapState('sidebar', {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen,
    }),
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
    currentRouteName() {
      return this.$route.name;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      toggleSidebar: 'sidebar/toggleSidebar',
      toggleFullScreenSidebar: 'sidebar/toggleFullScreenSidebar',
      popToast: 'toast/popToast',
    }),
  },
};
</script>

<style scoped></style>
<style lang="scss" scoped></style>
