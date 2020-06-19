<template>
  <div class="app">
    <Top />
    <Logo />
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/RobotoMono-Thin.ttf'
import 'popper.js/dist/popper.min.js'
import 'jquery/dist/jquery.min.js'
import Top from './components/templates/Top'
import Logo from "./components/templates/Logo";
import Header from "./components/templates/Header";
import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";

export default {
  name: "App",
  components: {
    Top,
    Logo,
    Header,
    Content,
    Footer
  }
};
</script>

<style>
    * {
      font-family: "RobotoMono"
    }
    body {
      margin: 0;
    }
    .app {
      margin: 0;
      display: grid;
      grid-template-rows: 50px 80px 1fr 250px;
      grid-template-columns: 300px 1fr;
      grid-template-areas: 
          "top top"
          "logo header"
          "content content"
          "footer footer"
    }

    @media (max-width: 640px) {
      .app {
        grid-template-rows: 80px 1fr 600px;
        grid-template-columns: 100%;
        grid-template-areas: 
          "logo"
          "content"
          "footer";        
      }
    }
</style>
