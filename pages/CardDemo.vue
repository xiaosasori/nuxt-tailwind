<template>
  <div class="body">
    <div class="game">
      <div class="rank">3</div>
      <div class="front">
        <img class="thumbnail" src="~/static/game-cover.jpg" alt />
        <h3 class="name">Game name</h3>
        <div class="stats">
          <p class="viewers"></p>
          <div class="streamers">
            <img src="~/static/streamer-1.jpg" alt />
            <img src="~/static/streamer-2.jpg" alt />
            <img src="~/static/streamer-3.jpg" alt />
          </div>
        </div>
      </div>
      <div class="back">
        <div class="streaming-info">
          <p class="game-stat">
            <span>559k</span>Watching
          </p>
          <div class="game-stat">
            25.8k
            <span>Streams</span>
          </div>
        </div>
        <button class="btn">See more streams</button>
        <div class="streamers">
          <div class="streamer">
            <p class="name">Gamer 1</p>
            <p class="number">36.1k</p>
          </div>
          <div class="streamer">
            <p class="name">Gamer 2</p>
            <p class="number">33.1k</p>
          </div>
          <div class="streamer">
            <p class="name">Gamer 3</p>
            <p class="number">31.1k</p>
          </div>
        </div>
      </div>
      <div class="background"></div>
    </div>
    <skeleton-box />
    <skeleton-box width="100px" height="80px" />
    <skeleton-box :min-width="50" :max-width="70" />
  </div>
</template>

<script>
import SkeletonBox from '@/components/SkeletonBox'
export default {
  components: {SkeletonBox}
}
</script>

<style>
:root {
  --clr-dark: rgb(13, 17, 19);
  --clr-light: #fff;
  --clr-accent: rgb(222, 52, 0);
  --clr-accent-dark: rgb(163, 38, 0);
  --clr-secondary: rgb(0, 62, 163);
  --br: 0.5em;
}

.body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-dark);
  color: var(--clr-light);
}

img {
  max-width: 100%;
}

.game {
  position: relative;
  width: 12.5em; /* *16 = 200 */
}

.streamers {
  display: flex;
}

.streamers img {
  width: 2em;
  height: 2em;
  border-radius: 50%;
}

.rank {
  position: absolute;
  top: 0;
  right: 2em;
  font-weight: bold;
  font-size: 1.125rem;
  background: rgba(0, 0, 0, 0.65);
  padding: 0.5em 0.5em 0.75em;
  clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0);
}

.front {
}

.front .thumbnail {
  border-radius: var(--br);
}

.front .name {
  margin: 0.75em 0;
}

.front .stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.front .streamers img {
  border: 2px solid var(--clr-drak);
}

.front .streamers img:nth-of-type(1) {
  transform: translateX(50%);
  z-index: 1;
}
.front .streamers img:nth-of-type(2) {
  transform: translateX(25%);
}

.back {
  display: none;
}
</style>