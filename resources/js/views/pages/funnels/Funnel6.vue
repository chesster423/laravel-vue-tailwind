<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-5/6"></div>
        </div>
      </div>

      <div
        class="grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-0"
      >
        <h1 class="funnel-header-1 mt-5 text-center">
          What is your preferred type of vehicle?
        </h1>
        <p class="funnel-label mb-2 text-center">
          Choose all the rides that fit your life.
        </p>

        <div
          class="mx-auto grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-8 lg:p-5"
        >
          <div
            v-for="(val, key) in vehicleTypes"
            :key="val.value"
            class="border-1 funnel-progress-bar mx-auto cursor-pointer border text-center lg:p-3"
            :class="{ 'funnel-button-active': val.selected }"
            @click="val.selected = !val.selected"
          >
            <div class="p-3">
              <div :style="{ height: '80px' }">
                <img :src="basePath + val.img_path" />
              </div>
              <div>
                <p
                  class="funnel-label-2 uppercase"
                  :style="{ 'font-weight': '500' }"
                >
                  {{ val.vehicle_type_name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150">
      <div class="grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12">
        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-5' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-7' }"
          class="whitespace-nowrap text-base text-white"
          @click="closeDrop"
        >
          <button class="funnel-button-3" @click="setData()">Next</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Funnel6',
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + '/images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
      basePath: window.location.origin + '/',
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      vehicleTypes: 'funnel/vehicleTypes',
      funnel_data: 'funnel/getFunnelData',
    }),
  },
  mounted() {
    this.scrollToTop();
    this.getVehicleTypes();
  },
  methods: {
    closeDrop() {
      this.drop = false;
    },
    ...mapActions({
      vehicle_types: 'funnel/getVehicleTypes',
      setFunnelData: 'funnel/setFunnelData',
    }),
    async getVehicleTypes() {
      await this.vehicle_types().then((response) => {});
    },
    closeModal() {
      this.showModal = false;
    },
    setData() {
      const obj = {
        preferredVehicleTypes: this.vehicleTypes,
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
