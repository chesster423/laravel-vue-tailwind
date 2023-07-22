// general routes
const Home = () =>
  import(/* webpackChunkName: "js/HomePage" */ '@pages/Home.vue');
const About = () =>
  import(/* webpackChunkName: "js/AboutPage" */ '@pages/About.vue');
const Faqs = () =>
  import(/* webpackChunkName: "js/FAQSPage" */ '@pages/FAQS.vue');
const ContactUs = () =>
  import(/* webpackChunkName: "js/ContactUsPage" */ '@pages/ContactUs.vue');
const Terms = () =>
  import(/* webpackChunkName: "js/TermsPage" */ '@pages/Terms.vue');
const Dashboard = () =>
  import(/* webpackChunkName: "js/DashboardPage" */ '@pages/Dashboard.vue');
const Login = () =>
  import(/* webpackChunkName: "js/LoginPage" */ '@pages/Login.vue');
const ForgotPassword = () =>
  import(
    /* webpackChunkName: "js/ForgotPasswordPage" */ '@pages/ForgotPassword.vue'
  );
const ResetPassword = () =>
  import(
    /* webpackChunkName: "js/ResetPasswordPage" */ '@pages/ResetPassword.vue'
  );
const Register = () =>
  import(/* webpackChunkName: "js/RegisterPage" */ '@pages/Register.vue');
const MidRegister = () =>
  import(/* webpackChunkName: "js/MidRegisterPage" */ '@pages/MidRegister.vue');

const VerifyEmail = () =>
  import(/* webpackChunkName: "js/VerifyEmailPage" */ '@pages/VerifyEmail.vue');

const Settings = () =>
  import(
    /* webpackChunkName: "js/SettingsPage" */ '@pages/settings/Settings.vue'
  );
const Profile = () =>
  import(
    /* webpackChunkName: "js/ProfilePage" */ '@pages/settings/Profile.vue'
  );
const Password = () =>
  import(
    /* webpackChunkName: "js/PasswordPage" */ '@pages/settings/Password.vue'
  );
const Account = () =>
  import(
    /* webpackChunkName: "js/AccountPage" */ '@pages/settings/Account.vue'
  );
const NotFound = () =>
  import(/* webpackChunkName: "js/NotFoundPage" */ '@pages/NotFound.vue');

// Admin Layout------------------------------------------------------------------
const AdminLayout = () =>
  import(
    /* webpackChunkName: "js/AdminLayoutPage" */ '@/layouts/AdminLayout.vue'
  );
const Admin = () =>
  import(/* webpackChunkName: "js/AdminPage" */ '@/views/admin/Admin.vue');
const Users = () =>
  import(/* webpackChunkName: "js/UsersPage" */ '@/views/admin/Users.vue');
const Cars = () =>
  import(/* webpackChunkName: "js/CarsPage" */ '@/views/admin/Cars.vue');
const CreateCar = () =>
  import(
    /* webpackChunkName: "js/CreateCarPage" */ '@/views/admin/CreateCar.vue'
  );
const EditCar = () =>
  import(/* webpackChunkName: "js/EditCarPage" */ '@/views/admin/EditCar.vue');
const CarBrands = () =>
  import(
    /* webpackChunkName: "js/CarBrandsPage" */ '@/views/admin/CarBrands.vue'
  );
const Roles = () =>
  import(/* webpackChunkName: "js/RolesPage" */ '@/views/admin/Roles.vue');
const Permissions = () =>
  import(
    /* webpackChunkName: "js/PermissionsPage" */ '@/views/admin/Permissions.vue'
  );
const AppSettings = () =>
  import(
    /* webpackChunkName: "js/AppSettingsPage" */ '@/views/admin/AppSettings.vue'
  );

const Analytics = () =>
  import(
    /* webpackChunkName: "js/AnalyticsPage" */ '@/views/admin/Analytics.vue'
  );

// User Layout------------------------------------------------------------------
const UserLayout = () =>
  import(
    /* webpackChunkName: "js/UserLayoutPage" */ '@/layouts/UserLayout.vue'
  );
const History = () =>
  import(/* webpackChunkName: "js/HistoryPage" */ '@/views/user/History.vue');
const SavedCars = () =>
  import(
    /* webpackChunkName: "js/SavedCarsPage" */ '@/views/user/SavedCars.vue'
  );

const CarInfo = () =>
  import(
    /* webpackChunkName: "js/SavedCarsPage" */ '@/views/pages/CarInfo.vue'
  );

// Funnels------------------------------------------------------------------
const Funnel1 = () =>
  import(/* webpackChunkName: "js/Funnel1" */ '@pages/funnels/Funnel1.vue');
const Funnel2 = () =>
  import(/* webpackChunkName: "js/Funnel2" */ '@pages/funnels/Funnel2.vue');
const Funnel3 = () =>
  import(/* webpackChunkName: "js/Funnel3" */ '@pages/funnels/Funnel3.vue');
const Funnel4 = () =>
  import(/* webpackChunkName: "js/Funnel4" */ '@pages/funnels/Funnel4.vue');
const Funnel5 = () =>
  import(/* webpackChunkName: "js/Funnel5" */ '@pages/funnels/Funnel5.vue');
const Funnel6 = () =>
  import(/* webpackChunkName: "js/Funnel6" */ '@pages/funnels/Funnel6.vue');
const Funnel7 = () =>
  import(/* webpackChunkName: "js/Funnel7" */ '@pages/funnels/Funnel7.vue');
const Funnel8 = () =>
  import(/* webpackChunkName: "js/Funnel8" */ '@pages/funnels/Funnel8.vue');
// End Funnels---------------------------------------------------------------

// const PhpInfo = () =>
// import(/* webpackChunkName: "js/PhpInfoPage" */ '@/views/admin/PhpInfo.vue');
import { defineAsyncComponent } from 'vue';

import auth from '@/middleware/auth';
import guest from '@/middleware/guest';
import roleAdmin from '@/middleware/roleAdmin';
import roleSuperAdmin from '@/middleware/roleSuperAdmin';
import roleUser from '@/middleware/roleUser';
import path from 'path';

export default [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
  {
    path: '/faqs',
    component: Faqs,
    name: 'faqs',
  },
  {
    path: '/contact-us',
    component: ContactUs,
    name: 'contact-us',
  },
  {
    path: '/terms',
    component: Terms,
    name: 'terms',
  },
  {
    path: '/funnels',
    name: 'step-1',
    component: Funnel1,
  },
  {
    path: '/funnels/step-2',
    name: 'step-2',
    component: Funnel2,
  },
  {
    path: '/funnels/step-3',
    name: 'step-3',
    component: Funnel3,
  },
  {
    path: '/funnels/step-4',
    name: 'step-4',
    component: Funnel4,
  },
  {
    path: '/funnels/step-5',
    name: 'step-5',
    component: Funnel5,
  },
  {
    path: '/funnels/step-6',
    name: 'step-6',
    component: Funnel6,
  },
  {
    path: '/funnels/step-7',
    name: 'step-7',
    component: Funnel7,
  },
  {
    path: '/funnels/step-8',
    name: 'step-8',
    component: Funnel8,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'user',
        component: History,
      },
      {
        path: 'history',
        name: 'history',
        component: History,
      },
      {
        path: 'saved-cars',
        name: 'saved-cars',
        component: SavedCars,
      },
      {
        path: 'car-info/:id',
        name: 'car-info',
        component: CarInfo,
      },
    ],
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: Admin,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      },
      {
        path: 'car-brands',
        name: 'car-brands',
        component: CarBrands,
      },
      {
        path: 'cars',
        name: 'cars',
        component: Cars,
      },
      {
        path: 'cars/create',
        name: 'create-car',
        component: CreateCar,
      },
      {
        path: 'cars/edit/:id',
        name: 'edit-car',
        component: EditCar,
      },
      {
        path: 'roles',
        name: 'roles',
        component: Roles,
      },
      {
        path: 'permissions',
        name: 'permissions',
        component: Permissions,
      },
      {
        path: 'phpinfo',
        name: 'phpinfo',
        component: defineAsyncComponent(() =>
          import('@/views/admin/PhpInfo.vue'),
        ),
      },
      {
        path: 'app-settings',
        name: 'app-settings',
        component: AppSettings,
      },
      {
        path: 'analytics',
        name: 'analytics',
        component: Analytics,
      },
    ],
    meta: {
      middleware: [roleAdmin],
    },
  },
  {
    path: '/login/:redirect?',
    component: Login,
    name: 'login',
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: 'forgot-password',
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/reset-password/:token',
    props: (route) => ({
      token: route.params.token,
      email: route.query.email,
    }),
    component: ResetPassword,
    name: 'reset-password',
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/register/:redirect?',
    component: Register,
    name: 'register',
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/mid-register',
    component: MidRegister,
    name: 'mid-register',
    meta: {
      middleware: [guest],
    },
  },
  {
    path: '/verify-email/:id/:hash',
    props: (route) => ({
      id: route.params.id,
      hash: route.params.hash,
    }),
    component: VerifyEmail,
    name: 'verify-email',
  },
  {
    path: '/settings',
    component: Settings,
    redirect: {
      name: 'account',
    },
    name: 'settings',
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: 'account',
        component: Account,
        name: 'account',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'profile',
        component: Profile,
        name: 'profile',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'password',
        component: Password,
        name: 'password',
        meta: {
          middleware: [auth],
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
  },
];
