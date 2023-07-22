<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto px-5 lg:px-0">
      <div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12">
        <div class="funnel-progress-bar h-3 w-full">
          <div class="funnel-progress funnel-bg h-3 w-1/6"></div>
        </div>
      </div>

      <div class="grid-rows-12 mx-auto mb-14 grid grid-flow-row lg:w-6/12">
        <h1 class="funnel-header-1 mt-5 text-center">
          What best describes you?
        </h1>
        <p class="funnel-label mt-5 text-center">
          Select up to 2 options. We will filter your recommendations by
          vehicles that reflect your personality.
        </p>
      </div>

      <div
        class="mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0"
      >
        <div
          v-for="(val, key) in personalities"
          :key="val.value"
          class="funnel-button-2 mx-auto flex w-full cursor-pointer items-center py-4 lg:py-8"
          :class="{ 'funnel-button-active': val.selected }"
          @click="setPersonality(val)"
        >
          <div
            class="mx-auto lg:ml-20 lg:flex lg:items-center"
            :class="{
              'opacity-10':
                personalities.filter((value) => value.selected).length >= 2 &&
                val.selected == false,
            }"
          >
            <div class="hidden lg:block">
              <input
                type="checkbox"
                :checked="val.selected"
                :disabled="
                  personalities.filter((value) => value.selected).length >= 2 &&
                  val.selected != true
                "
                class="mx-auto block h-5 w-5 cursor-pointer rounded lg:ml-0"
              />
            </div>
            <div class="">
              <label class="text-sm lg:ml-8 lg:text-xl">{{ val.text }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="funnel-bg-light-gray mx-auto mt-10 p-3 lg:w-6/12">
        <h1 class="funnel-label-3" :style="{ 'font-weight': '700' }">
          What’s a Carsona?
        </h1>
        <p class="mt-3">
          [NOUN]: “The combination of ones persona and lifestyle choices that
          are accurately matched to a vehicle or amenities that vehicle
          possesses.”
        </p>

        <div class="mx-auto mt-5 grid grid-cols-1 gap-4 lg:grid-cols-1">
          <div v-for="(val, key) in personalities" :key="val.value">
            <p class="funnel-label-3">{{ val.text }}</p>
            <p class="text-left">
              {{ val.description }}
            </p>
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
          :to="{ name: 'step-3' }"
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
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  name: 'Funnel2',
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
      personalities: 'funnel/getPersonalities',
      funnel_data: 'funnel/getFunnelData',
    }),
    countSelected() {
      return this.personalities.filter((x) => x.selected == true).length;
    },
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    ...mapActions({
      setFunnelData: 'funnel/setFunnelData',
      popToast: 'toast/popToast',
    }),
    closeDrop() {
      this.drop = false;
    },
    setPersonality(data) {
      if (data.selected == false && this.countSelected >= 2) {
        this.popToast({
          message: 'You can only select 2.',
          timer: 5000,
          icon: 'error',
        });
        return false;
      } else {
        return (data.selected = !data.selected);
      }
    },
    setData() {
      const obj = {
        personalities: this.personalities,
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
