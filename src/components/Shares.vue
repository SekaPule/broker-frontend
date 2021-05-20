<template>
  <div class="portfolio__shares">
    <div :key="share.id" v-for="share in shares">
      <div class="share__data"></div>
      <Share
          @buy-paper = "$emit('buy-paper',share.id,paper)"
          :share = "share"
      />
    </div>
  </div>
</template>

<script>
import Share from "./Share";

export default {
  name: "Shares",
  props: {
    shares: Object
  },
  components: {Share},
  emits:['buy-paper']
}
</script>

<style scoped>
.portfolio__shares{
  display: flex;
  flex-direction: column;
}
</style>