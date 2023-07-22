<template>
  <div class="pb-5 lg:pb-10">
    <div class="grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12">
      <div class="grid-rows-12 grid hidden grid-flow-row">
        <img :src="companyLogo" class="mx-auto" :alt="logoImageAlt" />
      </div>

      <h1 class="funnel-header-1 mt-5 text-center">We’ve found your match!</h1>
      <p class="funnel-label text-center">
        Save your faves and compare them later.
      </p>

      <a
        class="mx-auto flex cursor-pointer items-center"
        @click="resetFunnelData"
      >
        <img :src="refreshImage" :width="15" class="mr-2" />
        Restart
      </a>
    </div>

    <app-recommended-cars :payload="payload"></app-recommended-cars>
  </div>
</template>

<script>
import AppRecommendedCars from '@components/content/AppRecommendedCars.vue';
import { mapGetters, mapActions } from 'vuex';
import router from '@/router';

export default {
  name: 'Funnel8',
  components: {
    AppRecommendedCars,
  },
  props: {},
  data() {
    return {
      isMounted: false,
      refreshImage: window.location.origin + '/images/icons/refresh.svg',
      companyLogo: window.location.origin + '/images/logo.png',
      logoImageAlt: 'Company Logo',
    };
  },
  computed: {
    ...mapGetters({
      funnel_data: 'funnel/getFunnelData',
      selectedPersonalities: 'funnel/getSelectedPersonalities',
      personalPreference: 'funnel/getSelectedPersonalPreferences',
      selectedVehicleTypes: 'funnel/getSelectedVehicleType',
      selectedActivities: 'funnel/getSelectedActivities',
      selectedFuelTypes: 'funnel/getSelectedFuelTypes',
    }),
    payload() {
      const payload = {
        ...this.funnel_data,
      };

      payload.personalities = this.selectedPersonalities;
      payload.personal_preferences = this.personalPreference;
      payload.preferredVehicleTypes = this.selectedVehicleTypes;
      payload.activities = this.selectedActivities;
      payload.fuel_types = this.selectedFuelTypes;

      return payload;
    },
  },
  mounted() {
    // Update: July 19, 2023: All users can now access this page.
    // this.checkAuth();
  },
  methods: {
    ...mapActions({
      resetFunnelData: 'funnel/resetFunnelData',
    }),
    checkAuth() {
      if (!this.authenticated) {
        router.push({ name: 'mid-register' });
      }
    },
  },
};
</script>
