import Vue from 'vue';
import VueGtm from '@gtm-support/vue2-gtm';
import router from '@/router';

const GTM_ENVIRONMENTS = ['develop', 'production'];

// if (GTM_ENVIRONMENTS.includes(process.env.VUE_APP_ARS_ENV || '')) {
  Vue.use(
    VueGtm,
    {
      id: 'GTM-WXV39P8',
      vueRouter: router
    },
    router
  );
// }
