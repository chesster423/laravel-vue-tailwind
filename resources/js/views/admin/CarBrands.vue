<template>
  <div
    id="car-brands"
    class="bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
  >
    <AppButton
      v-tippy="'Create Car Brand'"
      :disabled="showCreateCarBrandsForm || !dataReady"
      class="float-right mb-2 px-2 py-2 text-sm font-medium"
      @click="showModalForm()"
    >
      <template #text>
        <PlusIcon v-if="dataReady" class="ml-2 mr-2 mt-0 h-4 w-4" />
        <CircleSvg v-if="!dataReady" class="ml-2 mr-2 mt-0 h-4 w-4" />
        <span class="sr-only">Create New User</span>
      </template>
    </AppButton>

    <table
      class="min-w-full leading-normal"
      aria-describedby="Car Brands Table"
    >
      <thead>
        <tr
          class="border-b-2 border-gray-300 bg-gray-200 text-gray-600 dark:border-gray-500 dark:bg-slate-900 dark:text-gray-200"
        >
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Brand Name
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Date Created
          </th>
          <th
            class="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Last Update
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody v-if="dataReady">
        <tr v-for="(val, key) in car_brands" :key="key">
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ val.brand_name }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ parseDisplayDate(val.created_at) }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ parseDisplayDate(val.updated_at) }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            <AppButton
              warning
              :disabled="locked"
              :loading="!dataReady"
              class="mr-2 px-1 py-1 text-sm"
              @click="
                editCarBrand(val);
                showModalForm();
              "
            >
              <template #text>
                <PencilSquareIcon
                  v-if="dataReady"
                  class="ml-2 mr-2 mt-0 h-4 w-4"
                />
                <CircleSvg v-if="!dataReady" class="mr-2 h-3 w-3" />
                <span class="sr-only">Edit Car Brand</span>
              </template>
            </AppButton>
          </td>
        </tr>
      </tbody>
      <tbody v-if="!dataReady">
        <tr
          class="bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100"
        >
          <td colspan="6" class="pb-10 pt-10 text-center">
            <span class="fa fa-circle-notch fa-spin fa-5x text-gray-400" />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="dataReady && car_brands.length == 0" class="mt-5 text-center">
      No data found
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
    >
      <div class="relative mx-auto my-6 w-auto">
        <div
          class="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-slate-600"
        >
          <div v-if="!carBrandData.id" class="p-5">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="username"
            >
              Brand Name
            </label>
            <input
              v-model="brandName"
              class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              placeholder="Enter brand name"
            />
          </div>

          <div v-if="carBrandData.id" class="p-5">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="username"
            >
              Old Brand Name
            </label>
            <input
              :value="brandName"
              class="focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              placeholder="Enter new brand name"
              :disabled="true"
            />

            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="username"
            >
              New Brand Name
            </label>
            <input
              v-model="carBrandData.brand_name"
              class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              placeholder="Enter new brand name"
            />
          </div>

          <div
            class="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6"
          >
            <button
              class="mb-1 mr-1 rounded border border-solid border-red-500 bg-transparent px-6 py-3 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-red-500 hover:text-white focus:outline-none active:bg-red-600"
              type="button"
              @click="closeModal()"
            >
              Close
            </button>
            <button
              v-if="!carBrandData.id"
              class="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
              type="button"
              @click="createCarBrand()"
            >
              Confirm
            </button>

            <button
              v-if="carBrandData.id"
              class="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
              type="button"
              @click="updateCarBrand()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </div>
</template>

<script lang="ts">
import {
  ChevronRightIcon,
  PlusIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/outline';
import CircleSvg from '@components/CircleSvg.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Users',
  components: {
    ChevronRightIcon,
    PlusIcon,
    CircleSvg,
    PencilSquareIcon,
  },
  props: {
    showingForm: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
  data() {
    return {
      car_brands: [],
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      showCreateCarBrandsForm: false,
      carBrandData: {},
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
    this.getCarBrands();
  },
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    showModalForm() {
      this.showModal = true;
    },
    async createCarBrand() {
      await axios
        .post('../api/car_brands', { brand_name: this.brandName })
        .then((response) => {
          if (response.status === 200) {
            this.showModal = false;
            this.brandName = null;
            this.popToast({
              message: 'Car brand added!',
              timer: 5000,
              icon: 'success',
            });
            this.getCarBrands();
          }
        })
        .catch((error) => {
          this.popToast({
            message: error.response.data.message,
            timer: 5000,
            icon: 'error',
          });
        });
    },
    async updateCarBrand() {
      await axios
        .post('../api/update_car_brand', this.carBrandData)
        .then((response) => {
          this.popToast({
            message: 'Car brand saved!',
            timer: 5000,
            icon: 'success',
          });
          this.carBrandData = {};
          this.brandName = null;
          this.showModal = false;
        })
        .catch((error) => {
          this.popToast({
            message: error.response.data.message,
            timer: 5000,
            icon: 'error',
          });
        });
    },
    closeModal() {
      this.carBrandData = {};
      this.brandName = null;
      this.showModal = false;
    },
    async getCarBrands() {
      this.dataReady = false;
      await axios.get('../api/car_brands').then((response) => {
        this.dataReady = true;
        this.car_brands = response.data;
      });
    },
    parseDisplayDate(date: string) {
      return moment(date).format('MMM Do YYYY, h:mma');
    },
    editCarBrand(data: object) {
      this.carBrandData = data;
      this.brandName = data.brand_name;
    },
  },
};
</script>

<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus,
option:focus {
  outline: none !important;
  border: none !important;
}
</style>
<style lang="scss" scoped></style>
