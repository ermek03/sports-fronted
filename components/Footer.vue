<template>
  <footer class="footer">
    <div class="container footer-blog">
      <div class="footer-menu-left">
        <div class="logo">
          <nuxt-link to="/"><img src="/img/logo-light-grey.png" alt="Sports.kg"></nuxt-link>
        </div>
      </div>
      <div class="footer-menu-middle">
        <ul>
          <li>
            <nuxt-link to="/" href="" :class="{active: this.$route.name === 'index'}" class="footer-menu__item">Главная</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sport-areas" :class="{active: this.$route.name === 'sport-areas'}" class="footer-menu__item">Площадки</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/map" :class="{active: this.$route.name === 'map'}" class="footer-menu__item">На карте</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news" :class="{active: this.$route.name === 'news'}" class="footer-menu__item">Новости</nuxt-link>
          </li>
<!--          <li>-->
<!--            <nuxt-link to="/contact" :class="{active: this.$route.name === 'contact'}" class="footer-menu__item">Контакты</nuxt-link>-->
<!--          </li>-->
        </ul>
      </div>
      <div class="footer-menu-right">
        <a href="https://www.facebook.com/InformAgencySportKG" target="_blank" :class="{active: this.$route.name === 'notifications'}" class="footer-menu__item__icon">
          <img class="social-media-icon" src="/icon/facebook.png">
        </a>
<!--        <nuxt-link to="/setting" :class="{active: this.$route.name === 'setting'}" class="footer-menu__item__icon">-->
<!--          <img class="social-media-icon" src="/icon/telegram.png">-->
<!--        </nuxt-link>-->
        <a href="https://www.instagram.com/sportlab.kg/" target="_blank" :class="{active: this.$route.name === 'user'}" class="footer-menu__item__icon"><img class="social-media-icon" src="/icon/instagram.png">
        </a>
<!--        <nuxt-link to="/user" :class="{active: this.$route.name === 'user'}" class="footer-menu__item__icon">-->
<!--          <button class="button-registration">-->
<!--            Регистрация-->
<!--          </button>-->
<!--        </nuxt-link>-->
      </div>
    </div>
    <div class="container copyright">
      <p>Copyright © 2021 by Еrmek Omorov</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 54px;
    width: 100%;
    height: 287px;
    background: #F46D6D;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .footer-blog {
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;
      justify-content: space-between;

      .footer-menu-left {
        display: flex;
        justify-content: flex-start;

        .logo {
          width: 135px;
          height: 42px;
          display: inline;
          align-items: center;
          justify-content: center;
          margin: 15px 0;
        }

        img {
          width: 100%;
          height: auto;
        }
      }

      .footer-menu-middle {
        ul {
          display: flex;
          flex-display: row;
          flex-flow: row wrap;
          justify-content: flex-start;
          list-style: none;
          margin: 15px 0;

          li {
            position: relative;

            a {
              font-weight: 500;
              font-size: 14px;
              line-height: 18px;
              letter-spacing: 0.2px;
              color: #FFFFFF;
            }
          }
        }
      }

      .footer-menu-right {
        display: flex;

        .social-media-icon {
          width: 25px;
          height: 25px;
        }

        .button-registration {
          height: 40px;
          background: #FFFFFF;
          border: none;
          border-radius: 2px;

          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 15px;
          padding: 0 15px;
          text-align: center;
          color: #F46D6D;
        }
      }

      .footer-menu__item {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600 !important;
        padding: 10px 20px;
      }

      .footer-menu__item__icon {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        padding: 10px 10px;
      }
    }

    .copyright {
      p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: #333333;
      }
    }
  }
</style>
