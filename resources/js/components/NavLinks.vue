<template>
  <div class="carsona-nav-links">
    <router-link
      v-slot="{ isActive }"
      :to="{ name: 'step-1' }"
      class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    >
      <span
        :class="[
          isActive &&
            'cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500',
        ]"
      >
        FIND YOUR CARSONA
      </span>
    </router-link>

    <router-link
      v-slot="{ isActive }"
      :to="{ name: 'about' }"
      class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    >
      <span
        :class="[
          isActive &&
            'cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500',
        ]"
      >
        ABOUT US
      </span>
    </router-link>

    <router-link
      v-slot="{ isActive }"
      :to="{ name: 'contact-us' }"
      class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    >
      <span
        :class="[
          isActive &&
            'cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500',
        ]"
      >
        CONTACT US
      </span>
    </router-link>

    <router-link
      v-slot="{ isActive }"
      :to="{ name: 'faqs' }"
      class="ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    >
      <span
        :class="[
          isActive &&
            'cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500',
        ]"
      >
        FAQS
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { track } from '@services/analytics';

export default {
  name: 'NavLinks',
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      blank: 'Blank',
    };
  },
  computed: {
    ...mapState('sidebar', {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen,
    }),
    ...mapState('auth', {
      user: (state) => state.user,
      roles: (state) => state.roles,
      token: (state) => state.token,
      logins: (state) => state.logins,
    }),
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    track,
  },
};
</script>

<style scoped>
:deep() .text-white {
  color: #ffffff !important;
}
</style>
<style lang="scss" scoped></style>
