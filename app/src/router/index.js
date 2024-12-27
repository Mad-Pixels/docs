import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/config'
import { createRouter, createWebHistory } from 'vue-router'

import LocaleWrapper from '../components/LocaleWrapper.vue'

import ContentMain from '@/views/MainView.vue'
import AppLingoBetaTesting from '@/views/AppLingoBetaTesting.vue'
import ContentContribute from '@/content/ru/ContentContribute.vue'

const redirectRoutes = [
  {
    path: '/',
    redirect: `/${DEFAULT_LOCALE}`
  },
  {
    path: '/contribute',
    redirect: `/${DEFAULT_LOCALE}`
  },
  {
    path: '/applingo/betatesting',
    redirect: `/${DEFAULT_LOCALE}`
  }
]

const routes = [
  ...redirectRoutes, 
  {
    path: '/:locale',
    component: LocaleWrapper,
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale
      if (!SUPPORTED_LOCALES.map(l => l.code).includes(locale)) {
        next(`/${DEFAULT_LOCALE}`)
        return
      }
      next()
    },
    children: [
      {
        path: '',
        name: 'main',
        component: ContentMain,
        meta: {
          title: 'Main'
        }
      },
      {
        path: 'contribute',
        name: 'contribute',
        component: ContentContribute,
        meta: {
          title: 'Contribute'
        }
      },
      {
        path: 'applingo/betatesting',
        name: 'betatesting',
        component: AppLingoBetaTesting,
        meta: {
          title: 'AppLingo BetaTesting'
        }
      },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue'),
        meta: {
          title: '404'
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | MadPixels`
  next()
})

export default router