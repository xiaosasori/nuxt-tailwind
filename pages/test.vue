<template>
  <div id="app">
    <div class="flex h-screen overflow-hidden bg-gray-100">
      <!-- Off-canvas menu for mobile -->
      <transition leave-active-class="duration-300">
        <div v-show="sidebarOpen" class="md:hidden">
          <div class="fixed inset-0 z-40 flex">
            <!--
              Off-canvas menu overlay, show/hide based on off-canvas menu state.
            -->
            <transition
              enter-active-class="transition-opacity duration-300 ease-linear"
              enter-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition-opacity duration-300 ease-linear"
              leave-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div v-show="sidebarOpen" class="fixed inset-0">
                <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
              </div>
            </transition>
            <!--
              Off-canvas menu, show/hide based on off-canvas menu state.
            -->
            <transition
              enter-active-class="transition duration-300 ease-in-out transform"
              enter-class="-translate-x-full"
              enter-to-class="translate-x-0"
              leave-active-class="transition duration-300 ease-in-out transform"
              leave-class="translate-x-0"
              leave-to-class="-translate-x-full"
            >
              <div
                v-show="sidebarOpen"
                class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-indigo-800"
              >
                <div class="absolute top-0 right-0 p-1 -mr-14">
                  <button
                    v-show="sidebarOpen"
                    @click="sidebarOpen = false"
                    class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex items-center flex-shrink-0 px-4">
                  <img
                    class="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
                    alt="Workflow"
                  />
                </div>
                <div class="flex-1 h-0 mt-5 overflow-y-auto">
                  <nav class="px-2">
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Team
                    </a>
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Projects
                    </a>
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Calendar
                    </a>
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      Documents
                    </a>
                    <a
                      href="#"
                      class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                    >
                      <svg
                        class="w-6 h-6 mr-4 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Reports
                    </a>
                  </nav>
                </div>
              </div>
            </transition>
            <div class="flex-shrink-0 w-14">
              <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
          </div>
        </div>
      </transition>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-indigo-800">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
                alt="Workflow"
              />
            </div>
            <div class="flex flex-col flex-1 mt-5">
              <nav class="flex-1 px-2 bg-indigo-800">
                <a
                  href="#"
                  class="flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-900 rounded-md group focus:outline-none focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Documents
                </a>
                <a
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-indigo-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
                >
                  <svg
                    class="w-6 h-6 mr-3 text-indigo-400 transition duration-150 ease-in-out group-hover:text-indigo-300 group-focus:text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Reports
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <div class="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <button
            @click="sidebarOpen = true"
            class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            aria-label="Open sidebar"
          >
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex justify-between flex-1 px-4">
            <div class="flex flex-1">
              <form class="flex w-full md:ml-0" action="#" method="GET">
                <label for="search_field" class="sr-only">Search</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div class="flex items-center ml-4 md:ml-6">
              <button
                class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
                aria-label="Notifications"
              >
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button
                    @click="dropdownOpen = !dropdownOpen"
                    class="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </button>
                </div>
                <!--
                  Profile dropdown panel, show/hide based on dropdown state.
                -->
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-show="dropdownOpen"
                    class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                      >Your Profile</a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                      >Settings</a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                        role="menuitem"
                      >Sign out</a>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>

        <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="pt-2 pb-6 md:py-6">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <div class="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      dropdownOpen: false,
      sidebarOpen: false,
    }
  },
}
</script>
