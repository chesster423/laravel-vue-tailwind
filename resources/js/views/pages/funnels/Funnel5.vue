<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-4/6"></div>
        </div>
      </div>

      <div
        class="grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-0"
      >
        <h1 class="funnel-header-1 mt-5 text-center">
          What is your preferred type of fuel?
        </h1>
        <p class="funnel-label mb-2 mt-2 text-center">
          Select any or all fuel types you’re considering.
        </p>

        <div
          class="mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-8/12 lg:grid-cols-2 lg:gap-10 lg:p-0"
        >
          <div
            v-for="(val, key) in fuel_types"
            :key="key"
            class="funnel-button-2 mx-auto w-full cursor-pointer px-3 py-4"
            :class="{ 'funnel-button-active': val.selected }"
            @click="val.selected = !val.selected"
          >
            <div class="mx-auto">
              <div class="mb-2">
                <img :src="val.image" class="mx-auto" />
              </div>
              <div class="text-center">
                <label class="font-600 text-base lg:ml-4 lg:text-xl">
                  {{ val.type }}
                </label>
                <br />
                <label class="text-xs lg:ml-4 lg:text-base">
                  {{ val.description }}
                </label>
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
          :to="{ name: 'step-4' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-6' }"
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
import router from '@/router';
import AppLogin from '@components/auth/AppLogin.vue';

export default {
  name: 'Funnel5',
  components: {
    AppLogin,
  },
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + '/images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
      basePath: window.location.origin + '/',
      showModal: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      fuel_types: 'funnel/getFuelTypes',
      funnel_data: 'funnel/getFunnelData',
    }),
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    closeDrop() {
      this.drop = false;
    },
    ...mapActions({
      setFunnelData: 'funnel/setFunnelData',
    }),
    setData() {
      const obj = {
        fuel_types: this.fuel_types,
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
