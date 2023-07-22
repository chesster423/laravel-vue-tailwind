<template>
  <div class="mx-auto pt-8">
    <div class="funnel-container container mx-auto">
      <div
        v-if="recommended_cars.length == 0"
        class="grid-rows-12 mx-auto mt-10 grid grid-flow-row gap-5 text-center lg:w-6/12"
      >
        No cars found within your spending range.
        <br /><br />
        <router-link
          v-slot="{ isActive }"
          :to="{ name: 'step-7' }"
          class="whitespace-nowrap text-base font-medium underline"
          @click="closeDrop"
        >
          Go back
        </router-link>
      </div>
      <div v-if="isLoading" class="text-center">
        <CircleSvg class="mx-auto mb-5 mt-5 h-6 w-6" stroke="#000" />
        <span>Getting your cars. Please wait</span>
      </div>
      <div v-if="!isLoading">
        <div
          v-for="(val, index) in recommended_cars"
          v-show="index < 5"
          :key="index"
          :class="classWidth"
          class="border-y-1 mx-auto mt-10 gap-4 border p-5 lg:grid lg:grid-cols-3 lg:border-0"
        >
          <div class="lg:col-span-1">
            <img
              v-if="val.images[0]"
              :src="val.images[0]['image_url']"
              class="rounded-lg"
              alt="Image"
            />
            <img
              v-if="!val.images[0]"
              :src="noImage"
              class="rounded-lg"
              alt="Image"
            />
          </div>
          <div class="col-span-2">
            <div class="mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5">
              <div class="col-span-3 col-start-1">
                <label class="funnel-label-2 font-medium">{{
                  val.model
                }}</label>
              </div>
            </div>

            <p class="mt-2 text-sm font-medium">
              {{ val.overview }}
            </p>

            <div class="mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5">
              <div class="funnel-bg-light-gray col-span-2 p-1 pb-0">
                <label class="text-xs">Price Range</label>
                <p class="text-center text-sm font-bold">
                  ${{ currencyFormat(val.cost) }}
                </p>
              </div>
              <div class="funnel-bg-light-gray p-1 pb-0">
                <label class="text-xs">Body Type</label>
                <p class="text-center text-sm">
                  {{ val.vehicle_type.vehicle_type_name }}
                </p>
              </div>
              <div class="funnel-bg-light-gray p-1 pb-0">
                <label class="text-xs">Drive Type</label>
                <p class="text-center text-sm">{{ val.drive_type ?? null }}</p>
              </div>
              <div class="funnel-bg-light-gray p-1 pb-0">
                <label class="text-xs">Fuel Efficiency</label>
                <p class="text-center text-sm">
                  {{ val.fuel_consumption_combined }}
                </p>
              </div>
            </div>

            <div class="mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5">
              <div class="lg:col-start-4">
                <a
                  v-if="val.dealership_url && authenticated"
                  :href="val.dealership_url"
                  target="_blank"
                >
                  <button
                    class="funnel-button-rounded funnel-bg-blue float-right rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100"
                    style="width: 100px"
                  >
                    View Listing
                  </button>
                </a>
              </div>
              <div class="col-start-5">
                <button
                  class="funnel-button-rounded funnel-bg-blue flex items-center rounded-full text-xs text-white opacity-90 hover:opacity-100"
                  style="width: 100px; padding: 6px 20px"
                  @click="saveCar(val)"
                >
                  <svg
                    :fill="isSaved(val) ? '#FFF' : 'none'"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <span class="ml-1">SAVE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import CircleSvg from '@components/CircleSvg.vue';

export default {
  name: 'Funnel8',
  components: {
    CircleSvg,
  },
  props: {
    payload: {
      type: Object,
      default() {
        return {};
      },
    },
    classWidth: {
      type: String,
      default: 'lg:w-7/12',
    },
  },
  data() {
    return {
      drop: false,
      carImage: window.location.origin + '/images/funnels/step-6/car.jpg',
      noImage: window.location.origin + '/images/no-img.jpg',
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      recommended_cars: 'funnel/recommendedCars',
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },
  mounted() {
    this.initialize();
  },
  methods: {
    ...mapActions({
      getRecommendedCars: 'funnel/getRecommendedCars',
    }),
    async initialize() {
      this.isLoading = true;
      await this.getRecommendedCars(this.payload);
      this.isLoading = false;
    },
    isSaved(car) {
      if (this.authenticated) {
        return Object.keys(car.user_saved_cars).length;
      }
      return null;
    },
    async saveCar(car) {
      if (!this.authenticated) {
        this.$swal
          .fire({
            icon: 'warning',
            title: 'You need an account to save cars.',
            text: 'Do you want to create an account now?',
            showCancelButton: true,
            confirmButtonText: 'Yes, register now!',
            footer:
              '<a href="/login/true" class="text-blue-400 hover:underline">I have an account. Go to Login.</a>',
          })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$router.push({
                name: 'register',
                params: { redirect: true },
              });
            }
          });
      } else {
        const payload = {
          car_id: car.id,
        };

        await axios.post('/api/car/user/save', payload).then((res) => {
          // "1" means it is successfully deleted
          car.user_saved_cars = res.data === 1 ? [] : res.data;
        });
      }
    },
    currencyFormat(data) {
      return new Intl.NumberFormat('en-US').format(data);
    },
    closeDrop() {
      this.drop = false;
    },
  },
};
</script>
