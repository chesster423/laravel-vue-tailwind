<template>
  <div class="lg:-p-0 container mx-auto p-5">
    <div class="mt-5">
      <h1 class="mb-4 text-2xl font-bold">Previous Results</h1>
    </div>

    <div v-if="!fetchingData && rendered">
      <h1 class="funnel-header-1 mb-5 mt-5 text-center">
        We’ve found your match!
      </h1>
      <p class="funnel-label mb-3 text-center">
        Save your faves and compare them later.
      </p>
      <p v-if="funnelDate" class="text-center italic text-slate-600">
        Last recorded: {{ funnelDate }}
      </p>
    </div>

    <p v-if="!fetchingData && !rendered" class="mt-10 text-center">
      <span>No data available</span><br />
      <router-link
        :to="{ name: 'step-1' }"
        class="mt-5 block text-blue-500 hover:text-blue-300"
      >
        Start getting your carsona now!
      </router-link>
    </p>

    <app-recommended-cars
      v-if="rendered"
      :payload="payload"
      class-width="lg:w-7/12"
    ></app-recommended-cars>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { track } from '@services/analytics';
import AppRecommendedCars from '@components/content/AppRecommendedCars.vue';
import { greeting, providerIcon, parseDisplayDate } from '@services/common';
import axios from 'axios';

export default {
  name: 'History',
  components: {
    AppRecommendedCars,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      payload: {},
      rendered: false,
      funnelDate: '',
      fetchingData: true,
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
  mounted() {
    this.getUserHistory();
  },
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    track,
    parseDisplayDate,
    async getUserHistory() {
      this.rendered = false;
      this.fetchingData = true;
      await axios.get('../api/car/user/preference/latest').then((res) => {
        const response = res.data;
        this.fetchingData = false;

        if (response.id) {
          this.rendered = true;
          const payload = {};
          this.funnelDate = this.parseDisplayDate(response.created_at);
          payload.personalities = response.personalities
            ? response.personalities.split(', ')
            : null;
          payload.personal_preferences = response.perks
            ? response.perks.split(', ')
            : null;
          payload.preferredVehicleTypes = response.vehicle_types
            ? response.vehicle_types.split(', ')
            : null;
          payload.activities = response.activities
            ? response.activities.split(', ')
            : null;
          payload.fuel_types = response.fuel_types
            ? response.fuel_types.split(', ')
            : null;
          payload.spendingRange = response.spendingRange
            ? response.spendingRange.split('-')
            : null;
          payload.viewOnly = true;
          this.payload = payload;
        }
      });
    },
  },
};
</script>

<style scoped>
:deep() .text-white {
  color: #ffffff !important;
}
</style>
<style lang="scss" scoped></style>
