<template>
  <div class="mx-auto mt-5 max-w-screen-md text-gray-900">
    <app-mid-register></app-mid-register>
  </div>
</template>

<script>
import AppMidRegister from '@components/auth/AppMidRegister.vue';

export default {
  components: {
    AppMidRegister,
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
