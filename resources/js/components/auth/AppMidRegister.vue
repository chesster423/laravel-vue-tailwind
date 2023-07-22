<template>
  <div class="mx-auto max-w-screen-md text-gray-900">
    <div class="flex justify-center">
      <div class="flex-1">
        <div class="mx-auto p-5 lg:w-4/6 lg:p-0">
          <div class="bg-white p-4 text-center dark:bg-slate-800">
            <errors
              v-if="errors && useInlineMessage"
              :content="errors"
              type="error"
              @close="errors = null"
            />

            <h1 class="mb-4 text-lg font-bold lg:text-2xl">
              Your matches are one step away!
            </h1>
            <p
              class="mx-auto text-justify lg:w-8700"
              style="letter-spacing: -1px; line-height: 20px"
            >
              Carsona is helping thousands of people find the right car for
              their lifestyles. Join our growing community and take part in
              shaping our platform.
              <span class="font-bold"
                >We will email your results to you, we don’t send spam
                emails.</span
              >
            </p>

            <form
              class="lg:w:12/12 mx-auto mx-auto mb-4 w-full lg:px-8"
              @submit.prevent="register"
            >
              <div class="my-1 w-full py-2">
                <input
                  v-model="funnel_data.email"
                  type="email"
                  name="email"
                  :class="{ 'border-red-500': errors && errors.email }"
                  :disabled="loading"
                  class="w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-3"
                  placeholder="Email Address"
                />
              </div>

              <div class="my-1 w-full rounded">
                <div class="mt-3 w-full">
                  <AppButton
                    :loading="loading"
                    :disabled="loading"
                    :text="loading ? 'Register' : 'Register'"
                    btn-class="w-full rounded-full bg-black mb-5 text-white"
                    type="submit"
                    @click="setData()"
                  >
                    <template #text>
                      <CircleSvg v-if="loading" class="mr-2 h-6 w-6" />
                      <span v-if="!loading">Continue</span>
                    </template>
                  </AppButton>

                  <br />

                  <router-link
                    :to="{ name: 'step-8' }"
                    class="mb-4 block text-sm font-bold text-blue-500 hover:text-blue-300"
                  >
                    Skip for now
                  </router-link>

                  <br />
                  <span class="text-sm">
                    <span
                      class="mr-1 cursor-default text-gray-700 dark:text-gray-200"
                    >
                      Already a member?
                    </span>
                    <router-link
                      :to="{ path: '/login/' + isFunnelPage }"
                      class="text-sm font-bold text-blue-500 hover:text-blue-300"
                    >
                      Sign In
                    </router-link>
                  </span>
                </div>
              </div>
            </form>

            <div v-if="socialLoginsEnabled" class="mt-5">
              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300 lg:px-8"
              >
                <p class="mx-4 mb-0 text-center font-semibold">Or</p>
              </div>
              <!-- <h3 class="mb-3 font-bold text-gray-700">Register with</h3> -->
              <SocialiteLogins />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CircleSvg from '@components/CircleSvg.vue';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline';
import Errors from '@components/Errors.vue';
import SocialiteLogins from '@components/auth/SocialiteLoginsV2.vue';
import { validateEmail } from '@services/common';
import router from '@/router';

export default {
  components: {
    ArrowRightOnRectangleIcon,
    CircleSvg,
    Errors,
    SocialiteLogins,
  },
  props: {
    showSmLogin: { type: Boolean, default: true },
    isFunnelPage: { type: Boolean, default: false },
  },
  data() {
    return {
      errors: null,
      loading: false,
      useInlineMessage: false,
    };
  },
  computed: {
    ...mapGetters({
      logins: 'auth/logins',
      funnel_data: 'funnel/getFunnelData',
    }),
    socialLoginsEnabled() {
      if (!this.showSmLogin) {
        return false;
      }
      const a = Object.values(this.logins);
      const b = a.find((v) => v == '1');
      if (b) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions({
      registerApp: 'auth/register',
      popToast: 'toast/popToast',
      appLogin: 'auth/login',
      setFunnelData: 'funnel/setFunnelData',
    }),
    setData() {
      const obj = {
        email: this.funnel_data.email,
      };

      if (validateEmail(obj.email)) {
        this.setFunnelData(obj);
        router.push({ name: 'step-8' });
      } else {
        this.popToast({
          message: 'Invalid email address!',
          timer: 5000,
          icon: 'warning',
        });
      }
    },
  },
};
</script>
