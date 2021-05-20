<template>
  <div class="portfolio__share" >
    <div class="share__representation">
      <div class="share__logo">
        <img class="share__image" alt="" src="@/assets/shareLogo/dota.jpg">
      </div>
      <span class="share__name">{{share.name}}</span>
    </div>

    <div class="quotation-chart">
      <Chart
          :quotation="[share.open,share.high,share.low]"
      />
    </div>

    <div class="share__data">
      <div class="share__info">
        <span class="share__type">{{share.open}}$</span>
        <span class="share__quantity">{{share.high}}$</span>
        <span class="share__cost">{{share.low}}$</span>
        <span class="share__proceeds">{{share.volume}}шт</span>
        <span class="share__proceeds">{{share.price}}$</span>
      </div>
      <div class="buy__button">
        <input class="quantity-input" v-model="paper.quantity" type="number" placeholder="кол-во" name="psw" required>
        <button class="buy btn" @click="$emit('buy-paper',share.id,paper)">Купить</button>
      </div>
    </div>

  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "Share",
  components: {
    Chart
  },
  props: {
    share: Object
  },
  data(){
    return{
      paper:{
        quantity: Number
      }
    }
  }
}
</script>

<style scoped>
.portfolio__share{
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}
.share__representation{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.share__data{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.share__info{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.quantity-input{
  width: 2.5rem;
  height: 1.5rem;
}

.share__image{
  margin-left: 50px;
  border-radius: 100%;
  width: 60px;
  height: 60px;
}

.share__name{
  margin-left: 50px;
}

.buy{
  width: 10%;
  background: #613DB7;
}

.buy__button{
  display: flex;
  justify-content: center;
  align-items: center;
}

.buy:hover{
  background: #422091;
}

.btn{
  color: white;
  margin: 8px 5px;
  border: none;
  padding: 5px 10px;
  border-radius: 1em;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0,0,0,0.4);
}
</style>