<template>
<!-- https://www.allbirds.com/collections/womens -->
  <div>
    <!-- header start -->
    <header class="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-white">
      <div class="absolute inset-0 shadow-lg opacity-50"></div>
      <div class="flex">
        <button class="w-8 h-8">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div class="flex">
        <img class="h-9" src="http://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt="Allbirds">
      </div>
      <div class="flex">
        <button class="w-8 h-8">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </button>
      </div>
    </header>
    <!-- header end -->
    <!-- main start -->
    <main>
      <div class="lg:hidden">
        <div class="flex items-center justify-between px-8 py-4">
          <div>
            <div class="text-xs font-medium text-gray-900">
              <a href="#" class="font-bold underline">Home</a>
              <span>/</span>
            </div>
            <div class="text-lg font-semibold text-gray-900 md:text-xl">Women's Shoes</div>
          </div>
          <div class="flex">
            <button class="w-6 h-6">
              <svg class="transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </button>
          </div>
        </div>
        <!-- horizontal scroll categories start -->
        <div class="py-3 overflow-x-auto bg-gray-100 scrollbar-hidden">
          <div class="inline-flex px-8 space-x-5 text-sm md:px-12">
            <a href="#" class="text-gray-800 whitespace-nowrap" v-for="category in categories" :key="category">{{category}}</a>
          </div>
        </div>
        <!-- horizontal scroll categories end -->
      </div>
      <div class="px-8 py-4 space-y-12">
        <div v-for="product in products" :key="product.name">
          <div>
            <div>
              <h2 class="text-lg font-semibold md:text-xl">{{product.name}}</h2>
              <p class="text-sm font-medium text-gray-800">{{product.description}}</p>
            </div>
            <!-- product content start -->
            <div class="mt-4 md:grid md:grid-cols-2 md:gap-6 md:items-start">
              <div class="shadow-xl">
                <div class="shadow-lg">
                  <a href="#">
                    <div>
                      <img class="w-full" :src="product.styles[0].image" :alt="product.styles[0].name">
                    </div>
                    <div class="px-4 pt-3">
                      <h3 class="text-sm font-bold">{{product.name}}</h3>
                      <p class="mt-2 text-sm font-medium text-gray-800">{{product.styles[0].name}}</p>
                    </div>
                  </a>
                  <div class="px-4 pb-4 mt-1">
                    <p class="mt-2 text-sm font-medium text-gray-800">{{product.styles[0].price}}</p>
                    <div class="flex items-center mt-4 space-x-6">
                      <span class="md:flex-1 md:min-w-0 md:flex" v-for="(style, i) in product.styles.slice(0, 5)" :key="style.name">
                        <button class="flex flex-col w-6 h-6 overflow-hidden border border-gray-400 rounded-full md:h-full md:aspect-w-1 md:aspect-h-1 md:rounded-none md:w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-900"
                          :class="{'ring-offset-1 ring-gray-300 ring-2': i === 0}">
                          <span class="sr-only">{{style.name}}</span>
                          <span class="flex flex-col w-full h-full transform -rotate-45 md:hidden">
                            <span class="w-6 h-3" :style="{backgroundColor: style.colors[0]}"></span>
                            <span class="w-6 h-3" :style="{backgroundColor: style.colors[1]}"></span>
                          </span>
                          <span class="hidden md:w-full md:h-full md:flex">
                            <img :src="style.image" alt="image md">
                          </span>
                        </button>
                      </span>
                      <button class="flex items-center justify-center border rounded-full hover:border-gray-400 h-7 w-7">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </div>
                  <!-- quick add -->
                  <div class="border-t">
                    <button class="flex justify-between w-full px-4 py-2 text-sm">
                      <span class="font-semibold">Quick Add</span>
                      <span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="relative">
                  <img class="w-full" :src="product.previewImage" alt="preview image">
                  <div class="absolute inset-0">
                    <div class="absolute inset-0 top-1/2 opacity-95 bg-gradient-to-t from-gray-900"></div>
                    <div class="absolute inset-x-0 bottom-0">
                      <p class="px-6 pb-6 font-bold text-white capitalize">{{product.previewText}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product content end -->
          </div>
        </div>
      </div>
    </main>
    <!-- main end -->
    <footer class="py-12 bg-gray-800">
      <div class="px-6">
        <form action="#">
          <div>
            <label for="email_address" class="block text-sm font-medium text-white">Enter your email to stay in touch!</label>
            <div class="relative">
              <input type="text" id="email_address" class="block w-full px-2 py-3 mt-2 text-sm font-bold text-white transition bg-gray-600 border-2 border-transparent focus:ring-0 focus:border-white">
              <div class="absolute inset-0 border-b-2 border-white pointer-events-none" aria-hidden></div>
            </div>
          </div>
          <div class="mt-6">
            <button class="block w-full py-4 text-sm font-bold tracking-widest text-white bg-gray-600 rounded hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none">SIGN UP</button>
          </div>
        </form>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Allbirds clone'
    }
  },
  data() {
    return {
      categories: ['Running Shoes', 'Everyday Sneakers', 'Slip-Ons', 'High Tops', 'Boat Shoes', 'Flats', 'Weather Repellent Shoes'],
      products: [
        {
          name: 'Women\'s Wool Runner Mizzles', description: 'Our weather-ready sneaker made with merino wool and Puddle Guard',
          previewText: 'Breezy Feel, Light Material',
          previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/WwyP13YkRBPf85u8bmKSI/1f5450d0d37ae88a826d8f62c8d9cbd0/SummerCore2020-M_Chalk_TT_W_Marine_TR_Biking-0274.jpg',
          styles: [
            {
              name: 'Natural Gray (Cream Sole)',
              price: '$95',
              colors: ['rgb(214, 224, 232)', 'rgb(53, 93, 107)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4oLF7eyh0cAGuRj6TqySMK/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['rgb(64, 88, 95)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(220, 220, 220) 50%)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1'
            },
            {
              name: 'Cardamon (Cream Sole)',
              price: '$115',
              colors: ['rgb(237, 237, 237)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7fDQVQThCJBT8quaOIMcqX/2'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['rgb(45, 44, 47)', 'rgb(0, 0, 0)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6kgfUpOcNV92xLt7zyGjyx/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['rgb(222, 185, 157)', 'rgb(237, 98, 79)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3DryEDjMRkWqMRnHPgsSQn/1'
            },
            {
              name: 'Aurora (Cream Sole)',
              price: '$115',
              colors: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/54WF7yeBSLVSyMkBubopeM/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['rgb(150, 49, 49)', 'rgb(165, 163, 164)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32zWjIaCok5sOZzwfovTPo/1'
            },
            {
              name: 'True Block (Black Sole)',
              price: '$115',
              colors: ['rgb(1, 73, 118)', 'rgb(116, 192, 234)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5JNjDFzmExA2dm0NxiRLzw/2'
            }
          ],
        },
        {
          name: 'Women\'s Tree Runners', description: 'Our everyday sneaker made with breezy eucalyptus tree',
          previewText: 'Breezy Feel, Light Material',
          previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/WwyP13YkRBPf85u8bmKSI/1f5450d0d37ae88a826d8f62c8d9cbd0/SummerCore2020-M_Chalk_TT_W_Marine_TR_Biking-0274.jpg',
          styles: [
            {
              name: 'Kauri Marine Blue (White Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(53, 93, 107)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5j8qUlAiAUaUGHhhAwNUEH/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['rgb(64, 88, 95)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(220, 220, 220) 50%)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1'
            },
            {
              name: 'Cardamon (Cream Sole)',
              price: '$115',
              colors: ['rgb(237, 237, 237)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7fDQVQThCJBT8quaOIMcqX/2'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['rgb(45, 44, 47)', 'rgb(0, 0, 0)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6kgfUpOcNV92xLt7zyGjyx/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['rgb(222, 185, 157)', 'rgb(237, 98, 79)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3DryEDjMRkWqMRnHPgsSQn/1'
            },
            {
              name: 'Aurora (Cream Sole)',
              price: '$115',
              colors: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/54WF7yeBSLVSyMkBubopeM/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['rgb(150, 49, 49)', 'rgb(165, 163, 164)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32zWjIaCok5sOZzwfovTPo/1'
            },
            {
              name: 'True Block (Black Sole)',
              price: '$115',
              colors: ['rgb(1, 73, 118)', 'rgb(116, 192, 234)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5JNjDFzmExA2dm0NxiRLzw/2'
            }
          ],
        },
        {
          name: 'Women\'s Tree Breezers', description: 'Our classic ballet flat made with breezy eucalyptus tree.',
          previewText: 'Breezy Feel, Light Material',
          previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/WwyP13YkRBPf85u8bmKSI/1f5450d0d37ae88a826d8f62c8d9cbd0/SummerCore2020-M_Chalk_TT_W_Marine_TR_Biking-0274.jpg',
          styles: [
            {
              name: 'Bough (Taupe Sole)',
              price: '$95',
              colors: ['rgb(214, 224, 232)', 'rgb(53, 93, 107)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/4HgQYevWRotqmbdA6qPMOE/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['rgb(64, 88, 95)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(220, 220, 220) 50%)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1'
            },
            {
              name: 'Cardamon (Cream Sole)',
              price: '$115',
              colors: ['rgb(237, 237, 237)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7fDQVQThCJBT8quaOIMcqX/2'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['rgb(45, 44, 47)', 'rgb(0, 0, 0)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6kgfUpOcNV92xLt7zyGjyx/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['rgb(222, 185, 157)', 'rgb(237, 98, 79)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3DryEDjMRkWqMRnHPgsSQn/1'
            },
            {
              name: 'Aurora (Cream Sole)',
              price: '$115',
              colors: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/54WF7yeBSLVSyMkBubopeM/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['rgb(150, 49, 49)', 'rgb(165, 163, 164)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32zWjIaCok5sOZzwfovTPo/1'
            },
            {
              name: 'True Block (Black Sole)',
              price: '$115',
              colors: ['rgb(1, 73, 118)', 'rgb(116, 192, 234)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5JNjDFzmExA2dm0NxiRLzw/2'
            }
          ],
        },
        {
          name: 'Women\'s Wool Runners', description: 'Our original everyday sneaker made with cozy merino wool.',
          previewText: 'Breezy Feel, Light Material',
          previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/WwyP13YkRBPf85u8bmKSI/1f5450d0d37ae88a826d8f62c8d9cbd0/SummerCore2020-M_Chalk_TT_W_Marine_TR_Biking-0274.jpg',
          styles: [
            {
              name: 'Natual Grey (Light Grey Sole)',
              price: '$95',
              colors: ['rgb(214, 224, 232)', 'rgb(53, 93, 107)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5PIOvGho6fumKEdjq2M914/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['rgb(64, 88, 95)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(220, 220, 220) 50%)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1'
            },
            {
              name: 'Cardamon (Cream Sole)',
              price: '$115',
              colors: ['rgb(237, 237, 237)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7fDQVQThCJBT8quaOIMcqX/2'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['rgb(45, 44, 47)', 'rgb(0, 0, 0)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6kgfUpOcNV92xLt7zyGjyx/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['rgb(222, 185, 157)', 'rgb(237, 98, 79)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3DryEDjMRkWqMRnHPgsSQn/1'
            },
            {
              name: 'Aurora (Cream Sole)',
              price: '$115',
              colors: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/54WF7yeBSLVSyMkBubopeM/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['rgb(150, 49, 49)', 'rgb(165, 163, 164)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32zWjIaCok5sOZzwfovTPo/1'
            },
            {
              name: 'True Block (Black Sole)',
              price: '$115',
              colors: ['rgb(1, 73, 118)', 'rgb(116, 192, 234)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5JNjDFzmExA2dm0NxiRLzw/2'
            }
          ],
        },
        {
          name: 'Women\'s Tree Loungers', description: 'Our casual slip-on made with breezy eucalyptus tree.',
          previewText: 'Breezy Feel, Light Material',
          previewImage: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_632,f_auto,q_auto,c_fill,ar_0.635814889336016/https://images.ctfassets.net/9uo1qvvet3xa/WwyP13YkRBPf85u8bmKSI/1f5450d0d37ae88a826d8f62c8d9cbd0/SummerCore2020-M_Chalk_TT_W_Marine_TR_Biking-0274.jpg',
          styles: [
            {
              name: 'Aspen (White Sole)',
              price: '$95',
              colors: ['rgb(214, 224, 232)', 'rgb(53, 93, 107)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/Cjjb4lryE6amekGJr1Xtw/1'
            },
            {
              name: 'Savanna Night (Cream Sole)',
              price: '$115',
              colors: ['rgb(64, 88, 95)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1'
            },
            {
              name: 'Black Sands (Asphalt Sole)',
              price: '$115',
              colors: ['rgb(214, 224, 232)', 'rgb(220, 220, 220) 50%)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/WBGO4zE8Z7uwVaLNzNVwa/1'
            },
            {
              name: 'Cardamon (Cream Sole)',
              price: '$115',
              colors: ['rgb(237, 237, 237)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7fDQVQThCJBT8quaOIMcqX/2'
            },
            {
              name: 'Ginseng (Beige Sole)',
              price: '$115',
              colors: ['rgb(45, 44, 47)', 'rgb(0, 0, 0)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6kgfUpOcNV92xLt7zyGjyx/1'
            },
            {
              name: 'Dapple Gray (Cream Sole)',
              price: '$115',
              colors: ['rgb(222, 185, 157)', 'rgb(237, 98, 79)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3DryEDjMRkWqMRnHPgsSQn/1'
            },
            {
              name: 'Aurora (Cream Sole)',
              price: '$115',
              colors: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/54WF7yeBSLVSyMkBubopeM/1'
            },
            {
              name: 'Pacific (Cream Sole)',
              price: '$115',
              colors: ['rgb(150, 49, 49)', 'rgb(165, 163, 164)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/32zWjIaCok5sOZzwfovTPo/1'
            },
            {
              name: 'True Block (Black Sole)',
              price: '$115',
              colors: ['rgb(1, 73, 118)', 'rgb(116, 192, 234)'],
              image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/5JNjDFzmExA2dm0NxiRLzw/2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
