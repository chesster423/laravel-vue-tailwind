<template>
  <div class="overflow-x-scroll rounded-lg shadow" style="width: 100%">
    <table class="min-w-full leading-normal" aria-describedby="Users Table">
      <thead>
        <tr
          class="border-b-2 border-gray-300 bg-gray-200 text-gray-600 dark:border-gray-500 dark:bg-slate-900 dark:text-gray-200"
        >
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            User
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Email
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Role(s)
          </th>
          <th
            class="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Created at
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Status
          </th>
          <th
            class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody v-if="dataReady">
        <template v-for="user in users" :key="user.id">
          <UsersTableRow
            :user="user"
            :data-ready="dataReady"
            :available-roles="availableRoles"
            :lock-jiggled="lockJiggled"
            @confirm-un-verify-user="confirmUnVerifyUser"
            @confirm-verify-user="confirmVerifyUser"
            @delete-user="deleteUser"
            @edit-user="editUser"
            @send-user-verification="sendUserVerification"
            @impersonate-user-triggered="impersonateUserTriggered"
          />
        </template>
      </tbody>
      <tbody v-if="!dataReady">
        <tr
          class="bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100"
        >
          <td colspan="6" class="pb-10 pt-10 text-center">
            <span class="fa fa-circle-notch fa-spin fa-5x text-gray-400" />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="dataReady && users && users.length >= 1"
      class="xs:flex-row xs:justify-between flex flex-col items-center px-3 py-3 dark:bg-slate-700"
    >
      <Pagination :pagination="pagination" :offset="4" @paginate="getUsers" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@components/Pagination.vue';
import UsersTableRow from '@components/admin/UsersTableRow.vue';

export default {
  name: 'UsersTable',
  components: {
    Pagination,
    UsersTableRow,
  },
  props: {
    dataReady: { type: Boolean, default: false },
    lockJiggled: { type: Boolean, default: false },
    users: {
      type: Array,
      default() {
        return [];
      },
    },
    pagination: {
      type: Object,
      default() {
        return {};
      },
    },
    availableRoles: { type: Array, default: null },
  },
  setup() {
    return {};
  },
  data() {
    return {
      offset: 4,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
      roles: 'auth/roles',
    }),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {
    ...mapActions({
      popToast: 'toast/popToast',
    }),
    getUsers(data) {
      this.$emit('getUsers', data);
    },
    confirmUnVerifyUser(value) {
      this.$emit('confirmUnVerifyUser', value);
    },
    confirmVerifyUser(value) {
      this.$emit('confirmVerifyUser', value);
    },
    deleteUser(value) {
      this.$emit('deleteUser', value);
    },
    editUser(value) {
      this.$emit('editUser', value);
    },
    sendUserVerification(value) {
      this.$emit('sendUserVerification', value);
    },
    impersonateUserTriggered(value) {
      this.$emit('impersonateUserTriggered', value);
    },
  },
};
</script>
