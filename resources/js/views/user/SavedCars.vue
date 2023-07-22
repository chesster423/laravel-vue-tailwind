<template>
  <div class="lg:-p-0 container mx-auto p-5">
    <div class="mt-5">
      <h1 class="mb-4 text-2xl font-bold">Saved Matches</h1>
    </div>

    <div>
      <p v-if="cars.length == 0" class="mt-10 text-center">
        <span>No data available</span><br />
        <router-link
          :to="{ name: 'step-1' }"
          class="mt-5 block text-blue-500 hover:text-blue-300"
        >
          Start getting your carsona now!
        </router-link>
      </p>
    </div>

    <div class="grid gap-4 lg:grid-cols-4">
      <div
        v-for="(val, key) in cars"
        :key="key"
        class="border-1 cursor-pointer rounded border"
      >
        <button class="w-full p-2" @click="removeCar(val.car.id, key)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="float-right h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <router-link
          v-if="authenticated"
          :to="{ name: 'car-info', params: { id: val.car.id } }"
        >
          <img
            :src="val.car.images[0] ? val.car.images[0].image_url : noImage"
            class="mx-auto max-h-48"
          />
        </router-link>

        <div class="p-5">
          <label class="text-lg font-bold">{{ val.car.model }}</label>
          <div class="mb-2 mt-2 flex items-center">
            <div class="icon-engine"></div>
            <div class="ml-4">
              <p class="text-xs leading-4 text-slate-400">Engine</p>
              <p class="text-sm font-medium">
                {{ engineValue(val.car) ?? 'Not specified' }}
              </p>
            </div>
          </div>

          <div class="mb-2 flex items-center">
            <div class="icon-drive-type"></div>
            <div class="ml-4">
              <p class="text-xs leading-4 text-slate-400">Drive Type</p>
              <p class="text-sm font-medium">
                {{ val.car.drive_train_type ?? 'Not specified' }}
              </p>
            </div>
          </div>

          <div class="mb-2 flex items-center">
            <div class="icon-body-type"></div>
            <div class="ml-4">
              <p class="text-xs leading-4 text-slate-400">Body Type</p>
              <p class="text-sm font-medium">
                {{ val.car.engine ?? 'Not specified' }}
              </p>
            </div>
          </div>

          <div class="mb-2 flex items-center">
            <div class="icon-fuel-efficiency"></div>
            <div class="ml-4">
              <p class="text-xs leading-4 text-slate-400">Fuel Efficiency</p>
              <p class="text-sm font-medium">
                {{ val.car.fuel_consumption_combined ?? 'Not specified' }}
              </p>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2">
            <a
              v-if="val.car.dealership_url"
              :href="val.car.dealership_url"
              target="_blank"
            >
              <button
                class="funnel-button-rounded funnel-bg-blue rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100"
                style="width: 100px"
              >
                View Listing
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { track } from '@services/analytics';
import axios from 'axios';

export default {
  name: 'SavedCars',
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      cars: [],
      rendered: false,
      noImage: window.location.origin + '/images/no-img.jpg',
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
  },
  watch: {},
  created() {},
  mounted() {
    this.getSavedCars();
  },
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    track,
    async getSavedCars() {
      this.rendered = false;
      await axios.get('../api/car/user').then((res) => {
        this.rendered = true;
        this.cars = res.data;
      });
    },
    engineValue(data) {
      const induction = data.engine_induction ?? '';
      return (
        data.engine_cylinders + 'cyl' + ' ' + data.engine_size + ' ' + induction
      );
    },
    removeCar(id, index) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: 'This car will be removed from the list',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, remove it!',
        })
        .then((result) => {
          if (result.isConfirmed) {
            const payload = {
              car_id: id,
            };

            axios.post('/api/car/user/save', payload).then((res) => {
              // "1" means it is successfully deleted
              if (res.data === 1) {
                this.cars.splice(index, 1);
              }
            });
          }
        });
    },
  },
};
</script>

<style scoped>
:deep() .text-white {
  color: #ffffff !important;
}
</style>
<style lang="scss" scoped></style>
