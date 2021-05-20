<template>
  <Nav/>
  <section class="portfolio">
    <div class="container">
      <!--Portfolio header-------------------------------------------------->
      <div class="portfolio__header">
        <div class="portfolio__brok">
          <h1 class="portfolio__title">Брокерский счет</h1>
          <div class="ph__buttons">
          </div>
        </div>

        <div class="portfolio__data">
          <span class="portfolio__currency">0,00$</span>
        </div>
      </div>
      <!--/////////Portfolio header-------------------------------------------------->
      <Shares
          @buy-paper = "byuPaper"
          :shares="shares"
      />
      <!--shares----------------------------------------------------------->
    </div>
  </section>

</template>

<script>
import Nav from "@/components/Nav.vue";
import {HTTP} from "@/http-common";
import Shares from "@/components/Shares";

export default {
  components: {
    Nav,
    Shares
  },
  name: "PaperMarket",
  data(){
    return{
      shares:{},
      paper: {
        quantity : 200
      }
    }
  },
  mounted(){
    HTTP.get("papers/all")
        .then(response => {
          this.shares = response.data;
          console.log(response.data)
        }).catch(error => {
      console.log("Error getShares")
      console.log(error)
    })
  },
  methods:{
    byuPaper(id, volume){
      HTTP.post(`market/buy/${id}`, this.paper)
          .then(response => {
            console.log(response)
          })
      alert(id +"/"+ volume)
    }
  }
}
</script>

<style scoped>
/*Portfolio Header
--------------------------------------*/
.portfolio{
  background: #f1f1f1;
  margin-top: 100px;
}

.container{
  background: white ;

}
.portfolio__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.portfolio__brok{
  display: flex;
  margin-left: 50px;
}

.portfolio__title{
  margin-right: 10px;
  font-size: 30px;
  font-weight: 600;
}

.ph__buttons{
  display: flex;
}

.portfolio__data{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right:70px;

}

.portfolio__currency{
  font-size: 24px;
}

/*Shares
--------------------------------------*/

</style>