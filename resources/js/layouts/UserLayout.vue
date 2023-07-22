<template>
  <div id="main-body" class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <UserSidebar :class="fullScreenSideBarOpen ? '' : 'lg:hidden'" />
      <div
        id="main-content"
        class="min-h-screen w-full bg-white pl-0 dark:bg-slate-800"
        :class="
          (sideBarOpen ? 'overlay ' : ' ') +
          (fullScreenSideBarOpen ? 'lg:pl-64' : '')
        "
      >
        <UserNavBar />
        <div class="mb-20 bg-white dark:bg-slate-800">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserNavBar from '@components/user/UserNavBar.vue';
import UserSidebar from '@components/user/UserSidebar.vue';

export default {
  name: 'UserLayout',
  components: {
    UserNavBar,
    UserSidebar,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState('sidebar', {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen,
    }),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {},
};
</script>

<style scoped></style>
<style lang="scss" scoped></style>
