<template>
  <section class="relative w-full min-h-screen p-24 flex justify-between items-center" style="background: #161616">
      <div class="absolute top-0 left-0 w-full h-full" style="background: #e51e2a;clip-path: circle(70% at right -20%)"></div>
      <header class="absolute top-0 left-0 w-full px-10 pt-10 pb-24 flex justify-between items-center">
          <a href="#" class="relative" style="max-width: 150px">
              <img src="/coca/logo.png" alt="logo">
          </a>
          <button @click="toggleMenu" class="toggle text-white hidden">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <ul class="navigation relative flex space-x-10">
              <li><a class="inline-block text-white font-semibold" href="#">Home</a></li>
              <li><a class="inline-block text-white font-semibold" href="#">Menu</a></li>
              <li><a class="inline-block text-white font-semibold" href="#">What's New</a></li>
              <li><a class="inline-block text-white font-semibold" href="#">Contact</a></li>
          </ul>
      </header>
      <div class="content relative w-full flex justify-between items-center">
          <div class="textBox relative mr-5" style="max-width: 600px">
              <h2 class="text-white text-5xl font-bold">Taste the Feeling</h2>
              <p class="mt-6 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aperiam, itaque perferendis nulla corrupti facilis explicabo eligendi illo dolor accusamus! Voluptatibus labore aliquam perferendis sed perspiciatis cum possimus officiis laboriosam.</p>
              <a href="#" class="text-white inline-block mt-5 px-4 py-2 rounded-full" style="background: #e51e2a">Learn More</a>
          </div>

          <div class="imgBox">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="/coca/cocacola1.png" alt="coca1"></div>
                      <div class="swiper-slide"><img src="/coca/cocacola2.png" alt="coca2"></div>
                      <div class="swiper-slide"><img src="/coca/cocacola3.png" alt="coca3"></div>
                      <div class="swiper-slide"><img src="/coca/cocacola4.png" alt="coca4"></div>
                      <div class="swiper-slide"><img src="/coca/cocacola5.png" alt="coca5"></div>
                      <div class="swiper-slide"><img src="/coca/cocacola6.png" alt="coca6"></div>
                  </div>
              </div>
          </div>
      </div>
      <ul class="sci absolute left-24 flex justify-center items-center space-x-4" style="bottom: 32px">
          <li>
              <a class="flex justify-center items-center bg-gray-800 rounded-full transition p-3 duration-75 ease-in-out hover:bg-red-600 transform hover:-translate-y-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" style="filter:invert(1)"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-78ced318=""></path></svg>
            </a>
          </li>
          <li>
              <a class="flex justify-center items-center bg-gray-800 rounded-full transition p-3 duration-75 ease-in-out hover:bg-red-600 transform hover:-translate-y-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" style="filter:invert(1)"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
          </li>
          <li>
              <a class="flex justify-center items-center bg-gray-800 rounded-full transition p-3 duration-75 ease-in-out hover:bg-red-600 transform hover:-translate-y-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" style="filter:invert(1)"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
          </li>
      </ul>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
    data() {
        return {
            show: false,
            swiperObj: null
        }
    },
    mounted() {
        const swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true
        })
        this.swiperObj = swiper
        
    },
    methods: {
        toggleMenu() {
            this.show = !this.show
        }
    },
    beforeDestroy() {
        this.swiperObj.destroy()
    }
}
</script>

<style scoped>
.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 180px;
    height: 460px;
    display: flex;
    justify-content: center;
}
.imgBox {
    width: 500px;
    display: flex;
    justify-content: flex-end;
}
.imgBox img {
    max-width: 150px;
}
.swiper-slide img {
    position: absolute;
    bottom: 0;
    max-height: 100%;
}
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
}

@media (max-width: 991px) {
    header {
        padding: 40px;
    }
    section {
        padding: 150px 40px;
    }
    .sci {
        left: 40px;
    }
    .content {
        flex-direction: column;
    }
    .content .textBox,
    .content .imgBox {
        max-width: 100%;
    }
    .swiper-slide {
        height: 300px;
    }
    .navigation {
        display: none;
    }
    .toggle {
        display: flex;
        justify-content: justify-center;
        align-items: items-center;
        position: relative;
        width: 30px;
        height: 30px;
    }
}

</style>