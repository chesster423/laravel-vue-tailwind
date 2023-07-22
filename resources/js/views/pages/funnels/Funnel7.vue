<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div
            class="funnel-progress funnel-bg h-3"
            :style="{ width: '90%' }"
          ></div>
        </div>
      </div>

      <div class="grid-rows-12 grid grid-flow-row px-8 lg:px-0">
        <h1 class="funnel-header-1 mt-5 text-center">
          How much do you want to spend?
        </h1>
        <p class="funnel-label mt-5 text-center">
          Use the slider filter the results by price.
        </p>
      </div>

      <div
        v-if="funnel_data.spendingRange"
        class="grid-rows-12 border-1 mx-auto mt-45 grid grid-flow-row border p-10 px-8 lg:mt-90 lg:w-4/12"
      >
        <h1 class="funnel-header-2 mb-5 mt-5 text-center">Budget</h1>
        <p
          v-if="funnel_data.spendingRange[0]"
          class="funnel-header-3 text-center"
        >
          ${{ funnel_data.spendingRange[0] }} or less – ${{
            funnel_data.spendingRange[1]
          }}
        </p>

        <vue-slider
          v-model="funnel_data.spendingRange"
          class="mt-8"
          :min="10000"
          :max="100000"
          :dot-style="{ background: '#000000', border: 'none' }"
          :dot-size="18"
          :height="10"
          :interval="1000"
        />
        <!-- <h1>{{ value }}</h1> -->
      </div>
    </div>

    <div class="funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150">
      <div class="grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12">
        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-6' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <button class="funnel-button-3 text-white" @click="setData()">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import router from '@/router';

export default {
  name: 'Funnel7',
  components: {
    VueSlider,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
      spendingRange: [20000, 30000],
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
  mounted() {
    this.scrollToTop();
    this.initSpendingRange();
  },
  methods: {
    ...mapActions({
      setFunnelData: 'funnel/setFunnelData',
    }),
    closeDrop() {
      this.drop = false;
    },

    initSpendingRange() {
      this.funnel_data.spendingRange =
        this.funnel_data.spendingRange ?? this.spendingRange;
    },
    setData() {
      if (!this.authenticated) {
        router.push({ name: 'mid-register' });
        return false;
      } else {
        const obj = {
          spendingRange: this.funnel_data.spendingRange,
        };
        this.setFunnelData(obj);
        router.push({ name: 'step-8' });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
