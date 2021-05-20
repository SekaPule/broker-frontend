<template>
  <header>
    <div class="header__inner">
      <span class="logo">SmartBroker.</span>
      <div class="navigation">
        <ul class="nav__list" >
          <li><a class="nav__link nav__el" href="">Информация</a></li>
          <li><router-link to="/portfolio"  class="nav__link nav__el">Портфель</router-link></li>
          <li><router-link to="/paper_market"  class="nav__link nav__el">Рынок бумаг</router-link></li>
          <li @click="userLogout"><a class="nav__link nav__el">Выход</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import {HTTP} from "@/http-common";
import {useRouter} from "vue-router";
import router from "@/router";

export default {
  name: "Nav",
  data(){
    return{
      router: useRouter()
    }
  },
  methods:{
    userLogout(){
      HTTP.post("logout")
          .then(response=>{
            console.log(response)
            router.push("/")
          })
    }
  }
}
</script>

<style scoped>
/*Header
--------------------------------------*/
header{
  z-index: 1001;
  display: block;
  color: white;
  background: #1f1f1f;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0,0,0,0.4);

}

.header__inner{
  background: radial-gradient(#8157d7,#613DB7);
  //background: radial-gradient(#4214a0, #391b8d);
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo{
  margin-left: 50px;
  font-size: 32px;
  font-weight: 900;
}

.nav__list{
  padding-top: 8px;
  list-style: none;
  display: flex;
  flex-direction: row;
  font-size: 16px;

}

.nav__link{
  color: white;
  font-size: 18px;
  text-decoration: none;
  opacity: .8;
  cursor: pointer;
}

.nav__el{
  margin-right: 100px;
  padding-bottom: 10px;
}

</style>