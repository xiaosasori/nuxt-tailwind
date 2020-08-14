<template>
  <li
    draggable
    @dragstart.self="onDrag"
    @dragenter.prevent="dragEnter"
    @dragover.prevent="dragOver"
    @drop.stop="onDrop"
    @dragleave="dragLeave"
    @dragend="dragEnd"
  >
    <div class="block p-5 bg-white rounded-md shadow">
      <div class="flex justify-between">
        <p class="text-sm font-semibold leading-snug text-gray-900">{{content.title}}</p>
        <span class="flex-shrink-0">
          <img class="w-6 h-6 rounded-full" :src="content.avatar" alt="avatar" />
        </span>
      </div>
      <div class="flex items-baseline justify-between">
        <div class="text-sm text-gray-600">
          <time :datetime="content.date">{{content.date}}</time>
        </div>
        <div class="mt-2">
          <span class="inline-flex items-center px-2 py-1 leading-tight bg-teal-100 rounded">
            <svg class="w-2 h-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    content: Object,
    transferData: {
      type: Object,
      required: true
    },
    offset: {
      type: Object,
      default: () => ({top: 5, bottom: 5, left: 5, right: 5})
    }
  },
  methods: {
    onDrag (e) {
      // console.log('drag', this.transferData.fromColumnIndex, this.transferData.fromTaskIndex)
      this.$emit('drag', {task: this.content, columnIndex: this.transferData.fromColumnIndex, taskIndex: this.transferData.fromTaskIndex})
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.setData('payload', JSON.stringify(this.transferData))
    },
    dragEnd (e) {
      e.target.style.opacity = '1'
    },
    onDrop (e) {
      // console.log(e.dataTransfer.getData('payload'))
      const transferData = JSON.parse(e.dataTransfer.getData('payload'))
      this.$emit('drop', {from: transferData, to: this.transferData})
      if (this.$el.classList.contains('over')) this.$el.classList.remove('over')
    },
    dragEnter (e) {
      const transferData = JSON.parse(e.dataTransfer.getData('payload'))
      // console.log(transferData)
      const offsetTop = this.$el.getBoundingClientRect().top + this.offset.top
      const offsetBot = this.$el.getBoundingClientRect().bottom - this.offset.bottom
      const offsetLeft = this.$el.getBoundingClientRect().left + this.offset.left
      const offsetRight = this.$el.getBoundingClientRect().right - this.offset.right
      if (e.clientY > offsetTop && e.clientY < offsetBot && e.clientX > offsetLeft && e.clientX < offsetRight)
        this.$emit('dragEnter', {columnIndex: this.transferData.fromColumnIndex, taskIndex: this.transferData.fromTaskIndex})
    },
    dragOver () {
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