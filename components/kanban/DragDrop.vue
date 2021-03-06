<template>
  <component
    :is="tag"
    :draggable="draggable"
    @dragstart.self="onDrag"
    @dragenter.prevent="dragEnter"
    @dragover.prevent="dragOver"
    @drop.stop="onDrop"
    @dragleave="dragLeave"
    @dragend="dragEnd"
  >
    <slot />
  </component>
</template>

<script>
import {isEqual} from 'lodash-es'
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    mode: {
      default: 'cut',
      validator: function (value) {
        return ['cut', 'copy'].includes(value)
      }
    },
    draggable: {
      type: Boolean,
      default: true
    },
    dropable: {
      type: Boolean,
      default: true
    },
    dataTransfer: Object,
    dropEffect: {
      default: 'move',
      validator: function (value) {
        return ['copy', 'move', 'link', 'none'].includes(value)
      }
    },
    effectsAllowed: {
      default: 'move',
      validator: function (value) {
        return [
          'none', 'copy', 'copyLink', 'copyMove', 'link', 'linkMove', 'move', 'all',
          'uninitialized',
        ].includes(value)
      }
    },
    offset: {
      type: Object,
      default: () => ({top: 5, bottom: 5, left: 5, right: 5})
    },
    ghostClass: {
      type: String,
      default: 'ghost-item'
    }
  },
  computed: {
    
  },
  methods: {
    onDrag (e) {
      e.dataTransfer.effectAllowed = this.effectsAllowed
      e.dataTransfer.dropEffect = this.dropEffect
      e.dataTransfer.setData('draggingItem', JSON.stringify(this.dataTransfer))
      if (this.mode === 'cut') this.$emit('remove', this.dataTransfer)
    },
    onDrop (e) {
      const dataTransfer = JSON.parse(e.dataTransfer.getData('draggingItem'))
      this.$emit('drop', {event: e, from: dataTransfer, to: this.dataTransfer})
    },
    dragEnter (e) {
      const draggingData = JSON.parse(e.dataTransfer.getData('draggingItem'))
      const offset = this.getOffset()
      if (e.clientY > offset.top && e.clientY < offset.bottom && e.clientX > offset.left && e.clientX < offset.right)
        this.$emit('dragEnter', {from: draggingData, to: this.dataTransfer})
    },
    dragOver () {
      this.$emit('dragOver')
    },
    dragLeave (e) {
      this.$emit('dragLeave')
    },
    dragEnd () {
      this.$emit('dragEnd')
    },
    getOffset () {
      const top = this.$el.getBoundingClientRect().top + this.offset.top
      const bottom = this.$el.getBoundingClientRect().bottom - this.offset.bottom
      const left = this.$el.getBoundingClientRect().left + this.offset.left
      const right = this.$el.getBoundingClientRect().right - this.offset.right
      return {top, bottom, left, right}
    }
  }
}
</script>

<style>
</style>