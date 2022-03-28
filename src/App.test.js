import { defineComponent } from 'vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('global plugin via test runner setup script', () => {
  it('uses a component defined globally by a test runner setup script', () => {
    const Comp = defineComponent({
      template: `<foo-bar />`
    })

    const wrapper = mount(Comp)

    expect(wrapper.html()).toContain('Foo Bar')
  })
})
