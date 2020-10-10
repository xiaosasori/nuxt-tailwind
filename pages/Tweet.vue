<template>
  <!-- <div> -->
  <TweetBox v-model="value" />
  <!-- </div> -->
</template>

<script>
import TweetBox from '~/components/TweetBox'
export default {
  components: {TweetBox},
  data: () => ({
    value: ''
  }),
  methods: {
    update(val) {
      console.log(val)
      this.value = val
    }

  }
}
</script>
