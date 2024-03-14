import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import chartview from '../ChartView.vue'

describe('chartview', () => {
  it('renders properly', () => {
    const wrapper = mount(chartview)
    expect(wrapper);
  })
})
