<template>
  <td
    @mousedown="cellClick"
    @dblclick="cellDbClick"
    :data-row-index="rowIndex"
    :data-column-index="columnIndex"
  >
    <slot />
  </td>
</template>

<script>
import cursor from '@/components/hooks/useCursor'
export default {
  props: {
    rowIndex: Number,
    columnIndex: Number
  },
  computed: {
    // isSelecting() {
    //   return this.rowIndex === cursor.rowIndex && this.columnIndex === cursor.columnIndex
    // }
  },
  methods: {
    cellClick() {
      const {width, height, top, left} = this.$el.getBoundingClientRect()
      cursor.width = width
      cursor.height = height
      cursor.top = top
      cursor.left = left
      // this.$emit('cell-click', {rowIndex: this.rowIndex, columnIndex: this.columnIndex, width, height, top, left})
    },
    cellDbClick() {
      this.$emit('cell-db-click', {rowIndex: this.rowIndex, columnIndex: this.columnIndex})
    }
  }
}
</script>
<style scoped>
td {
  user-select: none;
}
.is-selecting {
  outline: 1px solid teal;
}
</style>