import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
  dsn: 'https://4a6bf4a1bfc746348c2889ac76e4d4b8@sentry.io/1866819',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })]
})
