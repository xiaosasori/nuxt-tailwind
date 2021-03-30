<template>
  <div>
    <nuxt />
    <button @click="show = !show" class="fixed left-0 z-50 px-2 py-4 transform -translate-y-1/2 bg-white rounded shadow-md top-1/2" aria-label="navigation">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </button>
    <transition name="slide">
      <div v-show="show" class="fixed inset-y-0 left-0 z-50">
        <button @click="show = false" class="fixed inset-0 w-full cursor-default" aria-hidden></button>
        <div class="relative flex flex-col justify-center h-full space-y-2 text-white bg-gray-900">
          <nuxt-link class="px-4 py-2 text-lg font-semibold transition hover:bg-gray-400 hover:bg-opacity-50" to="/workcation">Workcation</nuxt-link>
          <nuxt-link class="px-4 py-2 text-lg font-semibold transition hover:bg-gray-400 hover:bg-opacity-50" to="/allbirds">Allbirds</nuxt-link>
          <nuxt-link class="px-4 py-2 text-lg font-semibold transition hover:bg-gray-400 hover:bg-opacity-50" to="/kanban">Kanban</nuxt-link>
          <nuxt-link class="px-4 py-2 text-lg font-semibold transition hover:bg-gray-400 hover:bg-opacity-50" to="/inbox">Inbox</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}
</style>
