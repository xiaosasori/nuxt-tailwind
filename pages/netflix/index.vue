<template>
<div class="bg-gray-900 min-h-screen">
  <header class="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-24 z-20">
      <a href="#" class="logo"><img src="/netflix-logo.png" alt="netlix logo"></a>
      <ul class="navigation flex">
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">My List</a></li>
      </ul>
      <div class="search">
          <input type="text" placeholder="Search">
          <svg class="w-6 h-6 absolute top-1/2 pr-2 left-2 border-r transform -translate-y-1/2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
  </header>
  <div class="banner">
      <div class="layer"></div>
      <div class="content">
          <img src="mulan-text.png" class="movieTitle" alt="mulan text">
          <h4>
              <span>2020</span>
              <span><i>12+</i></span>
              <span>1h55min</span>
              <span>Action</span>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quis corrupti ad iure voluptatum eveniet ex. Temporibus id porro ducimus. Tempora dolore architecto iste. Repellat a cumque culpa ratione maiores.</p>
          <div class="buttons">
              <a href="#" @click="toggleVideo" class="inline-flex space-x-2 py-2 px-4 rounded">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>  
                  <span>Play</span>
                </a>
              <a href="#" class="inline-flex space-x-2 py-2 px-4 rounded">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span>My List</span>
            </a>
          </div>
      </div>
      <a href="#" class="play space-x-2">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Watch Trailer</span>
      </a>
  </div>
  <div v-if="show" class="trailer">
      <video ref="video" controls="true" autoplay="false" src="http://media.w3.org/2010/05/sintel/trailer.mp4"></video>
      <svg @click="close" class="close w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleVideo() {
            this.show = true
        },
        close() {
            this.show = false
        }
    }
}
</script>

<style scoped>
.logo {
    max-width: 150px;
}
.navigation li {
    list-style: none;
    margin: 0 10px;
}
.navigation li a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
}
.navigation li:hover a {
    color: #de0611;
}
.search {
    position: relative;
    width: 300px;
    height: 40px;
}
.search input {
    position: absolute;
    top: 0;
    left:0;
    widows: 100%;
    height: 100%;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, .5);
    outline: none;
    border-radius: 4px;
    padding: 0 10px 0 45px;
    backdrop-filter: blur(10px);
}
.search input::placeholder {
    color: #fff;
}

.banner {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url('/mulan.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, .4))
}

.content {
    position: relative;
    z-index: 1;
    max-width: 550px;
}
.movieTitle {
    max-width: 250px;
}
.banner .content h4 {
    color: rgba(255, 255, 255, .5);
    font-weight: 500;
}
.banner .content h4 span {
    padding: 0 10px;
    border-right: 1px solid rgba(255, 255,255,.5);
}
.banner .content h4 span:first-child {
    padding-left: 0;
}
.banner .content h4 span:last-child {
    border-right: none;
}
.banner .content h4 span i {
    background: #de0611;
    color: #fff;
    padding: 0 8px;
    display: inline-block;
    font-style: normal;
    border-radius: 2px;
}
.banner .content p {
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5em;
    color: #fff;
    margin: 10px 0 20px;
}
.banner .content .buttons {
    position: relative;
}
.banner .content .buttons a {
    position: relative;
    margin-right: 10px;
    background: #de0611;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.banner .content .buttons a:nth-child(2) {
    background: rgba(0,0,0,.5);
    border: 1px solid rgba(255, 255, 255, .1);
}
.banner .content .buttons a:hover:nth-child(2) {
    background: #de0611;
}
.play {
    position: absolute;
    bottom: 50px;
    left: 100px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 1.2em;
    cursor: pointer;
}
.play img {
    margin-right: 10px;
    max-width: 50px;
}

.trailer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
}
.trailer video {
    width: 90vw;
    max-width: 900px;
    outline: none;
}
.close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 32px;
}

@media (max-width: 1045px) {
    header {
        padding: 20px 50px;
        flex-direction: column;
    }
    .navigation {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px 0;
    }
    .banner {
        padding: 100px 50px;
    }
    .banner .play {
         left: 50px;
         font-size: 1em;
    }
    .play img {
        margin-right: 10px;
        max-width: 40px;
    }
    .trailer video {
        max-width: 90%;
    }
}
@media (max-width: 600px) {
    header {
        padding: 20px;
    }

    .search {
        position: relative;
        width: calc(100% - 20px);
        height: 40px;
    }
    .banner {
        padding: 220px 20px 100px;
    }
    .banner .play {
        left: 20px;
        font-size: 1em;
        bottom: 30px;
    }
}
</style>