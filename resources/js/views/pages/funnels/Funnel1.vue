<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 pb-20 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-0"></div>
        </div>
      </div>

      <div class="grid-rows-12 grid grid-flow-row px-2 lg:px-0">
        <h1 class="funnel-header-1 mt-5 text-center">
          Let’s start off with the basics?
        </h1>
        <p class="funnel-label mt-5 text-center">
          Let’s start off with some basic details to build your recommendations
        </p>
      </div>

      <div
        class="grid-rows-12 mb-10 mt-8 grid grid-flow-row text-center lg:mt-12"
      >
        <h1 class="funnel-header-2 mb-5 mt-5">What’s your age?</h1>
        <p>Select an option that best reflects your age group.</p>
      </div>

      <div
        class="mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0"
      >
        <div
          v-for="(val, key) in ages"
          :key="key"
          class="funnel-button-2 mx-auto flex w-full items-center py-4 lg:py-8"
          :class="{ 'funnel-button-active': funnel_data.ageRange === val }"
          @click="setAge(val)"
        >
          <div class="mx-auto flex items-center lg:ml-20">
            <div class="">
              <input
                type="checkbox"
                :checked="funnel_data.ageRange === val"
                class="h-5 w-5 cursor-pointer rounded"
              />
            </div>
            <div class="">
              <label class="ml-4 text-sm lg:ml-8 lg:text-xl">{{ val }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150">
      <div class="grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12">
        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-1' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-2' }"
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
import { mapGetters, mapActions } from 'vuex';
import VueSlider from 'vue-slider-component';

export default {
  name: 'Funnel1',
  components: {
    VueSlider,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      ages: 'funnel/getAges',
      funnel_data: 'funnel/getFunnelData',
    }),
  },
  mounted() {},
  methods: {
    ...mapActions({
      setFunnelData: 'funnel/setFunnelData',
    }),
    closeDrop() {
      this.drop = false;
    },
    setAge(age) {
      this.funnel_data.ageRange = age;
    },
    setData() {
      this.setFunnelData(this.funnel_data);
    },
  },
};
</script>
