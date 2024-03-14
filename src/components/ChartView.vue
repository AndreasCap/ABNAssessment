<template>
  <div class="ChartContainer">
    <div class="ChartContainer__chart" id="tree" @click="handleClick"></div>
    <div v-if="selectedNodeData.name" class="ChartContainer__node-detail">
      <h2>I am node: {{ selectedNodeData.name }}</h2>
      <p>{{ selectedNodeData.description }}</p>
      <p>This is my parent: {{ selectedNodeData.parent }}</p>
      <div class="ChartContainer__close" @click="closeNode">X</div>
    </div>
  </div>
</template>

<script lang="ts">
import { BaseNode } from '@/types/basedata'
import { TreeData } from '@/utils/treeData'
import TransformData from '@/utils/transformData'

export default {
  name: 'ChartView',
  data() {
    // const baseNodeData: BaseData = nodeData
    const selectedNodeData: BaseNode = { name: null, description: null, parent: null }
    return {
      newData: {},
      selectedNodeData: selectedNodeData
    }
  },
  methods: {
    closeNode() {
      this.removeSelection()
      this.selectedNodeData.name = null
      this.selectedNodeData.description = null
      this.selectedNodeData.parent = null
    },
    removeSelection() {
      const getSelected = document.getElementsByClassName('ChartContainer__node--selected')
      if (getSelected) {
        for (let i = 0; i < getSelected.length; i++) {
          const element = getSelected[i]
          element.classList.remove('ChartContainer__node--selected')
        }
      }
    },
    handleClick(event) {
      const target = event.target
      this.removeSelection()
      if (target.classList.contains('node-link')) {
        target.classList.add('ChartContainer__node--selected')
        const targetValue = target.textContent // Assuming nodeData is in textContent
        const nodeData = this.newData[targetValue]
        if (this.selectedNodeData.value !== null) {
          this.selectedNodeData.name = nodeData.name
          this.selectedNodeData.description = nodeData.description
          this.selectedNodeData.parent = nodeData.parent
        }
      }
    },
    async fetchData() {
      try {
        const response = await fetch('../api/getdata')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        console.log('API Response:', data) // Log the response
        const newData = TransformData(data)
        this.newData = newData // Update newData
        TreeData(this.newData, 'tree', this.handleClick)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  async mounted() {
    this.fetchData()
  }
}
</script>
