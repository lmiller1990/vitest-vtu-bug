import { config } from '@vue/test-utils'

export default function () {
  class TestPlugin {
    static install (app) {
      app.component('foo-bar', defineComponent({
        render() {
          return h('div', 'Foo Bar')
        }
      }))
    }
  }

  config.global.plugins.push(TestPlugin)
}
