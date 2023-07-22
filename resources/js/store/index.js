// import Vue from 'vue';
import { createStore } from 'vuex';
import sharedMutations from 'vuex-shared-mutations';
import auth from '@store/modules/auth';
import toast from '@store/modules/toast';
import sidebar from '@store/modules/sidebar';
import funnel from '@store/modules/funnel';
import persistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    homeData: {
      featuresData: [
        {
          img: window.location.origin + '/images/home/microchip.png',
          title: 'Personalised to you',
          text: 'Personalised to you, we use what you want to find you what you NEED.',
        },
        {
          img: window.location.origin + '/images/home/clock.png',
          title: 'Minutes, not hours',
          text: 'Time saving tools for faster high quality research.',
        },
        {
          img: window.location.origin + '/images/home/key.png',
          title: 'Empowering your buy',
          text: 'Let your lifestyle and interests shop for you. See your most optimal options.',
        },
      ],
    },
    aboutData: {
      images: [
        window.location.origin + '/images/about-us/media-carsona.png',
        window.location.origin + '/images/about-us/carsona-mobile-1.png',
        window.location.origin + '/images/about-us/carsona-mobile-2.png',
      ],
    },
    footerData: {
      socials: [
        {
          name: 'Facebook',
          title: 'Visit our Facebook',
          url: 'https://www.facebook.com/people/Carsona/100087266408881/',
          image: window.location.origin + '/images/icons/socials/facebook.svg',
        },
        {
          name: 'Instagram',
          title: 'Visit our Instagram',
          url: 'https://www.instagram.com/carsona.io/',
          image: window.location.origin + '/images/icons/socials/instagram.svg',
        },
        {
          name: 'Twitter',
          title: 'Visit our Twitter',
          url: 'https://twitter.com/Carsona_io',
          image: window.location.origin + '/images/icons/socials/twitter.svg',
        },
        {
          name: 'LinkedIn',
          title: 'Visit our LinkedIn',
          url: 'https://www.linkedin.com/company/carsona/',
          image: window.location.origin + '/images/icons/socials/linkedin.svg',
        },
        {
          name: 'Tiktok',
          title: 'Visit our Tiktok',
          url: 'https://www.tiktok.com/@carsona.io',
          image: window.location.origin + '/images/icons/socials/tiktok.svg',
        },
      ],
    },
  },
  getters: {
    getHomeData(state) {
      return state.homeData;
    },
    getAboutData(state) {
      return state.aboutData;
    },
    getSocials(state) {
      return state.footerData.socials;
    },
  },
  mutations: {},
  actions: {
    //
  },
  modules: {
    auth,
    toast,
    sidebar,
    funnel,
  },
  plugins: [
    sharedMutations({
      predicate: ['SET_USER', 'SET_AUTHENTICATION', 'SET_THEME'],
    }),
    persistedState({
      storage: window.sessionStorage,
    }),
  ],
});
