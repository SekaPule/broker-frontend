<template>
    <header>
    <div class="header__inner">
      <span class="logo">SmartBroker.</span>
      <div class="navigation">
        <ul class="nav__list" >
          <li><a class="nav__link nav__el" href="#intro">Интро</a></li>
          <li><a class="nav__link nav__el" href="#inf">О нас</a></li>
          <li><a  class="nav__link nav__el focus" href="#reg">Войти</a></li>
        </ul>
      </div>
    </div>
  </header>
  <section id="intro" class="header">
    <div class="intro">
      <div class="intro__picture">
        <img class="picture" src="@/assets/images/Picture.png" alt="picture">
      </div>

      <div class="intro__info">
        <div class="intro__inner">
          <h1 class="intro__title">Добро пожаловать на сайт начинающего брокера</h1>
          <div class="intro__button">
            <a class="btn" href="#reg">Открыть брокерский счет</a>
          </div>
        </div>

      </div>
    </div>

  </section>

  <section id="inf" class="info">
    <div class="content">
      <div class="topicality">
        <h2>
          <li>Чем актуально данное приложение:</li>
        </h2>
        <p class="info__text">На современном этапе развития экономики актуализируются проблемы повышения
          эффективности управления финансовыми
          ресурсами - в том числе ценными бумагами на всех иерархических уровнях. Весьма целесообразно и
          необходимо
          рассмотреть возможные способы использования ценных бумаг посредством операций с ними на фондовом
          рынке.</p>
      </div>

      <div class="about__us">
        <div class="about__app">
          <h2>
            <li>О приложении:</li>
          </h2>
          <p class="info__text">Созданное приложение является прототипом того, как может выглядеть настоящее
            приложение для фондовой торговли.
            Пользуясь данным приложением, пользователь сможет понять, как происходит процесс купли/продажи
            акций, ценных бумаг и пр.
            Можно сказать, что в процессе использования происходит обучение, для того чтобы в дальнейшем
            быть более опытным инвестором.
          </p>

        </div>
      </div>

    </div>

    <div class="functions">
      <div class="function">
        <p class="function__text">Направленность на клиента затупка</p>
      </div>
      <div class="function">
        <p class="function__text">Направленность на клиента затупка</p>
      </div>
      <div class="function">
        <p class="function__text">Направленность на клиента затупка</p>
      </div>
      <div class="function">
        <p class="function__text">Направленность на клиента затупка</p>
      </div>
    </div>


  </section>

</template>

<script>
export default {
name: "NavWelcome"
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


.header{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: radial-gradient(#8157d7,#613DB7);
  background-size: cover;
  height: 100vh;
  box-shadow: 0 5px 10px rgba(0,0,0,0.4);

}

.header__inner{
  background: radial-gradient(#4214a0, #391b8d);
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
}

.nav__el{
  margin-right: 100px;
  padding-bottom: 10px;
}
/*Intro
------------------------------------*/
.intro{
  display: flex;
  flex-direction: row;
  align-items: center;

}

.intro__picture{
  width: 50%;
  margin-left: 60px;
}

.picture{
  width: 80%;
  max-width: 400px;
}

.intro__info{
  margin-right: 60px;
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.intro__title{
  font-size: 40px;
  color: white;
}

.intro__button{
  margin-top: 120px;
}
/*Button
----------------------------------*/
button,
button:active,
button:focus {
  outline: none;
}

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

/*Info
------------------------------------*/
.info{

}

.content{
  margin: 100px 70px;
}

.info__text{
  text-indent: 2em;
  padding: 10px 50px;
  font-size: 22px;
  opacity: .9;
}

.topicality{
  padding-top: 160px;
  padding-bottom: 10px;
  border-radius: 20px;
  margin: 70px 0;
  border-left: 10px solid #8157d7;
}

.about__us{
  padding: 10px 0;
  border-radius: 20px;
  border-left: 10px solid #8157d7;

}

.functions{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f17f32;
  height: 300px;
}

.function{
  margin: 20px 20px;
  height: 80%;
  width: 20%;
  border: 2px solid #ffffff;
  opacity: .8;
  border-radius: 20px;
}

.function__text{
  text-align: center;
  padding: 24px;
  font-size: 24px;
  color: white;
}

</style>