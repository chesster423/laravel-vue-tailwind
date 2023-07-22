<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-2/6"></div>
        </div>
      </div>

      <div
        class="grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-8"
      >
        <h1 class="funnel-header-1 mt-5 text-center">
          What are your priorities?
        </h1>
        <p class="funnel-label mb-5 mt-5 text-center lg:text-left">
          Select up to 3 options. We will prioritize your recommendations by
          vehicles with the features that best reflect your priorities.
        </p>
      </div>

      <div
        class="mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0"
      >
        <div
          v-for="(val, key) in personal_preferences"
          :key="val.value"
          class="funnel-button-2 mx-auto flex w-full cursor-pointer items-center py-4 lg:py-8"
          :class="{ 'funnel-button-active': val.selected }"
          @click="selectPersonalPreference(val)"
        >
          <div
            class="mx-auto lg:ml-20 lg:flex lg:items-center"
            :class="{
              'opacity-10':
                personal_preferences.filter((value) => value.selected).length >=
                  3 && val.selected == false,
            }"
          >
            <div class="hidden lg:block">
              <input
                v-model="val.selected"
                type="checkbox"
                :checked="val.selected"
                :disabled="
                  personal_preferences.filter((value) => value.selected)
                    .length >= 3 && val.selected != true
                "
                class="mx-auto block h-5 w-5 cursor-pointer rounded lg:ml-0"
              />
            </div>
            <div class="">
              <label class="text-sm lg:ml-8 lg:text-xl">
                {{ val.car_text }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150">
      <div class="grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12">
        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-2' }"
          class="whitespace-nowrap text-right text-base font-medium"
          @click="closeDrop"
        >
          <button class="funnel-button-3 bg-white">Back</button>
        </router-link>

        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-4' }"
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

export default {
  name: 'Funnel3',
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + '/images/logo.png',
      logoImageAlt: 'Company Logo',
      drop: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      personal_preferences: 'funnel/getPersonalPreferences',
      funnel_data: 'funnel/getFunnelData',
    }),
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    ...mapActions({
      setFunnelData: 'funnel/setFunnelData',
    }),
    closeDrop() {
      this.drop = false;
    },
    selectPersonalPreference(val) {
      if (
        !(
          this.personal_preferences.filter((value) => value.selected).length >=
            3 && val.selected == false
        )
      ) {
        val.selected = !val.selected;
      }
    },
    setData() {
      const obj = {
        personal_preferences: this.personal_preferences,
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
