<template>
  <div class="flex flex-col flex-shrink-0 ml-3 bg-gray-100 rounded-md w-80">
    <h3 class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700">{{column.name}}</h3>
    <div class="flex-1 min-h-0 overflow-y-auto">
      <ul class="px-3 pt-1 pb-3">
        <TaskColumn
          v-for="(item, index) in column.tasks"
          :key="item['_id']"
          :item="item"
          :taskIndex="index"
          :columnIndex="columnIndex"
          :class="{'mt-3': index > 0}"
          @remove="remove"
          @dragEnter="dragEnter"
          :ref="`col${columnIndex}`"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TaskColumn from './TaskColumn'

export default {
  data () {
    return {
      ghostItemPosition: null,
      newItem: null
    }
  },
  components: {
    TaskColumn
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove (transferData) {
      this.ghostItemPosition = transferData
    },
    dragEnter({from, to}) {
      const oldPosition = this.ghostItemPosition
      console.log('parent')
      // console.log(oldPosition.columnIndex, to.columnIndex, oldPosition.taskIndex, to.taskIndex)
      // console.log(oldPosition.taskIndex !== to.taskIndex)
      // console.log(oldPosition.columnIndex !== to.columnIndex && oldPosition.taskIndex === to.taskIndex)
      if (oldPosition.taskIndex !== to.taskIndex || (oldPosition.columnIndex !== to.columnIndex && oldPosition.taskIndex === to.taskIndex)) {
        // remove current ghost item if drag enter another position
        if (this.ghostItemPosition)
          this.column.tasks.splice(oldPosition.taskIndex, 1)
        if (this.newItem) {
          this.newItem.classList.remove('ghost-item')
        }
        // add ghost item to current position
        this.column.tasks.splice(to.taskIndex, 0, from.value)
        // add class for ghost item
        this.newItem = this.$refs[`col${to.columnIndex}`][to.taskIndex].$el
        this.newItem.classList.add('ghost-item')
        console.log('remove', oldPosition.taskIndex, to.taskIndex)

      }
      this.ghostItemPosition = to
    }
  }
}
</script>

<style>
</style>
