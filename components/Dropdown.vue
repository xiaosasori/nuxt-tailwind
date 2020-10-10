<template>
  <div class="relative">
    <button
      @click="toggle"
      type="button"
      class="block focus:outline-none"
      @focus="buttonHasFocus = true"
      @blur="buttonHasFocus = false"
    >
      <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
    </button>
    <transition
      enter-active-class="transition-all duration-75 ease-out"
      leave-active-class="transition-all duration-100 ease-in"
      enter-class="opacity-0 scale-70"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-to-class="opacity-0 scale-70"
    >
      <div v-show="isOpen">
        <button
          @click="isOpen = false"
          type="button"
          class="fixed inset-0 block w-full h-full cursor-default focus:outline-none"
        ></button>
        <div class="absolute" :class="containerClass">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: String,
      default: 'right-0'
    }
  },
  data() {
    return {
      buttonHasFocus: false,
      isOpen: false,
    }
  },
  mounted() {
    const onEscape = (e) => {
      if (!this.isOpen || e.key !== 'Escape') {
        return
      }
      this.isOpen = false
    }
    document.addEventListener('keydown', onEscape)

    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style scoped>
.scale-70 {
  transform: scale(0.7);
}
.scale-100 {
  transform: scale(1);
}
</style>