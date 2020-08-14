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
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    draggable: {
      type: Boolean,
      default: true
    },
    transferData: {
      type: Object,
      required: true
    },
    dropEffect: {
      default: 'move',
      validator: function (value) {
        return value in ['copy', 'move', 'link', 'none']
      }
    },
    effectsAllowed: {
      default: 'move',
      validator: function (value) {
        return value in [
          'none', 'copy', 'copyLink', 'copyMove', 'link', 'linkMove', 'move', 'all',
          'uninitialized',
        ]
      }
    },
    offset: {
      type: Object,
      default: () => ({top: 5, bottom: 5, left: 5, right: 5})
    }
  },
  methods: {
    onDrag (e) {
      // this.$emit('drag', {task: this.content, columnIndex: this.transferData.fromColumnIndex, taskIndex: this.transferData.fromTaskIndex})
      e.dataTransfer.effectAllowed = this.effectsAllowed
      e.dataTransfer.dropEffect = this.dropEffect
      e.dataTransfer.setData('payload', JSON.stringify(this.transferData))
    },
    onDrop (e) {
      const transferData = JSON.parse(e.dataTransfer.getData('payload'))
      this.$emit('drop', {from: transferData, to: this.transferData})
    },
    dragEnter (e) {
      const transferData = JSON.parse(e.dataTransfer.getData('payload'))
      const offsetTop = this.$el.getBoundingClientRect().top + this.offset.top
      const offsetBot = this.$el.getBoundingClientRect().bottom - this.offset.bottom
      const offsetLeft = this.$el.getBoundingClientRect().left + this.offset.left
      const offsetRight = this.$el.getBoundingClientRect().right - this.offset.right
      if (e.clientY > offsetTop && e.clientY < offsetBot && e.clientX > offsetLeft && e.clientX < offsetRight)
        this.$emit('dragEnter', {columnIndex: this.transferData.fromColumnIndex, taskIndex: this.transferData.fromTaskIndex})
    },
    dragOver () {
      this.$emit('dragOver')
    },
    dragLeave (e) {
      this.$emit('dragLeave')
    },
    dragEnd () {
      this.$emit('dragEnd')
    }
  }
}
</script>

<style>
</style>