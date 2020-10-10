<template>
  <span class="cursor" ref="cursor" :style="styles"></span>
</template>

<script>
import cursor from '@/components/hooks/useCursor'
export default {
  name: 'CellCursor',
  computed: {
    styles() {
      return {
          width: cursor.width + 'px',
          height: cursor.height + 'px',
          top: cursor.top + 'px',
          left: cursor.left + 'px'
        }
        
    }
  },
  methods: {
    updateCursor() {

    }
  }
}
</script>

<style scoped>
.cursor {
  position: absolute;
  outline: 1px solid rgb(124, 179, 66);
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>