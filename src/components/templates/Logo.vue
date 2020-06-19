<template>
  <div class="logo">
    <div class="logomenu">
      <a class="bar nav-link" role="button" @click="toogleMenu" v-if="!hideToggle">
        <i class="fa fa-bars"></i>
      </a>
      <router-link class="persona" to="/">
        <img src="@/assets/img/perso.jpg" alt="Logo" />
      </router-link>
    </div>
    <aside class="lateral" v-show="isMenuVisible">
        <router-link to="/"><i class="fa fa-home"></i><a @click="toogleMenu">HOME</a></router-link>
        <router-link to="/contacts"><i class="fa fa-phone"></i><a @click="toogleMenu">CONTATO</a></router-link>
        <router-link to="/services"><i class="fa fa-cogs"></i><a @click="toogleMenu">SERVIÇOS</a></router-link>
        <router-link to="/info"><i class="fa fa-info-circle"></i><a @click="toogleMenu">QUEM SOMOS</a></router-link>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Logo",
  props: {
      hideToggle: Boolean
  },
  computed: mapState(['isMenuVisible']),
  methods: {
      toogleMenu() {
          this.$store.commit('toogleMenu')
      },
      toogleMenuBtn() {
        this.$store.commit('toogleMenu', false)
      }
  }
};
</script>

<style>

.lateral {
    display: none;
}
.logomenu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.bar {
  display: none;
}

.persona:hover {
  opacity: 0.7;
}

.persona {
  padding: 0px 10px;
}

.logo img {
  grid-area: logo;
  width: 250px;
  height: 80px;
}

@media (max-width: 640px) {
  .logomenu {
    margin: 0px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;
    box-shadow: 0 0 5px gray;
  }

  .logomenu img {
    width: 200px;
  }

  .logomenu .bar {
    display: block;
    color: #fff;
  }

  .logomenu .bar:hover {
    color: #fff;
  }

  .persona {
    padding-right: 80px;
  }
  .logomenu .whats {
    color: rgb(22, 202, 37);
  }
  .logomenu a {
    text-decoration: none;
    color: #fff;
  }
  .lateral {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 60%;
      position: fixed;
      z-index: 10;
      opacity: 0.7;
      left: 0;
      margin-top: 80px;
      background-color: #000;
  }

  .lateral a {
      text-decoration: none;
      color: #fff;
      padding: 10px;
  }

  .lateral .whats {
    color: rgb(22, 202, 37);
  }
}
</style>