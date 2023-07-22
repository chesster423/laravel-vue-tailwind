<template>
  <div
    id="car-brands"
    class="bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
  >
    <nav class="mb-6 text-sm font-semibold" aria-label="Breadcrumb">
      <ol class="inline-flex list-none p-0">
        <li class="flex items-center">
          <router-link
            v-if="authenticated && roles && (roles.admin || roles.superAdmin)"
            v-slot="{ isActive }"
            :to="{ name: 'admin' }"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          >
            Admin
          </router-link>
        </li>

        <li class="flex items-center">
          <ChevronRightIcon class="ml-2 mr-2 mt-0 h-4 w-4" />
        </li>
        <li class="flex items-center">
          <router-link
            v-if="authenticated && roles && (roles.admin || roles.superAdmin)"
            v-slot="{ isActive }"
            :to="{ name: 'cars' }"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          >
            <span
              :class="[
                isActive &&
                  'cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500',
              ]"
            >
              Cars
            </span>
          </router-link>
        </li>
      </ol>
    </nav>

    <div class="mb-2 flex items-center gap-5">
      <input
        id="model"
        v-model="search"
        type="text"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search car"
        required
      />

      <router-link
        v-if="authenticated && roles && roles.superAdmin"
        v-slot="{ isActive }"
        :to="{ name: 'create-car' }"
      >
        <AppButton
          v-tippy="'Create Car'"
          class="float-right px-2 py-2 text-sm font-medium"
        >
          <template #text>
            <PlusIcon v-if="dataReady" class="ml-2 mr-2 mt-0 h-4 w-4" />
            <CircleSvg v-if="!dataReady" class="ml-2 mr-2 mt-0 h-4 w-4" />
            <span class="sr-only">Create New Car</span>
          </template>
        </AppButton>
      </router-link>
    </div>

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
            Model
          </th>
          <th
            class="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Body Type
          </th>
          <th
            class="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Year
          </th>

          <th
            class="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Is Active
          </th>

          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody v-if="dataReady">
        <tr v-for="(val, key) in filteredList" :key="key">
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ val.brand.brand_name }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ val.model }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ val.vehicle_type.vehicle_type_name }}
          </td>
          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            {{ val.model_year }}
          </td>

          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            <span @click="toggleCarIsActive(val)">
              <Switch
                v-model="val.is_active"
                :class="val.is_active ? 'bg-green-400' : 'bg-gray-200'"
                class="relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span class="sr-only">Toggle Theme</span>
                <span
                  aria-hidden="true"
                  :class="
                    val.is_active
                      ? 'translate-x-5 bg-white'
                      : 'translate-x-0 bg-white'
                  "
                  class="pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </span>
          </td>

          <td
            class="border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500"
          >
            <router-link
              v-if="authenticated && roles && roles.superAdmin"
              v-slot="{ isActive }"
              :to="{ name: 'edit-car', params: { id: val.id } }"
            >
              <AppButton
                warning
                :loading="!dataReady"
                class="mr-2 px-1 py-1 text-sm"
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
            </router-link>
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

    <div v-if="dataReady && cars.length == 0" class="mt-5 text-center">
      No data found
    </div>
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
import { Switch } from '@headlessui/vue';

export default {
  name: 'Users',
  components: {
    ChevronRightIcon,
    PlusIcon,
    CircleSvg,
    PencilSquareIcon,
    Switch,// eslint-disable-line
  },
  props: {
    showingForm: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      cars: [],
      filters: {},
      search: '',
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
    filteredList() {
      return this.cars.filter((car) => {
        return car.model.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.getCars();
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
    async getCars() {
      this.dataReady = false;
      await axios
        .get('../api/cars', this.filters)
        .then((response) => {
          if (response.status === 200) {
            this.cars = response.data;
            this.dataReady = true;
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
    parseDisplayDate(date: string) {
      return moment(date).format('MMM Do YYYY, h:mma');
    },
    async toggleCarIsActive(data) {
      const id = data.id;

      const payload = {
        car_brand_id: data.brand.id,
        model: data.model,
        vehicle_type_id: data.vehicle_type.id,
        is_active: data.is_active,
      };

      await axios
        .post('../../api/car/' + id, payload)
        .then((response) => {
          this.popToast({
            message: 'Update successful!',
            timer: 5000,
            icon: 'success',
          });
        })
        .catch((error) => {
          this.popToast({
            message: error.response.data.message,
            timer: 5000,
            icon: 'error',
          });
        });
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
