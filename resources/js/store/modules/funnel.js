import axios from 'axios';
import Cookies from 'js-cookie';
import toast from '@store/modules/toast';
import router from '@/router';

export default {
  namespaced: true,
  state() {
    return {
      funnel_data: {
        gender: '',
        ageRange: '',
        spendingRange: [20000, 30000],
        email: '',
      },
      activities: [],
      vehicleTypes: [],
      ages: ['18-20', '21-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      personalities: [
        {
          value: 'the_explorer',
          img:
            window.location.origin +
            '/images/funnels/step-2/1-the-explorer.png',
          text: 'The Explorer',
          description:
            '“I thrive on adventure and the rush of exploring new places.”',
          selected: false,
        },
        {
          value: 'the_ecocentric',
          img:
            window.location.origin +
            '/images/funnels/step-2/2-the-ecocentric.png',
          text: 'The Eco-centric',
          description:
            '“I strive to make choices that are sustainable and Eco-friendly in all areas of my life.”',
          selected: false,
        },
        {
          value: 'the_tradie',
          img:
            window.location.origin + '/images/funnels/step-2/3-the-tradie.png',
          text: 'The Tradie',
          description:
            '“I prioritize reliability, efficiency, and functionality when selecting my tools and equipment.”',
          selected: false,
        },
        {
          img: window.location.origin + '/images/funnels/step-2/4-the-lux.png',
          text: 'The Luxurious',
          value: 'the_luxurious',
          description:
            '"I have an appreciation for the finer things in life and strive for experiences that embody luxury and sophistication.”',
          selected: false,
        },
        {
          value: 'the_parent',
          img:
            window.location.origin + '/images/funnels/step-2/5-the-parent.png',
          text: 'The Parent',
          description:
            '‘I’m family-oriented, creating memorable experiences with my loved ones is my top priority.”',
          selected: false,
        },
        {
          value: 'the_thrillseeker',
          img:
            window.location.origin + '/images/funnels/step-2/6-the-thrill.png',
          text: 'The Thrill Seeker',
          description:
            '"I have a thirst for speed and adrenaline that drives me to seek out the most intense experiences possible.”',
          selected: false,
        },
      ],
      personal_preferences: [
        {
          value: 'performance',
          text: '--',
          car_text: 'Performance',
          selected: false,
        },
        {
          value: 'fuel_efficient',
          text: 'I feel more comfortable knowing that my fuel consumption is reasonable',
          car_text: 'Fuel Efficiency',
          selected: false,
        },
        {
          value: 'safety',
          text: 'I like feeling safe in my car when I drive',
          car_text: 'Safety',
          selected: false,
        },
        {
          value: 'warranty',
          text: 'I highly value a manufacturer warranty guarantee in my decision making',
          car_text: 'Warranty',
          selected: false,
        },
        {
          value: 'space',
          text: 'I like having plenty of space in my car because I need to carry lots of stuff',
          car_text: 'Cargo Space',
          selected: false,
        },
        {
          value: 'features',
          text: '--',
          car_text: 'Features',
          selected: false,
        },
        {
          value: 'towing_power',
          text: '--',
          car_text: 'Towing Power',
          selected: false,
        },
        {
          value: 'reliability',
          text: '--',
          car_text: 'Reliability',
          selected: false,
        },
        {
          value: 'passenger_space',
          text: '--',
          car_text: 'Passenger Space',
          selected: false,
        },
        {
          value: 'sustainability',
          text: '--',
          car_text: 'Sustainability',
          selected: false,
        },
        // {
        //   value: 'environment_friendly',
        //   text: 'I am conscious of the environment, I want a car that has a low impact',
        //   car_text: 'Environment Friendly',
        //   selected: false,
        // },
        // {
        //   value: 'convenience',
        //   text: 'I like the ease and convenience of my car',
        //   car_text: 'Convenience',
        //   selected: false,
        // },
      ],
      fuel_types: [
        {
          value: 'petrol_diesel',
          type: 'Petrol/Diesel',
          description: 'Combustion Powered',
          image:
            window.location.origin +
            '/images/funnels/fuel_types/petrol_diesel.png',
          selected: false,
        },
        {
          value: 'hybrid',
          type: 'Hybrid',
          description: 'Combustion/Electric',
          image:
            window.location.origin + '/images/funnels/fuel_types/hybrid.png',
          selected: false,
        },
        {
          value: 'plugin_hybrid',
          type: 'Plug-in Hybrid',
          description: 'Electric/Combustion',
          image:
            window.location.origin +
            '/images/funnels/fuel_types/plugin_hybrid.png',
          selected: false,
        },
        {
          value: 'electric',
          type: 'Electric',
          description: 'Battery Powered ',
          image:
            window.location.origin + '/images/funnels/fuel_types/electric.png',
          selected: false,
        },
      ],
      recommended_cars: [],
    };
  },
  getters: {
    getFunnelData(state) {
      return state.funnel_data;
    },
    getActivities(state) {
      return state.activities;
    },
    vehicleTypes(state) {
      return state.vehicleTypes;
    },
    getAges(state) {
      return state.ages;
    },
    getFuelTypes(state) {
      return state.fuel_types;
    },
    getPersonalities(state) {
      return state.personalities;
    },
    getPersonalPreferences(state) {
      return state.personal_preferences;
    },
    recommendedCars(state) {
      return state.recommended_cars;
    },
    getSelectedPersonalities(state) {
      if (state.funnel_data.personalities) {
        const data = state.funnel_data.personalities
          .filter((x) => x.selected == true)
          .map((y) => {
            return y.value;
          });

        return data;
      }

      return [];
    },
    getSelectedPersonalPreferences(state) {
      if (state.funnel_data.personal_preferences) {
        const data = state.funnel_data.personal_preferences
          .filter((x) => x.selected == true)
          .map((y) => {
            return y.value;
          });

        return data;
      }
      return [];
    },
    getSelectedFuelTypes(state) {
      if (state.funnel_data.fuel_types) {
        const data = state.funnel_data.fuel_types
          .filter((x) => x.selected == true)
          .map((y) => {
            return y.value;
          });

        return data;
      }

      return [];
    },
    getSelectedVehicleType(state) {
      if (state.funnel_data.preferredVehicleTypes) {
        return Object.entries(state.funnel_data.preferredVehicleTypes)
          .filter((e) => e[1].selected == true)
          .map((y) => {
            return y[1].id;
          });
      }

      return [];
    },
    getSelectedActivities(state) {
      if (state.funnel_data.activities) {
        return Object.entries(state.funnel_data.activities)
          .filter((e) => e[1].selected == true)
          .map((y) => {
            return y[1].slug;
          });
      }
      return [];
    },
  },
  mutations: {
    SET_FUNNEL_DATA(state, data) {
      state.funnel_data = {
        ...state.funnel_data,
        ...data,
      };
    },
    SET_ACTIVITIES(state, data) {
      state.activities = {
        ...data,
        ...state.funnel_data.activities,
      };
    },
    SET_VEHICLE_TYPES(state, data) {
      state.vehicleTypes = {
        ...data,
        ...state.funnel_data.preferredVehicleTypes,
      };
    },
    SET_RECOMMENDED_CARS(state, data) {
      state.recommended_cars = data;
    },
    RESET_FUNNEL_DATA: function (state) {
      state.funnel_data = {};

      state.personalities.forEach(function (item, index) {
        state.personalities[index].selected = false;
      });

      state.personal_preferences.forEach(function (item, index) {
        state.personal_preferences[index].selected = false;
      });

      state.fuel_types.forEach(function (item, index) {
        state.fuel_types[index].selected = false;
      });
    },
  },
  actions: {
    async getActivities({ commit }) {
      await axios
        .get('/api/activities')
        .then((res) => {
          if (res && res.data) {
            commit('SET_ACTIVITIES', res.data);
          } else {
            throw res;
          }
        })
        .catch((err) => {
          throw err.response;
        });
    },
    async getVehicleTypes({ commit }) {
      await axios.get('/api/vehicle_types').then((res) => {
        if (res && res.data) {
          commit('SET_VEHICLE_TYPES', res.data);
        } else {
          throw res;
        }
      });
    },
    async getRecommendedCars({ commit }, payload) {
      await axios.post('/api/car/recommended', payload).then((res) => {
        if (res && res.data) {
          commit('SET_RECOMMENDED_CARS', res.data);
        } else {
          throw res;
        }
      });
    },
    setFunnelData({ commit }, data) {
      commit('SET_FUNNEL_DATA', data);
    },
    resetFunnelData({ commit }) {
      commit('RESET_FUNNEL_DATA');
      router.push({ name: 'step-1' });
    },
  },
};
