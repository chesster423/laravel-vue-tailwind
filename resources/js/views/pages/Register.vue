<template>
  <div class="mx-auto mt-5 max-w-screen-md text-gray-900">
    <app-register></app-register>
  </div>
</template>

<script>
import AppRegister from '@components/auth/AppRegister.vue';

export default {
  components: {
    AppRegister,
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
