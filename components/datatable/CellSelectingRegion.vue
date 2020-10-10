<template>
  <span class="selecting-region" :style="styles"></span>
</template>

<script>
import cursor from '@/components/hooks/useCursor'
import {debounce} from 'lodash-es'
export default {
  name: 'CellSelectingRegion',
  inject: ['$table'],
  data() {
    return {
      selectedRegion: {start: {}, end: {}}
    }
  },
  mounted() {
    this.$table.$el.addEventListener('mousedown', ($event) => {
      const tbody = this.$table.$el.querySelector('tbody')
      console.log(tbody)
      tbody.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      
      function onMouseUp () {
        console.log('mouseup')
        tbody.removeEventListener('mousemove', this.onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
    })

  },
  computed: {
    styles() {
      const cellRegion = this.selectedRegion
      const startCellClass = `.cell-${cellRegion?.start.rowIndex}-${cellRegion?.start.columnIndex}`
      const endCellClass = `.cell-${cellRegion?.end.rowIndex}-${cellRegion?.end.columnIndex}`
      const startCell = this.$table.$el?.querySelector(startCellClass)
      const endCell = this.$table.$el?.querySelector(endCellClass)
      console.log('ce', startCell, endCell)
      let top, left, width, height
      if (!startCell || !endCell) return {display: 'none'}
      if (startCell.offsetLeft < endCell.offsetLeft) {
          left = startCell.offsetLeft
          width = endCell.offsetLeft + endCell.offsetWidth - left
      } else {
          left = endCell.offsetLeft
          width = startCell.offsetLeft + startCell.offsetWidth - left
      }

      if (startCell.offsetTop < endCell.offsetTop) {
          top = startCell.offsetTop
          height = endCell.offsetTop + endCell.offsetHeight - top
      } else {
          top = endCell.offsetTop
          height = startCell.offsetTop + startCell.offsetHeight - top
      }
      return {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`
            }
    }
  },
  methods: {
    onMouseMove: debounce(function(event){
          const td = event.target.closest('td')
          if (!td.dataset.columnIndex) return
          console.log('mousemove')
          this.selectedRegion.start = {
                    rowIndex: cursor.rowIndex,
                    columnIndex: cursor.columnIndex
              }
          this.selectedRegion.end = {
                      rowIndex: parseInt(td.dataset.rowIndex),
                      columnIndex: parseInt(td.dataset.columnIndex)
                  }
    } , 16)

  ,
    onMouseUp() {

    }
  }
}
</script>

<style scoped>
.selecting-region {
  position: absolute;
  background-color: rgba(124, 179, 66, 0.2);
  pointer-events: none;
}
</style>
