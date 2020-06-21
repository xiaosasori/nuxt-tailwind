<template>
  <div class="relative bg-white">
    <div class="flex items-center justify-between px-4 py-6 sm:px-6 md:space-x-10 md:justify-start">
      <!-- logo -->
      <div class="lg:w-0 lg:flex-1">
        <svg class="w-auto h-8 sm:h-10" width="36" height="36" viewBox="0 0 24 24">
          <g fill="#e91e63">
            <path
              d="M6.6 16.48l1.23 3.66c-1.77.57-2.99.94-3.08.93-.78-.03-1.54-.54-1.8-1.32-.33-1.02.21-2.12 1.23-2.46zM15.31 13.58l1.24 3.69c-1.62.54-3.37 1.12-5.02 1.66l-1.23-3.68zM24 13.38c0 .82-.51 1.58-1.32 1.84 0 0-.96.32-2.44.81l-1.23-3.68 2.43-.81c1.02-.33 2.13.21 2.46 1.23.07.2.1.41.1.61z"
            />
          </g>
          <path
            d="M3.75 7.97l1.23 3.66c-1.77.57-2.99.94-3.08.93-.78-.03-1.54-.54-1.8-1.32-.33-1.02.2-2.12 1.23-2.46zM12.45 5.07l1.24 3.69c-1.61.54-3.36 1.12-5.01 1.66L7.45 6.74zM19.81 6.72s-.95.32-2.42.81l-1.24-3.69 2.43-.81c1.02-.33 2.13.21 2.47 1.23.32 1.02-.21 2.13-1.24 2.46z"
            fill="#00bcd4"
          />
          <path d="M17.39 7.53c-1.03.34-2.31.77-3.7 1.23l-1.24-3.69 3.7-1.23z" fill="#689f38" />
          <path
            d="M16.15 3.84l-3.7 1.23-.84-2.51c-.32-1.03.21-2.13 1.23-2.46 1.03-.33 2.14.21 2.47 1.22z"
            fill="#ffc107"
          />
          <path d="M20.24 16.03c-1.03.35-2.31.78-3.69 1.24l-1.24-3.69 3.7-1.23z" fill="#b71c1c" />
          <path
            d="M19.01 12.35l-3.7 1.23-1.62-4.82c1.39-.46 2.67-.89 3.7-1.23zM19.85 21c-1.14.33-2.14-.32-2.46-1.22l-.84-2.51c1.38-.46 2.66-.89 3.69-1.24l.84 2.51c.33 1.03-.2 2.13-1.23 2.46z"
            fill="#ffc107"
          />
          <path d="M8.68 10.42c-1.35.44-2.63.86-3.7 1.21L3.75 7.97l3.7-1.23z" fill="#009688" />
          <path
            d="M7.45 6.74l-3.7 1.23-.84-2.51C2.59 4.44 3.12 3.33 4.14 3c1.03-.33 2.14.21 2.47 1.23z"
            fill="#4caf50"
          />
          <path d="M11.53 18.93c-1.35.44-2.62.86-3.7 1.21L6.6 16.48l3.7-1.23z" fill="#880e4f" />
          <path
            d="M10.3 15.25l-3.7 1.23-1.62-4.85c1.07-.35 2.35-.77 3.7-1.21zM11.14 23.91c-1.14.33-2.14-.32-2.46-1.22l-.85-2.55c1.08-.35 2.35-.77 3.7-1.21l.84 2.52c.33 1.03-.2 2.13-1.23 2.46z"
            fill="#4caf50"
          />
        </svg>
      </div>
      <!-- menu button -->
      <div class="-my-2 -mr-2 md:hidden">
        <button
          @click="mobileMenuOpen = true"
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- <div class="hidden md:flex md:items-center md:justify-between md:space-x-10 md:flex-1"> -->
      <!-- left -->
      <nav class="hidden space-x-10 md:flex">
        <!-- Solutions -->
        <div class="relative">
          <button
            @click="flyoutMenuOpen = !flyoutMenuOpen"
            type="button"
            class="relative focus:outline-none"
          >
            <span
              tabindex="0"
              class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 hover:text-gray-900"
            >
              <span>Solutions</span>
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <!-- triangle -->
            <transition name="solutions">
              <span
                v-show="flyoutMenuOpen"
                class="absolute right-0 z-10 block w-6 h-6 transform rotate-45 translate-x-1 translate-y-4 pointer-events-none"
              >
                <span class="absolute inset-0 bg-white border-t border-l border-gray-200"></span>
              </span>
            </transition>
          </button>
          <!-- solution's list menu -->
          <transition name="solutions">
            <div
              v-show="flyoutMenuOpen"
              class="absolute max-w-2xl mt-6 -ml-8 lg:max-w-3xl lg:-ml-24"
              style="width: max-content"
            >
              <div class="rounded-lg shadow-lg">
                <div class="overflow-hidden rounded-lg shadow-xs">
                  <div class="relative z-20 grid grid-cols-2 gap-8 p-8 bg-white">
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Analytics</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Get a better understanding of where your traffic is coming from.</p>
                      </div>
                    </a>
                    <!-- Engagement -->
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Engagment</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Speak directly to your customers in a more meaningful way.</p>
                      </div>
                    </a>
                    <!-- Security -->
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Security</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Your customers data will be safe and secure.</p>
                      </div>
                    </a>
                    <!-- Integrations -->
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Integrations</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Connect with third-party tools that you're already using.</p>
                      </div>
                    </a>
                    <!-- Automations -->
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Automations</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Build strategic funnels that will drive your customers to convert.</p>
                      </div>
                    </a>
                    <!-- Reports -->
                    <a href="#" class="flex items-start space-x-4">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                          <path
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-1">
                        <p class="text-base font-medium leading-6 text-gray-900">Reports</p>
                        <p
                          class="text-sm leading-5 text-gray-500"
                        >Get detailed reports that will help you make more informed decisions</p>
                      </div>
                    </a>
                  </div>
                  <!-- footer -->
                  <div class="px-8 py-6 bg-gray-50">
                    <a href="#" class="block space-y-1" style="width: max-content">
                      <div class="flex items-center space-x-3">
                        <div class="text-base font-medium leading-6 text-gray-900">Enterprise</div>
                        <span
                          class="inline-flex items-center px-3 py-1 text-xs font-medium leading-5 text-indigo-800 bg-indigo-200 rounded-full"
                        >New</span>
                      </div>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Empower your entire team with even more advanced tools.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- Pricing -->
        <a
          href="#"
          class="text-base font-medium leading-6 text-gray-500 hover:text-gray-900"
        >Pricing</a>
        <!-- Docs -->
        <a href="#" class="text-base font-medium leading-6 text-gray-500 hover:text-gray-900">Docs</a>
        <!-- More -->
        <div class="relative">
          <button
            @click="moreMenuOpen = !moreMenuOpen"
            type="button"
            class="relative focus:outline-none"
          >
            <span
              tabindex="0"
              class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 hover:text-gray-900"
            >
              <span>Menu</span>
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <!-- triangle -->
            <transition name="solutions">
              <span
                v-show="moreMenuOpen"
                class="absolute right-0 z-10 block w-6 h-6 transform rotate-45 translate-x-1 translate-y-4 pointer-events-none"
              >
                <span class="absolute inset-0 bg-white border-t border-l border-gray-200"></span>
              </span>
            </transition>
          </button>
          <!-- more menu -->
          <transition name="solutions">
            <div
              v-show="moreMenuOpen"
              class="absolute max-w-xs mt-6 -ml-6"
              style="width: max-content"
            >
              <div class="rounded-lg shadow-lg">
                <div class="overflow-hidden rounded-lg shadow-xs">
                  <div class="relative z-20 p-8 space-y-8 bg-white">
                    <a href="#" class="block space-y-1">
                      <p class="text-base font-medium leading-6 text-gray-900">Blog</p>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Learn about tips, product updates and company culture.</p>
                    </a>
                    <a href="#" class="block space-y-1">
                      <p class="text-base font-medium leading-6 text-gray-900">Help Center</p>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Get all of your questions answered in our forums of contact support</p>
                    </a>
                    <a href="#" class="block space-y-1">
                      <p class="text-base font-medium leading-6 text-gray-900">Guides</p>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Learn how to maximize our platform to get the most out of it</p>
                    </a>
                    <a href="#" class="block space-y-1">
                      <p class="text-base font-medium leading-6 text-gray-900">Events</p>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Check out webinars with experts and learn about our anual conference</p>
                    </a>
                    <a href="#" class="block space-y-1">
                      <p class="text-base font-medium leading-6 text-gray-900">Security</p>
                      <p
                        class="text-sm leading-5 text-gray-500"
                      >Understand how we take your privacy seriously</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </nav>
      <!-- right sign in, sign up -->
      <div class="items-center hidden space-x-8 md:flex md:justify-end lg:w-0 md:flex-1">
        <a
          href="#"
          class="text-base font-medium leading-6 text-gray-500 hover:text-gray-900"
        >Sign in</a>
        <span class="inline-flex rounded-md shadow-sm">
          <a
            href="#"
            class="items-center justify-center px-4 py-2 text-base leading-6 text-white bg-indigo-700 border border-transparent rounded-md inline-lex"
          >Sign up</a>
        </span>
      </div>
      <!-- </div> -->
    </div>
    <!-- mobile menu -->
    <transition name="fade">
      <div
        v-show="mobileMenuOpen"
        class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform"
      >
        <div class="rounded-lg shadow-lg">
          <div class="bg-white divide-y-2 rounded-lg shadow-xl divide-gray-50">
            <!-- section top -->
            <div class="px-5 pt-5 pb-8 space-y-8">
              <!-- logo div -->
              <div class="flex items-center justify-between">
                <div>
                  <svg class="w-auto h-8" width="36" height="36" viewBox="0 0 24 24">
                    <g fill="#e91e63">
                      <path
                        d="M6.6 16.48l1.23 3.66c-1.77.57-2.99.94-3.08.93-.78-.03-1.54-.54-1.8-1.32-.33-1.02.21-2.12 1.23-2.46zM15.31 13.58l1.24 3.69c-1.62.54-3.37 1.12-5.02 1.66l-1.23-3.68zM24 13.38c0 .82-.51 1.58-1.32 1.84 0 0-.96.32-2.44.81l-1.23-3.68 2.43-.81c1.02-.33 2.13.21 2.46 1.23.07.2.1.41.1.61z"
                      />
                    </g>
                    <path
                      d="M3.75 7.97l1.23 3.66c-1.77.57-2.99.94-3.08.93-.78-.03-1.54-.54-1.8-1.32-.33-1.02.2-2.12 1.23-2.46zM12.45 5.07l1.24 3.69c-1.61.54-3.36 1.12-5.01 1.66L7.45 6.74zM19.81 6.72s-.95.32-2.42.81l-1.24-3.69 2.43-.81c1.02-.33 2.13.21 2.47 1.23.32 1.02-.21 2.13-1.24 2.46z"
                      fill="#00bcd4"
                    />
                    <path
                      d="M17.39 7.53c-1.03.34-2.31.77-3.7 1.23l-1.24-3.69 3.7-1.23z"
                      fill="#689f38"
                    />
                    <path
                      d="M16.15 3.84l-3.7 1.23-.84-2.51c-.32-1.03.21-2.13 1.23-2.46 1.03-.33 2.14.21 2.47 1.22z"
                      fill="#ffc107"
                    />
                    <path
                      d="M20.24 16.03c-1.03.35-2.31.78-3.69 1.24l-1.24-3.69 3.7-1.23z"
                      fill="#b71c1c"
                    />
                    <path
                      d="M19.01 12.35l-3.7 1.23-1.62-4.82c1.39-.46 2.67-.89 3.7-1.23zM19.85 21c-1.14.33-2.14-.32-2.46-1.22l-.84-2.51c1.38-.46 2.66-.89 3.69-1.24l.84 2.51c.33 1.03-.2 2.13-1.23 2.46z"
                      fill="#ffc107"
                    />
                    <path
                      d="M8.68 10.42c-1.35.44-2.63.86-3.7 1.21L3.75 7.97l3.7-1.23z"
                      fill="#009688"
                    />
                    <path
                      d="M7.45 6.74l-3.7 1.23-.84-2.51C2.59 4.44 3.12 3.33 4.14 3c1.03-.33 2.14.21 2.47 1.23z"
                      fill="#4caf50"
                    />
                    <path
                      d="M11.53 18.93c-1.35.44-2.62.86-3.7 1.21L6.6 16.48l3.7-1.23z"
                      fill="#880e4f"
                    />
                    <path
                      d="M10.3 15.25l-3.7 1.23-1.62-4.85c1.07-.35 2.35-.77 3.7-1.21zM11.14 23.91c-1.14.33-2.14-.32-2.46-1.22l-.85-2.55c1.08-.35 2.35-.77 3.7-1.21l.84 2.52c.33 1.03-.2 2.13-1.23 2.46z"
                      fill="#4caf50"
                    />
                  </svg>
                </div>
                <div class="-mr-2">
                  <button
                    @click="mobileMenuOpen = false"
                    type="button"
                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
              </div>
              <!-- list item -->
              <div>
                <nav class="space-y-8">
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Analytics</div>
                  </a>
                  <!-- Engagement -->
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Engagment</div>
                  </a>
                  <!-- Security -->
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Security</div>
                  </a>
                  <!-- Integrations -->
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Integrations</div>
                  </a>
                  <!-- Automations -->
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Automations</div>
                  </a>
                  <!-- Reports -->
                  <a href="#" class="flex items-center space-x-4">
                    <div
                      class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white bg-indigo-500 rounded-md"
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
                        <path
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="text-base font-medium leading-6 text-gray-900">Reports</div>
                  </a>
                </nav>
              </div>
            </div>
            <!-- section price -->
            <div class="px-5 py-8 space-y-8">
              <div class="grid grid-cols-2 row-gap-8 col-gap-4">
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Price</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Docs</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Enterprise</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Blog</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Help Center</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Guides</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900">Security</a>
                <a href="#" class="text-base font-semibold leading-6 text-gray-900 scale-95">Events</a>
              </div>
              <!-- signup button -->
              <div class="space-y-6">
                <span class="flex w-full rounded-md shadow-sm">
                  <a
                    href="#"
                    class="flex items-center justify-center w-full px-4 py-2 text-base leading-6 text-white bg-indigo-700 border border-transparent rounded-md"
                  >Sign up</a>
                </span>
                <p class="text-base font-medium leading-6 text-gray-500">
                  Existing customer?
                  <a href="#" class="text-gray-900">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    mobileMenuOpen: false,
    flyoutMenuOpen: false,
    moreMenuOpen: false
  })
}
</script>

<style>
body {
  @apply bg-gray-200;
}
.foo {
  @apply transform;
  @apply -translate-x-1/2;
}
.fade-enter-active {
  @apply duration-150;
  @apply ease-out;
}
.fade-leave-active {
  @apply duration-100;
  @apply ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
  @apply scale-95;
}
.fade-enter-to,
.fade-leave {
  @apply opacity-100;
  @apply scale-100;
}
/* triangle */
.solutions-enter-active {
  @apply duration-150;
  @apply ease-out;
}
.solutions-leave-active {
  @apply duration-200;
  @apply ease-in;
}
.solutions-enter, .solutions-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
}
.solutions-enter-to,
.solutions-leave {
  @apply opacity-100;
}
</style>