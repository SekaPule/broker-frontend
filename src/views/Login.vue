<template>
  <NavWelcome/>
  <section class="registration__form">
    <div class="wrap">
      <div class="registration__container">
        <form @submit.prevent="submit" >
          <div class="container">
            <h1>Авторизация</h1>
            <hr>
            <label><b>Email</b></label>
            <input v-model="data.email" type="text" placeholder="Введите Email" name="email" required>

            <label><b>Пароль</b></label>
            <input v-model="data.password" type="password" placeholder="Введите пароль"
                   name="psw" required>
            <p>Уже зарегистрированы?<router-link to="/"><span  class="btn__change">Зарегистрироваться</span></router-link></p>
            <hr>
            <button type="submit"  class="btn registerbtn">Далее</button>
          </div>
        </form>
      </div>
      <div class="reg__cartoon">
        <img class="cartoon" src="@/assets/images/cartoon.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import NavWelcome from "@/components/NavWelcome.vue";
import {HTTP} from "@/http-common";
import {reactive} from "vue";
import {useRouter} from "vue-router";

export default {
  components: {NavWelcome},
  name: "Login",
  setup(){
    const data = reactive({
      email:'',
      password:'',
    });

    const router = useRouter();

    const submit = () =>{
      HTTP.post('login',data)
          .then(response => {
            localStorage.setItem('token', response.data.token)
            router.push('/portfolio');
          }).catch(error => {
            console.log(error)
      })
    }

    return{
      data,
      submit
    }
  }
}
</script>

<style scoped>
.btn{
  width: 40%;
  padding: 14px 40px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  background: radial-gradient(#f7a771, #fba138);
  box-shadow: 0 3px 10px rgba(0,0,0,0.4);
  border-radius: 1em;
}
form{
  width: 100%;
}

.registration__form{
  background: radial-gradient(#8157d7,#613DB7);
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap{
  border-radius: 15px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  height: 70%;
  padding: 20px;
  margin-top: 80px;
}

.registration__container{
  display: flex;
  align-items: center;
  width: 40%;
}

.reg__cartoon{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}

.cartoon{
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
}


input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #ddd;
}

input[type=text]:focus, input[type=password]:focus {
  outline: none;
}


hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background: radial-gradient(#f7a771, #fba138);
  color: white;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}

.btn__change{
  color: #007bff;
  margin-left: 20px;
  cursor: pointer;
}
</style>