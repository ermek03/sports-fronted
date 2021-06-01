<template>
  <header class="header">
    <div class="container flex flex-between">
      <div class="top-menu-left">
        <div class="logo">
          <nuxt-link to="/"><img src="/img/logo.png" alt="Sports.kg"></nuxt-link>
        </div>
      </div>
      <nav class="top-menu">
        <ul>
          <li>
            <nuxt-link to="/" href="" :class="{active: this.$route.name === 'index'}" class="top-menu__item">Главная</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sport-areas" :class="{active: this.$route.name === 'sport-areas'}" class="top-menu__item">Площадки</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/map" :class="{active: this.$route.name === 'map'}" class="top-menu__item">На карте</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news" :class="{active: this.$route.name === 'news'}" class="top-menu__item">Новости</nuxt-link>
          </li>
<!--          <li>-->
<!--            <nuxt-link to="/contact" :class="{active: this.$route.name === 'contact'}" class="top-menu__item">Контакты</nuxt-link>-->
<!--          </li>-->
        </ul>
      </nav>
      <div class="top-menu-right">
        <!--        <nuxt-link to="/notifications" :class="{active: this.$route.name === 'notifications'}" class="top-menu__item__icon">-->
        <!--          <img class="right-side" src="/icon/notification.png">-->
        <!--        </nuxt-link>-->
        <!--        <nuxt-link to="/setting" :class="{active: this.$route.name === 'setting'}" class="top-menu__item__icon">-->
        <!--          <img class="right-side" src="/icon/settings.png">-->
        <!--        </nuxt-link>-->
        <a href="http://167.172.174.57/admin" target="_blank" :class="{active: this.$route.name === 'user'}" class="top-menu__item__icon"><img class="user-account"
                                                                                                                                               src="/icon/avatar.png">
        </a>
      </div>
      <button class="humburger-button" @click="openRightMenu()" id="right_menu">&#9776;</button>
      <div id="mySidenav" class="sidenav">
        <a href="#" class="closebtn" @click="closeRightMenu()">×</a>
        <nuxt-link to="/" class="nuxt-link">Главная</nuxt-link>
        <nuxt-link to="/sport-areas" class="nuxt-link">Площадки</nuxt-link>
        <nuxt-link to="/map" class="nuxt-link">На карте</nuxt-link>
        <nuxt-link to="/news" class="nuxt-link">Новости</nuxt-link>
        <nuxt-link to="/contact" class="nuxt-link">Контакты</nuxt-link>
        <div class="link-icon">
          <!--          <nuxt-link to="/notifications" :class="{active: this.$route.name === 'notifications'}" class="top-menu__item__icon">-->
          <!--            <img class="right-side" src="/icon/notification_white.png">-->
          <!--          </nuxt-link>-->
          <!--          <nuxt-link to="/setting" :class="{active: this.$route.name === 'setting'}" class="top-menu__item__icon">-->
          <!--            <img class="right-side" src="/icon/settings_white.png">-->
          <!--          </nuxt-link>-->
          <a href="http://167.172.174.57/admin" :class="{active: this.$route.name === 'user'}" class="top-menu__item__icon" target="_blank">
            <img class="right-side" src="/icon/avatar_white.png">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      "is_open_sidenav_menu": false
    }
  },
  methods: {
    openRightMenu() {
      this.is_open_sidenav_menu = true;
      document.getElementById("mySidenav").style.width = "60%";
    },
    closeRightMenu() {
      document.getElementById("mySidenav").style.width = "0";
      this.is_open_sidenav_menu = false;
    },
    listener(event) {
      if (event.target.parentNode.id !== 'mySidenav' && event.target.id !== 'right_menu' && this.is_open_sidenav_menu === true) {
        document.getElementById("mySidenav").style.width = "0";
        this.is_open_sidenav_menu = false
      } else if (event.target.className.includes('nuxt-link')) {
        document.getElementById("mySidenav").style.width = "0";
        this.is_open_sidenav_menu = false
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      document.body.addEventListener("click", this.listener)
    });
  }

}
</script>

<style>
.header .user-account {
  width: 42px;
  height: 42px;
}

.right-side {
  width: 25px;
  height: 25px;
}

.humburger-button {
  display: none;
  font-size: x-large;
  background: transparent;
  border: 0;;
}

.sidenav {
  text-align: center;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #F46D6D;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  font-size: 16px;
  color: #FFFFFF;
  display: block;
  transition: 0.3s;
  padding: 20px;
  text-decoration: none;
}

.sidenav a:hover,
.offcanvas a:focus {
  color: #f1f1f1;
  text-decoration: none;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px !important;
  margin-left: 50px;
}

@media screen and (min-width: 1904px) {
  .container {
    max-width: 1185px !important;
  }
}

@media screen and (max-width: 991px) {
  .top-menu__item {
    padding: 9px;
  }
}

@media screen and (max-width: 768px) {
  .top-menu {
    display: none;
  }

  .top-menu-right {
    display: none;
  }

  .humburger-button {
    display: block;
  }

  .top-menu__item__icon {
    padding: 3px 3px;
  }
}

.link-icon {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
