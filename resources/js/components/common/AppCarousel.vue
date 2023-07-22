<template>
  <div>
    <div id="controls-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-72 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div
          v-for="(val, index) in featuresData"
          :key="index"
          class="duration-700 ease-in-out"
          data-carousel-item
        >
          <div
            class="absolute left-1/2 top-1/2 block w-3/5 -translate-x-1/2 -translate-y-1/2"
          >
            <img :src="val.img" alt="..." class="mx-auto w-4/5" />
            <p class="title text-center font-bold text-white lg:font-normal">
              {{ val.title }}
            </p>
            <br />
            <p
              class="text-center text-sm text-white"
              style="line-height: 1.6; font-size: 11px"
            >
              {{ val.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { track } from '@services/analytics';
import { initFlowbite } from 'flowbite';

export default {
  name: 'Blank',
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
    featuresData() {
      return this.$store.getters.getHomeData.featuresData;
    },
  },
  watch: {},
  created() {},
  mounted() {
    initFlowbite();
  },
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
