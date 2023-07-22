<template>
  <div id="homepage" class="mx-auto">
    <section class="banner-section">
      <div controls class="banner">
        <video autoplay muted loop playsinline>
          <source :src="video" type="video/mp4" />
        </video>

        <div class="funnel-link-container">
          <h2>Your next drive is a few clicks away.</h2>
          <router-link
            :to="{ name: 'step-1' }"
            class="whitespace-nowrap rounded-full border-slate-50 p-4 px-8 text-center text-base font-medium drop-shadow-md"
          >
            FIND YOUR CARSONA
          </router-link>
        </div>
      </div>
    </section>

    <section class="home-carsona-description container mx-auto mt-10 lg:mt-0">
      <div class="mx-auto gap-5 p-5 font-bold lg:grid lg:w-8/12 lg:grid-cols-3">
        <div class="lg:mt-0">
          <div
            class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"
          >
            <p>1</p>
          </div>
          <br />
          <p class="text-center lg:mt-4 lg:pr-10 lg:text-left">
            Find your perfect car, that matches your needs with our 'Find your
            Carsona' algorithm.
          </p>
        </div>
        <div class="mt-10 lg:mt-0">
          <div
            class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"
          >
            <p>2</p>
          </div>
          <br />
          <p class="text-center lg:mt-4 lg:pr-10 lg:text-left">
            Save your favourites and view listing!
          </p>
        </div>
        <div class="mt-10 lg:mt-0">
          <div
            class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"
          >
            <p>3</p>
          </div>
          <br />
          <p class="text-center lg:mt-4 lg:pr-10 lg:text-left">
            Get the best prices and discounts tailored to you! COMING SOON
          </p>
        </div>
      </div>
    </section>

    <section class="mt-10 bg-black lg:hidden">
      <div class="container mx-auto">
        <app-carousel></app-carousel>
      </div>
    </section>

    <section class="mt-10 hidden bg-black lg:block">
      <div class="container mx-auto">
        <div
          class="features-container mx-auto grid gap-5 px-5 py-10 lg:w-8/12 lg:grid-cols-3 lg:px-0"
        >
          <div
            v-for="(val, index) in featuresData"
            :key="index"
            class="mx-auto text-center"
          >
            <img :src="val.img" class="mx-auto" />
            <p class="title mx-auto text-white" style="letter-spacing: 0.12em">
              {{ val.title }}
            </p>
            <p
              class="mx-auto w-5/6 text-white"
              style="line-height: 1.6; font-size: 13px"
            >
              {{ val.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <div class="container mx-auto">
        <div class="mx-auto grid grid-cols-2 p-5 lg:w-8/12">
          <div class="mx-auto">
            <p class="mb-8">CARSONA: [NOUN]</p>
            <p class="mb-8 font-semibold italic">
              “The combination of ones persona and lifestyle choices that are
              accurately matched to a vehicle and or transport amenities.”
            </p>
            <p class="mb-8">Make the right choice.</p>
            <router-link
              :to="{ name: 'step-1' }"
              class="find-your-carsona whitespace-nowrap text-base font-medium hover:text-gray-900 dark:hover:text-gray-400"
            >
              FIND YOUR CARSONA
            </router-link>
          </div>
          <div class="mx-auto">
            <img :src="backgroundImages.carsona" />
          </div>
        </div>
      </div>
    </section>

    <section class="carousel-section mt-10">
      <div class="container mx-auto">
        <label class="carousel-heading block pt-5 text-center"
          >AS SEEN ON</label
        >
        <div class="carousel-slider">
          <div
            class="mx-auto flex grid grid-cols-4 items-center px-5 lg:w-8/12"
          >
            <img
              v-for="(item, index) in carouselImages"
              :key="index"
              class="mx-auto"
              :src="item"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="testaments-section mt-10">
      <div class="container mx-auto">
        <div class="mx-auto grid gap-10 p-5 lg:w-8/12 lg:grid-cols-3">
          <div
            class="testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left"
          >
            <img :src="testamentImages[0]" class="mx-auto" />
            <p class="testament mb-4 italic">
              "It was a completely different and unique experience choosing a
              car with Carsona. I didn't feel the usual pressure of the
              dealership buying process and I was confident it was the car for
              me. Everyone should use this."
            </p>

            <p>
              Adam <br />
              Innovations Manager
            </p>
          </div>

          <div
            class="testament-container testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left"
          >
            <img :src="testamentImages[1]" class="mx-auto" />
            <p class="testament mb-4 italic">
              "I bought a car this year and honestly I had no idea where to
              start. What brand or features to look for. I felt pretty powerless
              in the process. Carsona would have been really helpful in pointing
              me in the right direction. I will definitely be using this in the
              future"
            </p>

            <p>
              Bec <br />
              Photographer
            </p>
          </div>

          <div
            class="testament-container testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left"
          >
            <img :src="testamentImages[2]" class="mx-auto" />
            <p class="testament mb-4 italic">
              “This is a game changer for first time buyers, having a car
              matched to your lifestyle, no pressure from target driven
              salespeople or questionable car yards. Welcome to the future of
              car buying, this is only going to get better!”
            </p>

            <p>
              Javaid <br />
              Accountant
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10 mt-10 bg-black">
      <div class="container mx-auto pt-10 lg:w-5/12">
        <faqs></faqs>
      </div>
    </section>

    <app-footer footer-class="bg-black pt-10"></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import Faqs from '@components/content/FAQS.vue';
import AppFooter from '@components/AppFooter.vue';
import AppCarousel from '@components/common/AppCarousel.vue';

export default {
  name: 'Home',
  components: {
    ChatBubbleLeftEllipsisIcon,
    Faqs,
    AppFooter,
    AppCarousel,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      video: window.location.origin + '/videos/home.mp4',
      featureImages: [
        window.location.origin + '/images/home/microchip.png',
        window.location.origin + '/images/home/clock.png',
        window.location.origin + '/images/home/key.png',
      ],
      backgroundImages: {
        carsona: window.location.origin + '/images/home/pattern-car-bg.png',
        pattern: window.location.origin + '/images/home/pattern-bg.png',
      },
      carouselImages: [
        window.location.origin + '/images/home/carousel-capricorn.png',
        window.location.origin + '/images/home/carousel-pluseight.png',
        window.location.origin + '/images/home/carousel-spacecubed.png',
        window.location.origin + '/images/home/carousel-techstars.png',
      ],
      testamentImages: [
        window.location.origin + '/images/home/person-adam.jpg',
        window.location.origin + '/images/home/person-bec.png',
        window.location.origin + '/images/home/person-javaid.jpg',
      ],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    featuresData() {
      return this.$store.getters.getHomeData.featuresData;
    },
  },
};
</script>
