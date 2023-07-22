<template>
  <div
    id="faq"
    class="bg-dark mx-auto p-3 text-white dark:bg-slate-800"
    style="padding-bottom: 130px"
  >
    <h1 class="text-center">FAQS</h1>

    <app-accordion
      class="mb-5 border-t-2 border-slate-800 pt-5"
      component-name="faqs"
    >
      <template #title>
        <span class="faq-title text-xl font-semibold"
          >What is the Carsona vision?</span
        >
      </template>
      <template #content>
        <div class="mb-6 mt-5">
          <div class="ml-4">
            <p class="mb-4">
              The Carsona vision is to create a revolutionary vehicle buying
              experience that is seamless, convenient, and tailored to
              individual needs.
            </p>
            <p>
              We aim to transform the traditional car-buying process by
              leveraging technology, partnering with automotive industry
              leaders, and providing personalised solutions.
            </p>
          </div>
        </div>
      </template>
    </app-accordion>

    <app-accordion
      class="mb-5 border-t-2 border-slate-800 pt-5"
      component-name="faqs"
    >
      <template #title>
        <span class="faq-title text-xl font-semibold"
          >What is find your Carsona?</span
        >
      </template>
      <template #content>
        <div class="mb-6 mt-5">
          <div class="ml-4">
            <p class="mb-4">
              'Find your Carsona' is our innovative vehicle search feature
              designed to help you discover the perfect vehicle that matches
              your preferences and requirements.
            </p>
            <p>
              By going through our experience, our platform utilises advanced
              algorithms to generate personalised recommendations tailored
              specifically to you.
            </p>
          </div>
        </div>
      </template>
    </app-accordion>

    <app-accordion
      class="mb-5 border-t-2 border-slate-800 pt-5"
      component-name="faqs"
    >
      <template #title>
        <span class="faq-title text-xl font-semibold"
          >Why do we value Transparency?</span
        >
      </template>
      <template #content>
        <div class="mb-6 mt-5">
          <div class="ml-4">
            <p class="mb-4">
              Over the past year we have conducted extensive market research in
              Western Australia. We engaged with automotive industry leaders,
              scientific, tech and business experts and most importantly you,
              our customers. We strive to provide clear and accurate information
              about our services, pricing, and processes, ensuring that you have
              all the information you need to make informed decisions.
            </p>
          </div>
        </div>
      </template>
    </app-accordion>

    <app-accordion
      class="mb-5 border-t-2 border-slate-800 pt-5"
      component-name="faqs"
    >
      <template #title>
        <span class="faq-title text-xl font-semibold"
          >How do I get started?</span
        >
      </template>
      <template #content>
        <div class="mb-6 mt-5">
          <div class="ml-4">
            <p class="mb-4">
              Over the next few months we will continue to add more features and
              introduce new initiatives that could have a positive impact on
              your buying experience.
            </p>
            <p>
              We encourage you to follow us on our socials and spread the word.
              Keep and eye out for our latest updates and we continue to bring
              the Carsona vision to life.
            </p>
          </div>
        </div>
      </template>
    </app-accordion>
  </div>
</template>

<script lang="ts">
import AppAccordion from '@components/AppAccordion.vue';

export default {
  name: 'FaqsComponent',
  components: {
    AppAccordion,
  },
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {},
};
</script>

<style scoped>
#faq h1 {
  color: #ffffff;
  margin-bottom: 12px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
}
#faq .faq-title {
  font-family: 'Montserrat';
  color: #ffffff;
  font-weight: 700;
  line-height: 1.1;
  font-size: 14px;
  margin-bottom: 4px;
  padding-right: 0px;
  padding-left: 0px;
  margin-top: 4px;
}

#faq p {
  font-size: 12px;
}
</style>
