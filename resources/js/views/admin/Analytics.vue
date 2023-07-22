<template>
  <div id="admin" class="bg-white p-3 dark:bg-slate-800 dark:text-gray-200">
    <div
      class="block gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 block text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Funnels
      </h5>

      <div class="mb-5 block flex items-center">
        <VueDatePicker
          v-model="selectedDates"
          class="max-w-sm"
          range
          multi-calendars
          :enable-time-picker="false"
          @update:model-value="getFunnelData"
        />
      </div>

      <div class="gap-5 lg:grid lg:grid-cols-2">
        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Age
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
          </p>
        </a>
        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Personalities
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Priorities
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Activities
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Fuel Type
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Vehicle Type
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href="#"
          class="mb-5 block max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:mb-0"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Spending Range
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

export default {
  name: 'Analytics',
  components: {
    VueDatePicker,
    Bar,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      loading: false,
      selectedDates: '',
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
  },
  mounted() {
    this.initDateRange();
    console.log();
    this.getDashboardData();
  },
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    initDateRange() {
      const endDate = new Date();
      const startDate = new Date(new Date().setDate(endDate.getDate() - 30));
      this.selectedDates = [startDate, endDate];
    },
    async getDashboardData() {
      this.loading = true;

      const payload = {
        date_range: this.selectedDates,
      };

      await axios.post('../api/analytics/funnels', payload).then((response) => {
        console.log(response);
      });
      this.dataReady = true;
    },
    selectDate() {},
    getFunnelData() {
      console.log(this.selectedDates);
    },
  },
};
</script>

<style scoped>
.fa-xs {
  font-size: 0.75em !important;
}
</style>
<style lang="scss" scoped></style>
