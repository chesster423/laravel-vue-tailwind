<template>
  <div id="contactUs" class="mx-auto">
    <section class="banner-section">
      <div controls class="banner">
        <video autoplay muted playsinline>
          <source :src="video" type="video/mp4" />
        </video>

        <div class="contact-form-section container mx-auto">
          <div class="mx-auto lg:w-4/6">
            <div class="text-center">
              <h1 class="text-4xl font-bold">CONTACT US</h1>
            </div>

            <div class="mt-8 text-center lg:float-right lg:w-2/6">
              <h2 class="mb-8 text-xl font-medium text-white">
                HOW CAN WE HELP YOU?
              </h2>
              <div class="grid grid-flow-row gap-5 rounded-lg bg-white p-10">
                <input
                  id="model"
                  v-model="contact.full_name"
                  type="text"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Full Name"
                  required
                />

                <input
                  id="model"
                  v-model="contact.email"
                  type="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Email"
                  required
                />

                <input
                  id="model"
                  v-model="contact.contact_number"
                  type="text"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Phone Number"
                  required
                />

                <textarea
                  id="overview"
                  v-model="contact.details"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Tell Us About You"
                ></textarea>

                <button class="rounded bg-black p-5 text-white">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-footer footer-class="bg-black pt-10"></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import Faqs from '@components/content/FAQS.vue';
import AppFooter from '@components/AppFooter.vue';

export default {
  name: 'About',
  components: {
    ChatBubbleLeftEllipsisIcon,
    Faqs,
    AppFooter,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      video: window.location.origin + '/videos/contact-us.mp4',
      contact: {
        full_name: null,
        email: null,
        contact_number: null,
        details: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },
};
</script>
