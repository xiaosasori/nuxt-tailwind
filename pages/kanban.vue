<template>
  <div class="flex h-screen">
    <!-- nav lg:inset-auto lg:static lg:translate-x-0-->
    <!-- :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'" -->
    <div
      class="fixed inset-0 bg-black opacity-50 lg:hidden"
      :class="sidebarOpen ? 'block' : 'hidden'"
    ></div>
    <div
      :style="{'transform': sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'}"
      style="transition: all 0.25s"
      class="fixed inset-y-0 left-0 z-30 w-64 px-8 py-4 overflow-auto bg-gray-100 border-r lg:inset-auto lg:static custom-translate-x-0"
    >
      <div class="flex items-center justify-between pl-3 pr-1 -mx-3">
        <span>
          <svg class="h-9 w-9" width="36" height="36" viewBox="0 0 24 24">
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
        </span>
        <button class="text-gray-700 lg:hidden" @click="sidebarOpen = false">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 492 492">
            <path
              d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"
            />
          </svg>
        </button>
      </div>
      <nav class="mt-8">
        <h2 class="text-xs font-semibold tracking-wide text-gray-600 uppercase">Issues</h2>
        <div class="mt-2 -mx-3">
          <a
            class="flex items-center justify-between w-full px-3 py-2 bg-gray-200 rounded-lg"
            href="#"
          >
            <span class="text-sm font-medium text-gray-900">All</span>
            <span class="text-xs font-semibold text-gray-700">36</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Assigned to me</span>
            <span class="text-xs font-semibold text-gray-700">2</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Created by me</span>
            <span class="text-xs font-semibold text-gray-700">1</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Archived</span>
            <span class="text-xs font-semibold text-gray-700"></span>
          </a>
        </div>
        <h2 class="mt-8 text-xs font-semibold tracking-wide text-gray-600 uppercase">Tags</h2>
        <div class="mt-2 -mx-3">
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-900">Bug</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Feature Request</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Marketing</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">v2.0</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Enhancement</span>
          </a>
          <a class="flex items-center justify-between w-full px-3 py-2 rounded-lg" href="#">
            <span class="text-sm font-medium text-gray-700">Design</span>
          </a>
        </div>
        <button class="flex items-center mt-2 text-sm font-medium text-gray-600">
          <svg
            class="w-2 h-2 text-gray-500 fill-current"
            height="8"
            viewBox="0 0 448 448"
            width="8"
          >
            <path
              d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
            />
          </svg>
          <span class="ml-2">New Project</span>
        </button>
      </nav>
    </div>
    <!-- right-content -->
    <div class="flex flex-col flex-1 min-w-0 bg-white">
      <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
        <header>
          <div class="px-6">
            <!-- header first row -->
            <div class="flex items-center justify-between py-3 border-b border-gray-200">
              <!-- Search box -->
              <div class="flex flex-1 min-w-0">
                <button class="text-gray-600 lg:hidden" @click="sidebarOpen = true">
                  <svg
                    class="w-5 h-5 fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 341.333 341.333"
                  >
                    <path
                      d="M128 128h85.333v85.333H128zM0 0h85.333v85.333H0zM128 256h85.333v85.333H128zM0 128h85.333v85.333H0zM0 256h85.333v85.333H0zM256 0h85.333v85.333H256zM128 0h85.333v85.333H128zM256 128h85.333v85.333H256zM256 256h85.333v85.333H256z"
                    />
                  </svg>
                </button>
                <div class="relative w-64 ml-4 flex-shrink-1 lg:ml-0">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="w-5 h-5 text-gray-600 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </span>
                  <input
                    class="block w-full py-2 pl-10 pr-4 text-sm leading-tight text-gray-900 placeholder-gray-600 border border-gray-400 rounded-md"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <!-- avatar -->
              <div class="flex items-center flex-shrink-0 ml-6">
                <button class>
                  <svg
                    class="w-5 h-5 text-gray-500 fill-current"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M466 422c-24.813 0-45-20.187-45-45V225c0-75.387-50.82-139.126-120-158.762V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.238C141.82 85.873 91 149.613 91 225v152c0 24.813-20.187 45-45 45H31v30h180v15c0 24.813 20.187 45 45 45s45-20.187 45-45v-15h180v-30zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15.689c-4.942-.447-9.943-.689-15-.689s-10.058.242-15 .689zm15 45c74.439 0 135 60.561 135 135v137H121V225c0-74.439 60.561-135 135-135zM119.491 392H392.51c2.258 11.078 6.967 21.275 13.531 30H105.959c6.565-8.725 11.274-18.922 13.532-30zM271 467c0 8.271-6.729 15-15 15s-15-6.729-15-15v-15h30z"
                    />
                  </svg>
                </button>
                <button class="ml-4">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="avatar"
                  />
                </button>
              </div>
            </div>
            <!-- header second row -->
            <div class="flex items-center justify-between py-2">
              <!-- left -->
              <div class="sm:flex sm:items-center">
                <h2 class="text-2xl font-semibold leading-tight text-gray-900">All Issues</h2>
                <div class="flex items-center mt-1 sm:mt-0 sm:ml-6">
                  <span class="border-2 border-white rounded-full">
                    <img
                      class="object-cover w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1548795902-1e1eca7f6d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                      alt="avatar1"
                    />
                  </span>
                  <span class="-ml-2 border-2 border-white rounded-full">
                    <img
                      class="object-cover w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1519165598262-124d83b93b16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=60"
                      alt="avatar1"
                    />
                  </span>
                  <span class="-ml-2 border-2 border-white rounded-full">
                    <img
                      class="object-cover w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1529092419721-e78fb7bddfb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=60"
                      alt="avatar1"
                    />
                  </span>
                  <span class="-ml-2 border-2 border-white rounded-full">
                    <img
                      class="object-cover w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1517865288-978fcb780652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=60"
                      alt="avatar1"
                    />
                  </span>
                </div>
              </div>
              <!-- right -->
              <div class="flex">
                <span class="hidden p-1 bg-gray-200 border rounded-md sm:inline-flex">
                  <button class="px-2 py-1 rounded focus:outline-none">
                    <svg
                      class="w-6 h-6 text-gray-600 fillCurrent"
                      width="24"
                      height="24"
                      viewBox="0 -53 384 384"
                    >
                      <path
                        d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                      />
                    </svg>
                  </button>
                  <button class="px-2 py-1 bg-white rounded shadow focus:outline-none">
                    <span class="flex items-center justify-center w-6 h-6">
                      <span class="burger"></span>
                    </span>
                  </button>
                </span>
                <button
                  class="flex items-center py-2 pl-3 pr-4 ml-5 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
                >
                  <svg
                    class="w-3 h-3 text-white fill-current"
                    height="8"
                    viewBox="0 0 448 448"
                    width="8"
                  >
                    <path
                      d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
                    />
                  </svg>
                  <span class="ml-2">New Issue</span>
                </button>
              </div>
            </div>
          </div>
          <!-- xs button -->
          <div class="flex px-4 py-1 bg-gray-200 border-t border-b sm:hidden">
            <button
              class="flex items-center justify-center flex-1 px-2 py-1 rounded focus:outline-none"
            >
              <svg
                class="w-6 h-6 text-gray-600 fillCurrent"
                width="24"
                height="24"
                viewBox="0 -53 384 384"
              >
                <path
                  d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                />
              </svg>
              <span class="ml-2 text-sm font-medium leading-none text-gray-600">List</span>
            </button>
            <button
              class="flex items-center justify-center flex-1 px-2 py-1 bg-white rounded shadow focus:outline-none"
            >
              <span class="flex justify-center w-6 h-6">
                <span class="burger"></span>
              </span>
              <span class="ml-2 text-sm font-medium leading-none text-gray-900">Board</span>
            </button>
          </div>
        </header>
      </div>
      <div class="flex-1 overflow-auto">
        <main class="inline-flex h-full p-3 overflow-hidden">
          <!-- Blacklog -->
          <div class="flex flex-col flex-shrink-0 ml-3 bg-gray-100 rounded-md w-80">
            <h3 class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700">Backlog</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="px-3 pt-1 pb-3">
                <li v-for="i in 8" :key="i" :class="{'mt-3': i > 0}">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-semibold leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          class="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1548795902-1e1eca7f6d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div class="flex items-baseline justify-between">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div class="mt-2">
                        <span
                          class="inline-flex items-center px-2 py-1 leading-tight bg-teal-100 rounded"
                        >
                          <svg class="w-2 h-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-col flex-shrink-0 ml-3 bg-gray-100 rounded-md w-80">
            <h3 class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700">In Progress</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="px-3 pt-1 pb-3">
                <li v-for="i in 4" :key="i" :class="{'mt-3': i > 0}">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-semibold leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          class="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1548795902-1e1eca7f6d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div class="flex items-baseline justify-between">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div class="mt-2">
                        <span
                          class="inline-flex items-center px-2 py-1 leading-tight bg-teal-100 rounded"
                        >
                          <svg class="w-2 h-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-col flex-shrink-0 ml-3 bg-gray-100 rounded-md w-80">
            <h3
              class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700"
            >Ready for Review</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="px-3 pt-1 pb-3">
                <li v-for="i in 2" :key="i" :class="{'mt-3': i > 0}">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-semibold leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          class="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1548795902-1e1eca7f6d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div class="flex items-baseline justify-between">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div class="mt-2">
                        <span
                          class="inline-flex items-center px-2 py-1 leading-tight bg-teal-100 rounded"
                        >
                          <svg class="w-2 h-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-col flex-shrink-0 ml-3 bg-gray-100 rounded-md w-80">
            <h3 class="flex-shrink-0 px-3 pt-3 pb-1 text-sm font-medium text-gray-700">Done</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="px-3 pt-1 pb-3">
                <li v-for="i in 6" :key="i" :class="{'mt-3': i > 0}">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-semibold leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          class="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1548795902-1e1eca7f6d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div class="flex items-baseline justify-between">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div class="mt-2">
                        <span
                          class="inline-flex items-center px-2 py-1 leading-tight bg-teal-100 rounded"
                        >
                          <svg class="w-2 h-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    test() {console.log('ads')}
  }
}
</script>
<style scoped>
span.burger {
  position: relative;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
span.burger::before {
  content: "";
  left: -0.4rem;
  top: 0;
  position: absolute;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
span.burger::after {
  content: "";
  left: 0.45rem;
  top: 0;
  position: absolute;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
@media only screen and (min-width: 1024px) {
  .custom-translate-x-0 {
    transform: translateX(0) !important;
  }
}
</style>