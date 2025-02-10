import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/config'
import { createRouter, createWebHistory } from 'vue-router'

import LocaleWrapper from '../components/LocaleWrapper.vue'

import ContentMain from '@/views/MainView.vue'
import AppLingoBetaTesting from '@/views/AppLingoBetaTesting.vue'
import AppLingoAbout from '@/views/AppLingoAbout.vue'
import ContributeGitHubWorkflows from '@/views/ContributeGitHubWorkflows.vue'
import ContributeCiActions from '@/views/ContributeCiActions.vue'
import ContributeWf from '@/views/ContributeWf.vue'
import AppLingoFeedback from '@/views/AppLingoFeedback.vue'

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
    path: '/contribute/github-workflows',
    redirect: `/${DEFAULT_LOCALE}/contribute/github-workflows`
  },
  {
    path: '/contribute/ci-actions',
    redirect: `/${DEFAULT_LOCALE}/contribute/ci-actions`
  },
  {
    path: '/contribute/wf',
    redirect: `/${DEFAULT_LOCALE}/contribute/wf` 
  },
  {
    path: '/applingo/about',
    redirect: `/${DEFAULT_LOCALE}/applingo/about`
  },
  {
    path: '/applingo/betatesting',
    redirect: `/${DEFAULT_LOCALE}/applingo/betatesting`
  },
  {
    path: '/applingo/feedback',
    redirect: `/${DEFAULT_LOCALE}/applingo/feedback`
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
        path: 'applingo/betatesting',
        name: 'betatesting',
        component: AppLingoBetaTesting,
        meta: {
          title: 'AppLingo BetaTesting'
        }
      },
      {
        path: 'applingo/about',
        name: 'applingo-about',
        component: AppLingoAbout,
        meta: {
          title: 'Applingo About'
        }
      },
      {
        path: 'applingo/feedback',
        name: 'applingo-feedback',
        component: AppLingoFeedback,
        meta: {
          title: 'Applingo Feedback'
        }
      },
      {
        path: 'contribute/github-workflows',
        name: 'github-workflows',
        component: ContributeGitHubWorkflows,
        meta: {
          title: 'Github Workflows'
        }
      },
      {
        path: 'contribute/ci-actions',
        name: 'ci-actions',
        component: ContributeCiActions,
        meta: {
          title: 'Ci Actions'
        }
      },
      {
        path: 'contribute/wf',
        name: 'wf',
        component: ContributeWf,
        meta: {
          title: 'WF'
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