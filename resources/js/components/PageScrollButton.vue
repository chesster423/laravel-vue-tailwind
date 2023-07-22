<template>
  <div @scroll="onScroll()">
    <button
      v-if="!isVisible"
      fab
      fixed
      bottom
      right
      class="page-scroll-button cursor-pointer text-blue-400"
      @click="toBottom"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <button
      v-else
      fab
      fixed
      bottom
      right
      class="page-scroll-button cursor-pointer text-blue-400"
      @click="toTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import scrollIntoView from 'scroll-into-view-if-needed';

export default {
  name: 'PageScrollButton',
  components: {},
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {},
  methods: {
    onScroll() {
      this.isVisible = window.scrollY > 50;
    },
    toTop() {
      this.isVisible = false;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    toBottom() {
      this.isVisible = true;
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.page-scroll-button {
  position: fixed;
  bottom: 7%;
  right: 6%;
  width: 80px;
  height: 80px;
  opacity: 0.5;
  z-index: 9;
}

.page-scroll-button:hover {
  opacity: 1;
  transition: 1s;
}
</style>
