<template>
  <div class="ChartContainer">
    <div class="ChartContainer__chart" id="tree" @click="handleClick"></div>
    <div v-if="selectedNodeData" class="ChartContainer__node-detail">
      <h2>I am node: {{ selectedNodeData.name }}</h2>
      <p>{{ selectedNodeData.description }}</p>
      <p>This is my parent: {{ selectedNodeData.parent }}</p>
      <div class="ChartContainer__close" @click="closeNode">X</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import nodeData from '@/assets/data/data.json'
import { BaseData, TransformedData, BaseNode } from '@/types/basedata'
import { TreeData } from '@/utils/treeData'
import TransformData from '@/utils/transformData'

const baseNodeData: BaseData = nodeData
const selectedNodeData = ref<BaseNode | null>(null)
const newData: TransformedData = TransformData(baseNodeData)

onMounted(() => {
  TreeData(newData, 'tree', handleClick)
})

function handleClick(event) {
  const target = event.target
  removeSelection()
  if (target.classList.contains('node-link')) {
    target.classList.add('ChartContainer__node--selected')
    const targetValue = target.textContent // Assuming nodeData is in textContent
    const nodeData = newData[targetValue]
    selectedNodeData.value = nodeData
  }
}

function removeSelection() {
  const getSelected = document.getElementsByClassName('ChartContainer__node--selected')
  if (getSelected) {
    for (let i = 0; i < getSelected.length; i++) {
      const element = getSelected[i]
      element.classList.remove('ChartContainer__node--selected')
    }
  }
}

function closeNode() {
  removeSelection()
  selectedNodeData.value = null
}
</script>
