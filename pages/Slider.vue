<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>Building a Simple Content Slider with Vue.js</h1>

    <section class="App__example o-vertical-spacing o-vertical-spacing--l">
      <h2>Basic Slider</h2>

      <SliderFrame>
        <!-- <div slot-scope="{ next, prev }"> -->
        <template #default="{ next, prev }">
          <div>
            <SliderSlides>
              <!-- <div class="relative"> -->
              <SliderSlide class="o-vertical-spacing">
                <h3>Lorem Ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consetetur...</p>
              </SliderSlide>
              <SliderSlide class="o-vertical-spacing">
                <h3>Dolor Sit</h3>
                <p>Dolor sit amet, consetetur sadipscing...</p>
              </SliderSlide>
              <SliderSlide class="o-vertical-spacing">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam.</p>
              </SliderSlide>
              <!-- </div> -->
            </SliderSlides>
            <div class="App__basic-example-controls">
              <button @click="prev">&laquo; Prev</button>
              <button @click="next">Next &raquo;</button>
            </div>
          </div>
        </template>

        <!-- </div> -->
      </SliderFrame>
    </section>

    <SliderFrame>
      <template #default="{ goToIndex, next, prev }" class="ImageSlider">
        <div>
          <SliderSlides>
            <SliderSlide v-for="slide in slides" :key="slide.image" class="ImageSlider__slide">
              <img :src="slide.image" :alt="slide.headline" class="ImageSlider__image" />
              <h2 class="ImageSlider__headline">{{ slide.headline }}</h2>
            </SliderSlide>
          </SliderSlides>
          <button
            class="ImageSlider__direction ImageSlider__direction--prev"
            @click="prev"
          >&laquo; Prev</button>
          <button
            class="ImageSlider__direction ImageSlider__direction--next"
            @click="next"
          >Next &raquo;</button>

          <ol class="ImageSlider__dots">
            <li v-for="n in slides.length" :key="n">
              <button @click="goToIndex(n - 1)">{{ n }}</button>
            </li>
          </ol>
        </div>
      </template>
    </SliderFrame>
  </div>
</template>

<script>
import SliderFrame from '@/components/Slider/SliderFrame';
import SliderSlide from '@/components/Slider/SliderSlide.vue';
import SliderSlides from '@/components/Slider/SliderSlides.vue';

export default {
  name: 'App',
  components: {
    SliderFrame,
    SliderSlide,
    SliderSlides,
  },
  data: () => ({
    slides: [
        {
          headline: 'Lorem Ipsum',
          image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36540868671b0e7942ab946c0e44503d&auto=format&fit=crop&w=400&h=300&q=80',
        },
        {
          headline: 'Dolor sit',
          image: 'https://images.unsplash.com/photo-1483119624769-b1a73c256500?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExMDk0fQ&s=1f605cd0d214c866787dc3c2924ba07f&auto=format&fit=crop&w=400&h=300&q=80',
        },
        {
          headline: 'Lorem Dolor',
          image: 'https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbd75d3010ba4abe9a4e747b96f57c93&auto=format&fit=crop&w=400&h=300&q=80',
        },
        {
          headline: 'Dolor Lorem sit',
          image: 'https://images.unsplash.com/photo-1516750930166-ed88ab1adb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65c8f6fcafaf68f5fa434b5f076780fd&auto=format&fit=crop&w=400&h=300&q=80',
        },
      ],
  })
};
</script>
<style lang="scss">
.ImageSlider {
  position: relative;
}
.ImageSlider__headline,
.ImageSlider__direction {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.ImageSlider__direction--prev {
  left: 0.5em;
}
.ImageSlider__direction--next {
  right: 0.5em;
}
.ImageSlider__slide,
.ImageSlider__image {
  width: 100%;
}
.ImageSlider__slide {
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#000, 0.2);
    content: "";
  }
}
.ImageSlider__headline {
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  color: #fff;
  text-shadow: 0 0 0.75em rgba(#000, 0.4);
}
.ImageSlider__image {
  vertical-align: middle;
}
.ImageSlider__dots {
  position: absolute;
  right: 0;
  bottom: 0.5em;
  left: 0;
  display: flex;
  justify-content: center;
}
</style>