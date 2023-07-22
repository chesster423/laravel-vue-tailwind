<template>
  <div id="faqs-page" class="mx-auto">
    <section class="bg-black py-24 pb-48">
      <div class="container mx-auto pt-10 lg:w-5/12">
        <faqs></faqs>
      </div>
    </section>

    <app-footer footer-class="bg-black pt-10"></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Faqs from '@components/content/FAQS.vue';
import AppFooter from '@components/AppFooter.vue';

export default {
  name: 'Faq',
  components: {
    Faqs,
    AppFooter,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      video: window.location.origin + '/videos/about-us.mp4',
      aboutImage: window.location.origin + '/images/about-us/media-carsona.png',
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
  },
};
</script>
