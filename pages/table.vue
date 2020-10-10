<template>
  <table @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.name">{{col.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, $rowIndex) in items" :key="item.id">
        <Cell
          v-for="(col, $columnIndex) in columns"
          :class="`cell-${$rowIndex}-${$columnIndex}`"
          :key="col.name"
          :row-index="$rowIndex"
          :column-index="$columnIndex"
        >{{item[col.name]}}</Cell>
      </tr>
    </tbody>
    <CellCursor />
    <CellSelectingRegion />
  </table>
</template>

<script>
import {items, search} from './items'
import Cell from '@/components/datatable/cell'
import CellCursor from '@/components/datatable/CellCursor'
import CellSelectingRegion from '@/components/datatable/CellSelectingRegion'
import cursor from '@/components/hooks/useCursor'
export default {
  provide() {
    return {
      $table: this
    }
  },
  data() {
    return {
      columns: [
                {name: 'cutpot'},
                {name: 'origin'},
                {name: 'family', required: true, rules: 'required'},
                {name: 'variety', required: true, rules: 'required'},
                {name: 'color'},
                {name: 'quantity', required: true, rules: 'required', type: 'number', help: 'Sll'},
                {name: 'unit', help: 'Bn cay'},
                {name: 'grade'},
                {name: 'price', required: true, rules: 'required', help: 'Gia'},
                {name: 'note', help: 'Note ne'}
            ],
            items: items,
            isSelectingRegion: false,
            selectedRegion: {}
    }
  },
  components: {Cell, CellCursor, CellSelectingRegion},
  methods: {
    mouseDown($event) {
      // this.isSelectingRegion = true
    },
    mouseMove() {
      // if (!this.isSelectingRegion) return

    },
    mouseUp() {

    }
  }
}
</script>

<style scoped>
table {
  text-align: center;
  border-collapse: collapse;
  position: relative;
}

table,
th,
td {
  border: 1px solid gray;
}
</style>