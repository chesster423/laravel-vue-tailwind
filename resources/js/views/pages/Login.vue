<template>
  <app-login></app-login>
</template>
<script>
import AppLogin from '@components/auth/AppLogin.vue';

export default {
  name: 'Login',
  components: {
    AppLogin,
  },
  props: {
    showSmLogin: { type: Boolean, default: true },
  },
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
