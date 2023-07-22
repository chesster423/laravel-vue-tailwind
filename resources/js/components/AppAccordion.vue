<template>
  <div>
    <button
      class="flex items-center space-x-3"
      :aria-expanded="isOpen"
      @click="toggleAccordion()"
    >
      <slot name="title" />
      <svg
        class="w-3 transform transition-all duration-200"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-show="isOpen">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  mounted() {
    this.setOpenStatus();
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    setOpenStatus() {
      if (this.componentName == 'faqs') {
        this.isOpen = false;
      }
    },
  },
};
</script>
