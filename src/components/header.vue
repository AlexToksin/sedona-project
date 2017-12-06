<template>
  <div>
    <!--header-->
    <header class="header">
      <div class="main-nav">
        <ul class="main-nav__list">
          <transition name="fade">
          <li id="nav1"  class="main-nav__item"  v-bind:class="{ active: show}" ><a href="/" class="title title_mod title_modify">Главная</a>
            <img @click="show = true, close = true" src="../assets/main-nav/icon-cross.svg" class="main-nav__cross"/></li>
          </transition>
          <transition name="fade">
          <li id="nav2"  v-bind:class="{ active: show}"  class="main-nav__item">
            <a href="/photo" class="title title_mod title_modify">Фото и видео</a>
          </li>
          </transition>
          <transition name="fade">
          <li id="nav3"  v-bind:class="{ active: show}" class="main-nav__item">
            <a href="/form" class="title title_mod title_modify">Форма отзыва</a>
          </li>
          </transition>
          <transition name="fade">
          <li id="nav4"  v-bind:class="{ active: show}" class="main-nav__item">
            <a href="https://htmlacademy.ru/" class="title title_mod title_modify">HTML academy</a>
          </li>
          </transition>
          <li class="main-nav__item main-nav__item_mod">
            <div class="main-nav__logo">
              <picture class="main-nav__logo-pic">
                <source media="(min-width: 1024px)"
                        srcset="../assets/logo/logo-sedona-desktop.svg 1024w"/>
                <source media="(min-width: 720px)"
                        srcset="../assets/logo/logo-sedona-tablet.svg 720w"/>
              <img src="../assets/logo/logo-sedona-mobile.svg"
                   class="logo"
                   alt="logo"/>
              </picture>
              <img @click="show = false, close = false" v-if="close" src="../assets/main-nav/icon-menu.svg" alt="" class="main-nav__toggle">
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          show: true,
          close: true
        }
      },
      methods: {

        }
  }
</script>
