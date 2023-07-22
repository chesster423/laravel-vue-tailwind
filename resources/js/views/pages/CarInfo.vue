<template>
  <div class="mx-auto mt-5 max-w-screen-md text-gray-900">
    <car-information></car-information>
  </div>
</template>

<script>
import CarInformation from '@components/content/CarInformation.vue';

export default {
  components: {
    CarInformation,
  },
  props: {
    showSmLogin: { type: Boolean, default: true },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
