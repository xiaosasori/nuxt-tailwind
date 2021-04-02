<template>
  <div>
    <Dropdown class="inline-block">
      <template #trigger>
        <span class="flex items-center">
          <img
            src="https://github.com/adamwathan.png"
            alt="Adam Wathan's avatar"
            class="w-8 h-8 rounded-full"
          />
          <span class="ml-2 font-medium">Adam Wathan</span>
          <svg
            class="w-5 h-5 ml-1 text-gray-700 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
            />
          </svg>
        </span>
      </template>
      <template #dropdown>
        <ul class="py-2 mt-2 origin-top-right bg-white border rounded-lg shadow-md">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Profile</a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-indigo-500 hover:text-white"
            >Account settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-indigo-500 hover:text-white">Sign out</a>
          </li>
        </ul>
      </template>
    </Dropdown>
    <div class="flex items-center justify-center">
      <div class="px-6 py-6 bg-white rounded-lg shadow-md">
        <h2
          class="pb-4 text-2xl font-semibold leading-tight text-gray-900 border-b-2 border-gray-200"
        >Delete account</h2>
        <p
          class="mt-4 text-gray-700"
        >We'll cancel your subscription and remove all of your data from our servers.</p>
        <div class="mt-6">
          <button
            @click="open = true"
            class="px-4 py-2 font-semibold text-white bg-red-500 border border-transparent rounded hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >Delete my account</button>
          <Dialog :open="open" @close="open = false">
            <div class="w-full max-w-lg px-6 py-6 bg-white rounded-lg shadow-2xl">
              <h2
                class="pb-4 text-2xl font-semibold leading-tight text-gray-900 border-b-2 border-gray-200"
              >Delete account</h2>
              <p
                class="mt-4 text-gray-700"
              >Are you absolutely sure you want to cancel your subscription and delete your account? This action cannot be undone.</p>
              <div class="mt-6">
                <button
                  type="button"
                  @click="open = false"
                  class="px-4 py-2 font-semibold text-white bg-red-500 border border-transparent rounded hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >Delete my account</button>
                <button
                  @click="open = false"
                  class="px-4 py-2 ml-4 font-semibold text-gray-800 bg-white border rounded hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                >Cancel</button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
import Dropdown from '@/components/Dropdown.vue'
export default {
  components: {
    Dialog,
    Dropdown
  },
  data() {
    return {
      open: false
    }
  },
}
</script>

<style>
.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.transition-fastest {
  transition-duration: 50ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.scale-70 {
  transform: scale(0.7);
}
.scale-100 {
  transform: scale(1);
}
</style>
