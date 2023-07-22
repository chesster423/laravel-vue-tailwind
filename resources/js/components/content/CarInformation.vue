<template>
  <div class="mx-auto mt-5 max-w-screen-md text-gray-900"></div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  props: {
    showSmLogin: { type: Boolean, default: true },
  },
  data() {
    return {
      id: this.$route.params.id,
      car: {},
    };
  },
  computed: {},
  mounted() {
    this.findCar();
  },
  methods: {
    async findCar() {
      await axios.get('../../../api/car/' + this.id).then((response) => {
        this.car = response.data;
      });
    },
  },
};
</script>
