<template>
  <div class="flex flex-col h-screen">
    <header class="flex flex-shrink-0">
      <!-- header left -->
      <div class="flex-shrink-0 w-64 px-4 py-3 bg-gray-800">
        <button class="flex items-center w-full">
          <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
            alt="avatar"
          />
          <span class="ml-4 mr-2 text-sm font-medium text-white">Monica White</span>
          <svg viewBox="0 0 551.13 551.13" class="w-3 h-3 ml-auto text-gray-400 fill-current">
            <path d="M275.565 361.679L51.668 137.783H0l275.565 275.565L551.13 137.783h-51.668z" />
          </svg>
        </button>
      </div>
      <!-- header right -->
      <div class="flex items-center justify-between flex-1 px-6 bg-gray-700">
        <!-- nav menu -->
        <nav class="flex">
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium leading-none text-white bg-gray-800 rounded-lg"
          >Mailbox</a>
          <a
            href="#"
            class="px-3 py-2 ml-2 text-sm font-medium leading-none text-white rounded-lg hover:bg-gray-600"
          >Customers</a>
          <a
            href="#"
            class="px-3 py-2 ml-2 text-sm font-medium leading-none text-white rounded-lg hover:bg-gray-600"
          >Reporting</a>
          <a
            href="#"
            class="px-3 py-2 ml-2 text-sm font-medium leading-none text-white rounded-lg hover:bg-gray-600"
          >Manage</a>
        </nav>
        <!-- search -->
        <div class="flex items-center">
          <div class="relative w-64">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </span>
            <input
              class="block w-full py-2 pl-8 pr-4 text-sm leading-tight text-white placeholder-gray-400 bg-gray-900 rounded-lg focus:bg-white focus:text-gray-900 focus:placeholder-gray-600 focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <button class="ml-4 text-gray-400 hover:text-gray-200">
            <svg
              class="w-5 h-5 fill-current"
              height="512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M466 422c-24.813 0-45-20.187-45-45V225c0-75.387-50.82-139.126-120-158.762V45c0-24.813-20.187-45-45-45s-45 20.187-45 45v21.238C141.82 85.873 91 149.613 91 225v152c0 24.813-20.187 45-45 45H31v30h180v15c0 24.813 20.187 45 45 45s45-20.187 45-45v-15h180v-30zM241 45c0-8.271 6.729-15 15-15s15 6.729 15 15v15.689c-4.942-.447-9.943-.689-15-.689s-10.058.242-15 .689zm15 45c74.439 0 135 60.561 135 135v137H121V225c0-74.439 60.561-135 135-135zM119.491 392H392.51c2.258 11.078 6.967 21.275 13.531 30H105.959c6.565-8.725 11.274-18.922 13.532-30zM271 467c0 8.271-6.729 15-15 15s-15-6.729-15-15v-15h30z"
              />
            </svg>
          </button>
          <button class="ml-4 text-gray-400 hover:text-gray-200">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 512 512">
              <circle cx="256" cy="378.5" r="25" />
              <path
                d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"
              />
              <path
                d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"
              />
            </svg>
          </button>
        </div>
        <!-- search end -->
      </div>
      <!-- header-right end -->
    </header>
    <div class="flex flex-1 overflow-hidden">
      <!-- side bar -->
      <div class="w-64 p-6 overflow-y-auto bg-gray-100">
        <nav>
          <!-- mail boxes -->
          <h2 class="text-xs font-semibold tracking-wide text-gray-600 uppercase">Mailboxes</h2>
          <div class="mt-2">
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 -mx-3 text-sm font-medium bg-gray-200 rounded-lg"
            >
              <span class="inline-flex items-center">
                <svg class="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Inbox</span>
              </span>
              <span
                class="inline-block w-8 py-1 text-xs font-semibold leading-none text-center text-gray-900 bg-gray-300 rounded-full"
              >6</span>
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 mt-2 -mx-3 text-sm font-medium rounded-lg hover:bg-gray-200"
            >
              <span class="inline-flex items-center">
                <svg class="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M480.574 272L394.86 152l85.714-120H166.426V0h-90v422h-45v90h180v-90h-45V272zM422.279 62l-64.286 90 64.286 90H166.426V62zM181.426 452v30h-120v-30zm-45-30h-30V30h30z"
                  />
                </svg>
                <span class="ml-2 text-gray-700">Flagged</span>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 mt-2 -mx-3 text-sm font-medium rounded-lg hover:bg-gray-200"
            >
              <span class="inline-flex items-center">
                <svg class="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M488 40h-48v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8h-16v-8a8 8 0 00-16 0v8H88v-8a8 8 0 00-16 0v8H24a8 8 0 00-8 8v384a8 8 0 008 8h335.436l40.969 40.97a23.991 23.991 0 0033.935 0l22.63-22.63a23.85 23.85 0 007.03-16.973c0-.458-.016-.913-.042-1.367H488a8 8 0 008-8V48a8 8 0 00-8-8zM267.25 291.251l20.737 7.975-12.761 12.762zm62.142 44.573a8 8 0 005.469-7.59v-3.318l71.2 71.2-11.317 11.314-70.044-70.043zm87.982 71.6l11.313 11.312-33.941 33.941-11.312-11.313zm-98.513-84.96l-11.5 3.833a8 8 0 00-5.059 5.06l-3.833 11.5H287.1l-5.59-14.532 22.818-22.818 14.532 5.59zm-14.627 36.392a8 8 0 007.59-5.47l1.563-4.69 70.043 70.043-11.311 11.311-71.193-71.194zm141.421 88.164l-22.634 22.64a7.986 7.986 0 01-11.3-.005l-5.66-5.655L440 430.056l5.654 5.654a8 8 0 010 11.315zM480 424h-23.426L332.52 299.945l-.015.014a7.96 7.96 0 00-2.772-1.819l-73.539-28.285a8 8 0 00-10.339 10.339l6.08 15.806H88a8.009 8.009 0 01-8-8v-32a56.063 56.063 0 0156-56h200a40.068 40.068 0 0039.2-32.02c.267.005.532.02.8.02a8 8 0 000-16 24.028 24.028 0 01-24-24v-8h20.687l13.656 13.657a8 8 0 0011.314 0L411.313 120H432v8a24.028 24.028 0 01-24 24 8 8 0 000 16v32c0 27.643-12.53 58.765-29.8 74a8 8 0 0010.588 12C409.522 267.7 424 232.339 424 200v-35.35A40.052 40.052 0 00448 128v-16a8 8 0 00-8-8h-32a8 8 0 00-5.657 2.343L392 116.687l-10.343-10.344A8 8 0 00376 104h-32a8 8 0 00-8 8v16a40.048 40.048 0 0023.578 36.459A24.037 24.037 0 01336 184h-68l-21.6-28.8a8 8 0 00-12.8 0L212 184h-76a72.081 72.081 0 00-72 72v32a24.027 24.027 0 0024 24h56v8a40.045 40.045 0 0040 40h16a8 8 0 008-8v-40h50.088l16.052 41.733a7.956 7.956 0 001.824 2.777l-.009.01L343.436 424H32V56h40v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h16v8a8 8 0 0016 0v-8h40zM160 312h32v32h-8a24.027 24.027 0 01-24-24zm72-128l8-10.667L248 184z"
                  />
                  <circle cx="128" cy="256" r="8" />
                </svg>
                <span class="ml-2 text-gray-700">Drafts</span>
              </span>
              <span
                class="inline-block w-8 py-1 text-xs font-semibold leading-none text-center text-gray-700 bg-gray-300 rounded-full"
              >2</span>
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 mt-2 -mx-3 text-sm font-medium rounded-lg hover:bg-gray-200"
            >
              <span class="inline-flex items-center">
                <svg class="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 64 64">
                  <g data-name="Payment">
                    <path
                      d="M61 16H27V9a1 1 0 00-1-1V5a3 3 0 00-6 0v3a1 1 0 00-1 1v3h-4a1 1 0 00-1 1v3H3a1 1 0 00-1 1v26a1 1 0 001 1h16v7a.967.967 0 00.04.29l3 10a1 1 0 001.92 0l3-10A.967.967 0 0027 51v-7h8v1a1 1 0 001 1h1v2h-1a1 1 0 00-1 1v4a1 1 0 001 1h2v2h-1a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1v-3h1a1 1 0 001-1v-4a1 1 0 00-1-1h-2v-2h1a1 1 0 001-1v-4a1 1 0 00-1-1h7a1 1 0 001-1V17a1 1 0 00-1-1zM19 42H4V18h10v7h2v-7h3zm0-26h-3v-2h3zm3-11a1 1 0 012 0v3h-2zm1 52.52L21.34 52h3.32zM25 50h-4V14h4zm0-38h-4v-2h4zm12 40v-2h2v2zm14-2v2h-2v-2zm-2-6v-2h2v2zm0 4h-2v-2h2zm-2-4h-2v-2h2zm0 6v2h-2v-2zm-2-2h-2v-2h2zm-2-4h-2v-2h2zm0 6v2h-2v-2zm-2-2h-2v-2h2zm-2-4h-2v-2h2zm1 16h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm2-6v2h-2v-2zm-1-6h-2v-2h2zm7-6h-7v-1a1 1 0 00-1-1H36a1 1 0 00-1 1v1h-8V18h33z"
                    />
                    <path
                      d="M7 26h4a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2H8zM12 28h4v2h-4zM6 28h4v2H6zM15.237 36.231a1 1 0 00-1.279 0L12.2 37.7l-1.759-1.467a1 1 0 00-1.281 0L7.4 37.7l-1.759-1.468-1.282 1.536 2.4 2a1 1 0 001.282 0L9.8 38.3l1.759 1.467a1 1 0 001.279 0L14.6 38.3l1.763 1.468 1.28-1.538zM6 32h10v2H6zM44 22a9 9 0 109 9 9.014 9.014 0 00-9-9zm0 16a7 7 0 117-7 7.008 7.008 0 01-7 7z"
                    />
                    <path
                      d="M47 33a3.01 3.01 0 01-2 2.82V37h-2v-1.18A3.01 3.01 0 0141 33h2a1 1 0 101-1 3 3 0 01-1-5.82V25h2v1.18A3.01 3.01 0 0147 29h-2a1 1 0 10-1 1 3.009 3.009 0 013 3z"
                    />
                  </g>
                </svg>
                <span class="ml-2 text-gray-700">Assigned</span>
              </span>
              <span
                class="inline-block w-8 py-1 text-xs font-semibold leading-none text-center text-gray-700 bg-gray-300 rounded-full"
              >1</span>
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 mt-2 -mx-3 text-sm font-medium rounded-lg hover:bg-gray-200"
            >
              <span class="inline-flex items-center">
                <svg class="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 512 512">
                  <path
                    d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z"
                  />
                  <path
                    d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z"
                  />
                </svg>
                <span class="ml-2 text-gray-700">Closed</span>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center justify-between px-3 py-2 mt-2 -mx-3 text-sm font-medium rounded-lg hover:bg-gray-200"
            >
              <span class="inline-flex items-center">
                <svg
                  class="w-4 h-4 text-gray-500 fill-current"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M444 64H334.39C326.957 27.529 294.634 0 256 0s-70.957 27.529-78.39 64H68c-19.851 0-36 16.149-36 36v24c0 18.498 14.026 33.776 32 35.772V456c0 30.878 25.122 56 56 56h272c30.878 0 56-25.122 56-56V159.772c17.974-1.997 32-17.274 32-35.772v-24c0-19.851-16.149-36-36-36zM256 32c20.858 0 38.643 13.377 45.248 32h-90.496c6.605-18.623 24.39-32 45.248-32zm160 424c0 13.234-10.766 24-24 24H120c-13.234 0-24-10.766-24-24V160h320zm32-332c0 2.206-1.794 4-4 4H68c-2.206 0-4-1.794-4-4v-24c0-2.206 1.794-4 4-4h376c2.206 0 4 1.794 4 4z"
                  />
                  <path
                    d="M388.8 286.4c-5.302-7.07-15.331-8.503-22.4-3.2l-10.464 7.848C343.414 247.46 303.365 216 256 216c-31.146 0-60.382 13.784-80.212 37.817-5.624 6.816-4.657 16.9 2.159 22.524s16.901 4.657 22.524-2.159C214.2 257.543 234.439 248 256 248c32.782 0 60.495 21.764 69.172 51.917l-18.034-3.607c-8.663-1.735-17.094 3.886-18.827 12.552-1.733 8.665 3.887 17.094 12.552 18.827l40 8a16 16 0 0012.738-2.889l32-24c7.068-5.302 8.501-15.331 3.199-22.4zM334.053 363.658c-6.814-5.623-16.899-4.657-22.524 2.159C297.8 382.457 277.561 392 256 392c-30.418 0-56.94-19.276-67.325-46.498l13.383 5.353c8.204 3.282 17.516-.709 20.798-8.913 3.282-8.205-.708-17.516-8.913-20.798l-40-16a15.997 15.997 0 00-15.542 2.056l-32 24c-7.069 5.302-8.502 15.331-3.2 22.4 3.143 4.191 7.947 6.401 12.812 6.401 3.34 0 6.71-1.042 9.588-3.201l10.505-7.878c5.174 17.93 15.11 34.239 29.038 47.208C204.446 414.102 229.61 424 256 424c31.146 0 60.382-13.784 80.212-37.817 5.623-6.816 4.657-16.901-2.159-22.525z"
                  />
                </svg>
                <span class="ml-2 text-gray-700">Junk</span>
              </span>
            </a>
          </div>
          <h2 class="mt-8 text-xs font-semibold tracking-wide text-gray-600 uppercase">Folders</h2>
          <div class="mt-3">
            <a href="#" class="block text-sm font-medium text-gray-700">Refunds</a>
            <a href="#" class="block mt-4 text-sm font-medium text-gray-700">Discounts</a>
            <a href="#" class="block mt-4 text-sm font-medium text-gray-700">Bugs</a>
          </div>
        </nav>
      </div>
      <main class="flex flex-1 bg-gray-200">
        <!-- list inbox -->
        <div class="flex flex-col flex-grow w-full max-w-xs bg-gray-200 border-l border-r">
          <!-- sort -->
          <div class="flex items-center justify-between flex-shrink-0 px-4 py-2 border-b">
            <button class="flex items-center text-xs font-semibold text-gray-600">
              Sorted by date
              <svg
                viewBox="0 0 551.13 551.13"
                class="w-3 h-3 ml-2 text-gray-500 fill-current"
              >
                <path
                  d="M275.565 361.679L51.668 137.783H0l275.565 275.565L551.13 137.783h-51.668z"
                />
              </svg>
            </button>
            <button>
              <svg class="w-4 h-4 ml-auto text-gray-500 fill-current" viewBox="0 0 512 512">
                <path
                  d="M0 0h512v32H0zM0 80h416v32H0zM0 160h320v32H0zM0 240h224v32H0zM0 320h160v32H0zM0 400h128v32H0zM0 480h64v32H0zM427.312 164.688c-6.256-6.256-16.368-6.256-22.624 0l-48 48 22.624 22.624L400 214.624V464h32V214.624l20.688 20.688 22.624-22.624-48-48z"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 overflow-y-auto">
            <a
              v-for="i in 4"
              :key="i"
              href="#"
              class="block px-6 pt-3 pb-4 bg-white"
              :class="{'border-t': i > 0}"
            >
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                <span class="text-sm text-gray-600">2 days ago</span>
              </div>
              <p class="text-sm text-gray-900">Refund</p>
              <p
                class="mt-2 text-sm text-gray-600"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, cumque consequatur!</p>
            </a>
          </div>
        </div>
        <!-- main-right -->
        <div class="flex flex-col flex-1 w-0">
          <!-- 2-tool rows -->
          <div class="relative flex-shrink-0 border-b shadow-end">
            <!-- first row -->
            <div class="flex items-center justify-between px-5 py-4 bg-gray-100 border-b">
              <div class="flex items-center">
                <button class>
                  <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 492 492">
                    <path
                      d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"
                    />
                  </svg>
                </button>
                <button class="ml-5">
                  <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 512 512">
                    <path
                      d="M271 44.49V0h-30v44.49L91 164.3V512h330V164.3zm0 127.238c0 8.245-6.729 14.952-15 14.952-8.272 0-15-6.707-15-14.952s6.728-14.952 15-14.952c8.271-.001 15 6.706 15 14.952zM391 482H121V178.733l120-95.849v46.468c-17.459 6.186-30 22.841-30 42.375 0 24.787 20.186 44.952 45 44.952 24.813 0 45-20.165 45-44.952 0-19.534-12.541-36.189-30-42.375V82.885l120 95.849z"
                    />
                    <path d="M165 255h180v30H165zM165 330h180v30H165zM165 405h180v30H165z" />
                  </svg>
                </button>
                <button class="ml-5">
                  <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 64 64">
                    <g data-name="Payment">
                      <path
                        d="M61 16H27V9a1 1 0 00-1-1V5a3 3 0 00-6 0v3a1 1 0 00-1 1v3h-4a1 1 0 00-1 1v3H3a1 1 0 00-1 1v26a1 1 0 001 1h16v7a.967.967 0 00.04.29l3 10a1 1 0 001.92 0l3-10A.967.967 0 0027 51v-7h8v1a1 1 0 001 1h1v2h-1a1 1 0 00-1 1v4a1 1 0 001 1h2v2h-1a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1v-3h1a1 1 0 001-1v-4a1 1 0 00-1-1h-2v-2h1a1 1 0 001-1v-4a1 1 0 00-1-1h7a1 1 0 001-1V17a1 1 0 00-1-1zM19 42H4V18h10v7h2v-7h3zm0-26h-3v-2h3zm3-11a1 1 0 012 0v3h-2zm1 52.52L21.34 52h3.32zM25 50h-4V14h4zm0-38h-4v-2h4zm12 40v-2h2v2zm14-2v2h-2v-2zm-2-6v-2h2v2zm0 4h-2v-2h2zm-2-4h-2v-2h2zm0 6v2h-2v-2zm-2-2h-2v-2h2zm-2-4h-2v-2h2zm0 6v2h-2v-2zm-2-2h-2v-2h2zm-2-4h-2v-2h2zm1 16h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm0-6h2v2h-2zm4 6h-2v-2h2zm2-6v2h-2v-2zm-1-6h-2v-2h2zm7-6h-7v-1a1 1 0 00-1-1H36a1 1 0 00-1 1v1h-8V18h33z"
                      />
                      <path
                        d="M7 26h4a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2H8zM12 28h4v2h-4zM6 28h4v2H6zM15.237 36.231a1 1 0 00-1.279 0L12.2 37.7l-1.759-1.467a1 1 0 00-1.281 0L7.4 37.7l-1.759-1.468-1.282 1.536 2.4 2a1 1 0 001.282 0L9.8 38.3l1.759 1.467a1 1 0 001.279 0L14.6 38.3l1.763 1.468 1.28-1.538zM6 32h10v2H6zM44 22a9 9 0 109 9 9.014 9.014 0 00-9-9zm0 16a7 7 0 117-7 7.008 7.008 0 01-7 7z"
                      />
                      <path
                        d="M47 33a3.01 3.01 0 01-2 2.82V37h-2v-1.18A3.01 3.01 0 0141 33h2a1 1 0 101-1 3 3 0 01-1-5.82V25h2v1.18A3.01 3.01 0 0147 29h-2a1 1 0 10-1 1 3.009 3.009 0 013 3z"
                      />
                    </g>
                  </svg>
                </button>
                <button class="ml-5">
                  <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 512.326 512.326">
                    <path
                      d="M435 151.163v-65H171.213l-40-40H0v420h431.643l80.684-315zm-405-75h88.787l40 40H405v35H78.599L30 326.118zm378.357 360H30.568l70.833-255h372.272z"
                    />
                    <path
                      d="M287.885 313.638c10.265-10.799 16.585-25.381 16.585-41.42 0-33.182-26.995-60.177-60.176-60.177s-60.176 26.995-60.176 60.177c0 16.039 6.32 30.621 16.585 41.42C172.881 329.04 154 358.698 154 392.689v15h180.588v-15c0-33.991-18.881-63.649-46.703-79.051zm-73.767-41.42c0-16.64 13.537-30.177 30.176-30.177s30.176 13.537 30.176 30.177-13.537 30.177-30.176 30.177-30.176-13.538-30.176-30.177zm-28.229 105.471c6.684-26.014 30.336-45.294 58.405-45.294s51.721 19.28 58.405 45.294z"
                    />
                  </svg>
                </button>
                <button class="ml-5">
                  <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 426.667 426.667">
                    <circle
                      cx="42.667"
                      cy="213.333"
                      r="42.667"
                      data-original="#000000"
                      class="active-path"
                    />
                    <circle
                      cx="213.333"
                      cy="213.333"
                      r="42.667"
                      data-original="#000000"
                      class="active-path"
                    />
                    <circle
                      cx="384"
                      cy="213.333"
                      r="42.667"
                      data-original="#000000"
                      class="active-path"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex items-center">
                <button class="inline-flex justify-center">
                  <svg viewBox="0 0 551.13 551.13" class="w-3 h-3 ml-2 text-gray-600 fill-current">
                    <path
                      d="M275.565 361.679L51.668 137.783H0l275.565 275.565L551.13 137.783h-51.668z"
                    />
                  </svg>
                </button>
                <button class="inline-flex justify-center">
                  <svg viewBox="0 0 551.13 551.13" class="w-3 h-3 ml-2 text-gray-600 fill-current">
                    <path
                      d="M275.565 189.451l223.897 223.897h51.668L275.565 137.783 0 413.348h51.668z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between px-5 py-4 bg-white">
              <h3
                class="text-xl text-gray-900 truncate"
              >Re: Student discount?sertew rwersedfsdr ewsr</h3>
              <div class="flex-shrink-0 ml-4">
                <span>#1428</span>
                <span
                  class="px-2 py-1 ml-2 text-sm font-semibold leading-none text-green-900 bg-green-200 rounded-full"
                >Active</span>
              </div>
            </div>
          </div>
          <div class="flex-1 p-3 overflow-y-auto">
            <article class="px-10 pt-6 pb-8 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Joe Armstrong</span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600">Yesterday at 7:24 AM</span>
                  <img
                    class="object-cover w-8 h-8 ml-4 rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="mt-6 text-sm text-gray-800">
                <p>Thanks so much!! Can't wait to try it out :)</p>
              </div>
            </article>
            <article class="px-10 pt-6 pb-8 mt-2 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Monica White</span>
                  <span class="text-gray-600">replied</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600">Yesterday at 10:09 AM</span>
                  <img
                    class="object-cover w-8 h-8 ml-4 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="mt-6 text-sm text-gray-800">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique fuga delectus tempora quis a!</p>
                <p
                  class="mt-4"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore sed pariatur accusantium, reprehenderit itaque?</p>
                <p class="mt-4 font-semibold text-gray-900">Monica White</p>
                <p>Customer Service</p>
              </div>
            </article>
            <article class="px-10 pt-6 pb-8 mt-2 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Joe Armstrong</span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600">Yesterday at 11:24 AM</span>
                  <img
                    class="object-cover w-8 h-8 ml-4 rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                    alt="avatar"
                  />
                </div>
              </div>
              <div class="mt-6 text-sm text-gray-800">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique fuga delectus tempora quis a!</p>
                <p
                  class="mt-4"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore sed pariatur accusantium, reprehenderit itaque?</p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>