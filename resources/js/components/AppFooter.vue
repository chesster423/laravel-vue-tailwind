<template>
  <footer :class="footerClass">
    <div class="border-t py-4" :class="borderClass">
      <img
        :src="companyLogo"
        class="footer-logo max-auto mx-auto mb-4"
        :alt="logoImageAlt"
      />

      <h2 class="mb-10 text-center text-sm leading-6 text-white">
        Keep up to date with the latest
      </h2>

      <div class="mx-auto mb-8 flex items-center justify-center gap-5">
        <a
          v-for="(val, index) in socials"
          :key="index"
          :href="val.url"
          target="_blank"
          class="rounded-full bg-white p-2"
        >
          <img :src="val.image" class="w-6" />
        </a>
      </div>

      <p
        class="text-center text-xs leading-6 text-slate-500 text-white dark:text-gray-300"
      >
        © Copyright {{ theYear }} {{ company }}. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  components: {},
  props: {
    footerClass: {
      type: String,
      default: 'max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8',
    },
    borderClass: {
      type: String,
      default: 'border-slate-900/5 dark:border-slate-700',
    },
  },
  setup() {
    return {};
  },
  data() {
    return {
      company: 'Carsona',
      companyLogo: window.location.origin + '/images/logo-white.png',
    };
  },
  computed: {
    theYear() {
      const startYear = '2023';
      const currentYear = new Date().getFullYear() + 1;
      if (currentYear == startYear) {
        return currentYear;
      }
      return `${startYear}-${currentYear}`;
    },
    socials() {
      return this.$store.getters.getSocials;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {},
};
</script>

<style scoped>
.footer-logo {
  width: 144px;
}

h2 {
  font-size: 20px;
  font-family: 'Montserrat';
  color: #ffffff;
}
</style>

<style lang="scss" scoped></style>
