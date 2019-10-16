// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import EvButton from './index.vue'

export default {
  title: 'Button'
}

export const text = () => ({
  components: { EvButton },
  template: '<ev-button>Hello Button</ev-button>'
})

export const disabled = () => ({
  components: { EvButton },
  template: '<ev-button :disabled="true">Hello Button</ev-button>',
  methods: { action: linkTo('clicked') }
})
