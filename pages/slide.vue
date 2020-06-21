<template>
  <div class="fixed inset-0 overflow-x-hidden overflow-y-auto bg-gray-200">
    <transition name="fade">
      <!-- panel -->
      <section v-show="panelOpen" class="absolute inset-y-0 right-0 flex">
        <div aria-hidden class="w-10"></div>
        <div class="flex-1 w-full max-w-xs sm:max-w-md">
          <div class="flex flex-col min-h-full bg-white shadow-xl">
            <header class="px-4 py-6 space-y-1 bg-indigo-700">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold leading-7 text-white">New Project</h2>
                <button
                  aria-label="Close panel"
                  @click="panelOpen = false"
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-indigo-200 rounded-md hover:text-white hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:text-white"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div>
                <p
                  class="text-sm leading-5 text-indigo-300"
                >Get started by filling in the information below to create your new project</p>
              </div>
            </header>
            <!-- middle content -->
            <div class="flex flex-col justify-between flex-1 divide-y divide-gray-200">
              <div class="px-4 divide-y divide-gray-200">
                <div class="pt-6 pb-5 space-y-6">
                  <!-- project name -->
                  <div class="space-y-1">
                    <label
                      for="project_name"
                      class="block text-sm font-semibold leading-5 text-gray-900"
                    >Project name</label>
                    <div class="relative rounded-md shadow-sm">
                      <input
                        autofocus
                        type="text"
                        id="project_name"
                        class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <!-- description -->
                  <div class="space-y-1">
                    <label
                      for="description"
                      class="block text-sm font-semibold leading-5 text-gray-900"
                    >Description</label>
                    <div class="relative rounded-md shadow-sm">
                      <textarea
                        id="description"
                        type="text"
                        rows="4"
                        class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                      ></textarea>
                    </div>
                  </div>
                  <!-- team members -->
                  <div class="space-y-2">
                    <h3 class="block text-sm font-semibold leading-5 text-gray-900">Team Members</h3>
                    <div class>
                      <div class="flex space-x-2">
                        <a href="#">
                          <img
                            class="inline-block w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt
                          />
                        </a>
                        <a href="#">
                          <img
                            class="inline-block w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt
                          />
                        </a>
                        <a href="#">
                          <img
                            class="inline-block w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt
                          />
                        </a>
                        <a href="#">
                          <img
                            class="inline-block w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt
                          />
                        </a>
                        <a href="#">
                          <img
                            class="inline-block w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="avatar1"
                          />
                        </a>
                        <button
                          type="button"
                          aria-label="Add new member"
                          class="inline-flex items-center justify-center w-8 h-8 text-gray-600 transition duration-150 ease-in-out border-2 border-gray-200 border-dashed rounded-full hover:text-gray-500"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- privacy -->
                  <fieldset class="space-y-2">
                    <legend class="text-sm font-semibold leading-5 text-gray-900">Privacy</legend>
                    <div class="space-y-5" v-for="privacy in privacies" :key="privacy.title">
                      <div class="relative flex items-start">
                        <div class="absolute flex items-center h-5">
                          <input
                            :id="privacy.title"
                            name="privacy"
                            type="radio"
                            :aria-describedby="`private_description-${privacy.title}`"
                            class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                          />
                        </div>
                        <div class="pl-6 text-sm leading-5">
                          <label
                            :for="privacy.title"
                            class="font-semibold text-gray-900"
                          >{{privacy.title}}</label>
                          <p
                            :id="`private_description-${privacy.title}`"
                            class="text-gray-500"
                          >{{privacy.content}}</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <!-- bottom -->
                <div class="pt-4 pb-6 space-y-4">
                  <!-- Copy link -->
                  <div class="text-sm leading-5">
                    <a
                      href="#"
                      class="inline-flex items-center space-x-2 font-semibold text-indigo-600 transition duration-150 ease-in-out group hover:text-indigo-500"
                    >
                      <svg
                        class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      <span>Copy link</span>
                    </a>
                  </div>
                  <!-- Learn more -->
                  <div class="text-sm leading-5">
                    <a
                      href="#"
                      class="inline-flex items-center space-x-2 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900"
                    >
                      <svg
                        class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Learn more about sharing</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- sign up -->
              <div class="flex justify-end px-4 py-4 space-x-4">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    @click="panelOpen = false"
                    type="button"
                    class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  >Cancel</button>
                </span>
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >Save</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    panelOpen: true,
    privacies: [
      {title: 'Public access', content: 'Everyone with the link will has this project'},
      {title: 'Public to Project Members', content: 'Only members of this project would be able to access'},
      {title: 'Private to you', content: 'You are the only one able to access this project'}
      ]
  }),
  watch: {
    panelOpen(newVal) {
      if (!newVal) setTimeout(() => this.panelOpen = true, 1000)
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
.fade-enter-to,
.fade-leave {
  transform: translateX(0);
}
</style>