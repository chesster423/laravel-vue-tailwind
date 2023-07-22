<template>
  <div id="about" class="mx-auto">
    <section class="banner-section">
      <div controls class="banner">
        <video autoplay muted loop playsinline>
          <source :src="video" type="video/mp4" />
        </video>

        <div class="social-section container mx-auto">
          <div class="text-center">
            <h1 class="font-bold">ABOUT US</h1>
          </div>

          <div
            class="mx-auto mb-8 mt-12 flex items-center justify-center gap-3 lg:gap-5"
          >
            <a
              v-for="(val, index) in socials"
              :key="index"
              :href="val.url"
              target="_blank"
              class="rounded-full bg-white p-2"
            >
              <img :src="val.image" class="w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="about-carsona-description container mx-auto mt-10 lg:mt-0">
      <div class="mx-auto p-5 text-center lg:w-8/12 lg:text-center">
        <p class="mb-4">We have one vision. Seamless.</p>
        <p class="mb-4">
          Carsona is powered by a sophisticated algorithm that focuses on your
          lifestyle and interests to find the perfect car for you.
        </p>
        <p class="mb-4">
          Welcome to Carsona – where transparency, innovation, and you converge.
        </p>
      </div>
    </section>

    <section class="container mx-auto">
      <div class="mx-auto p-5 lg:w-8/12">
        <h1 class="mb-3 text-sm font-medium lg:text-xl">OUR MEDIA</h1>
        <h1 class="mb-5 text-sm font-medium lg:text-base">
          IGNITION MAGAZINE FEATURE
        </h1>
        <img :src="aboutImages[0]" class="hidden lg:block" />
        <img :src="aboutImages[1]" class="lg:hidden" />
        <img :src="aboutImages[2]" class="lg:hidden" />
      </div>
    </section>

    <section class="carousel-section mt-10">
      <div class="container mx-auto">
        <div class="mx-auto flex grid grid-cols-4 items-center p-5 lg:w-8/12">
          <img
            v-for="(item, index) in carouselImages"
            :key="index"
            class="mx-auto"
            :src="item"
          />
        </div>
      </div>
    </section>

    <app-footer footer-class="bg-black pt-10"></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import AppFooter from '@components/AppFooter.vue';

export default {
  name: 'About',
  components: {
    ChatBubbleLeftEllipsisIcon,
    AppFooter,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      video: window.location.origin + '/videos/about-us.mp4',
      carouselImages: [
        window.location.origin + '/images/home/carousel-capricorn.png',
        window.location.origin + '/images/home/carousel-pluseight.png',
        window.location.origin + '/images/home/carousel-spacecubed.png',
        window.location.origin + '/images/home/carousel-techstars.png',
      ],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    aboutImages() {
      return this.$store.getters.getAboutData.images;
    },
    socials() {
      return this.$store.getters.getSocials;
    },
  },
};
</script>
