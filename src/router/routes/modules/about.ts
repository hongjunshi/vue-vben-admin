import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  orderNo: 100000,
  icon: 'simple-icons:about-dot-me',
  meta: {
    hideChildrenInMenu: true,
    title: t('routes.dashboard.about'),
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      orderNo: 100000,
      icon: 'simple-icons:about-dot-me',
      meta: {
        title: t('routes.dashboard.about'),
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
