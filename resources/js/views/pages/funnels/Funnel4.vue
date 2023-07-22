<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-3/6"></div>
        </div>
      </div>

      <div class="grid-rows-12 mx-auto grid grid-flow-row gap-5">
        <h1 class="funnel-header-1 mt-5 text-center">
          What are the types of activities that you do most?
        </h1>
        <p class="funnel-label mb-2 mt-2 text-center">
          Select up to 3 options and we will determine the most optimal vehicles
          that best reflect your lifestyle.
        </p>

        <div
          v-if="loading == false"
          class="mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0"
        >
          <div
            v-for="(val, key) in activities_data"
            :key="val.id"
            class="funnel-button-2 mx-auto flex w-full cursor-pointer items-center py-4 lg:py-8"
            :class="{ 'funnel-button-active': val.selected }"
            @click="selectActivity(val)"
          >
            <div
              class="mx-auto lg:ml-20 lg:flex lg:items-center"
              :class="{ 'opacity-10': showDisabled(val) }"
            >
              <div class="hidden lg:block">
                <input
                  v-model="val.selected"
                  type="checkbox"
                  :checked="val.selected"
                  :disabled="disableCheckbox(val)"
                  class="mx-auto block h-5 w-5 cursor-pointer rounded lg:ml-0"
                />
              </div>
              <div class="">
                <label class="text-sm lg:ml-4 lg:text-xl">
                  {{ val.activity_name }}
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
          :to="{ name: 'step-3' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-5' }"
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
  name: 'Funnel4',
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + '/images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
      basePath: window.location.origin + '/',
      loading: true,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      funnel_data: 'funnel/getFunnelData',
      activities: 'funnel/getActivities',
    }),
    activities_data() {
      const data = [];
      const activities = [];

      for (const key in this.activities) {
        data.push(this.activities[key]);
      }

      return data;
    },
  },
  mounted() {
    this.scrollToTop();
    this.init();
  },
  methods: {
    ...mapActions({
      getFunnelActivities: 'funnel/getActivities',
      setFunnelData: 'funnel/setFunnelData',
    }),
    closeDrop() {
      this.drop = false;
    },
    showDisabled(val) {
      return (
        this.loading == false &&
        this.activities_data.filter((value) => value.selected).length >= 3 &&
        val.selected == false
      );
    },
    disableCheckbox(val) {
      return (
        this.loading == false &&
        this.activities_data.filter((value) => value.selected).length >= 3 &&
        val.selected != true
      );
    },
    selectActivity(val) {
      if (
        !(
          this.loading == false &&
          this.activities_data.filter((value) => value.selected).length >= 3 &&
          val.selected == false
        )
      ) {
        val.selected = !val.selected;
      }
    },
    init() {
      this.loading = true;
      this.getFunnelActivities().then((response) => {
        this.loading = false;
      });
    },
    setData() {
      const obj = {
        activities: this.activities,
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
