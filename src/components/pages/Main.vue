<template>
  <div class="main">
    <div class="welcome">
      <img src="../../assets/img/pintura-automotiva.jpg" alt="Pintura" height="300" width="100%" />
      <div class="welcome-home">
        <h1 class="text-dark">Auto Chapeação Personal Car</h1>
        <h3 class="text-dark">Cascavel PR</h3>
        <p>
          Personal Car e uma empresa de estética automotiva, nossos serviços são polimentos,
          espelhamentos, pinturas, retoques, martelinho de ouro entre outros. 
          Como recuperação de parachoques, e pintura de rodas etc. Venha conhecer nossos serviços !!
        </p>
      </div>
    </div>
    <h2>ALGUNS SERVIÇOS NOSSOS</h2>
    <div class="info-home">
      <router-link to="/martelinho" class="info-img">
        <h4>Martelinho de Ouro</h4>
        <img
          src="../../assets/img/martelinho-de-ouro.png"
          alt="Martelinho de Ouro"
        />
      </router-link>
      <router-link to="/polimentos" class="info-img">
        <h4>Polimentos</h4>
        <img src="../../assets/img/polimento2.jpg" alt="Polimento"/>
      </router-link>
      <router-link to="/pinturas" class="info-img">
        <h4>Pinturas</h4>
        <img src="../../assets/img/pintura.png" alt="Pintura"/>
      </router-link>
      <router-link to="/retoques" class="info-img">
        <h4>Retoques</h4>
        <img src="../../assets/img/retoque.jpg" alt="Retoques"/>
      </router-link>
    </div>
    <h2>GALERIA DE FOTOS</h2>
    <Carousel class="carousel" :perPage="1" :autoplay="true" :loop="true"
      :autoplayTimeout="4000">
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/20200602_150506.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/20200602_150523.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/20200604_141159.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/20200604_141211.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0009.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0010.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0011.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0012.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0013.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0014.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0014.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0015.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0016.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0017.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0018.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0019.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0020.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0021.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0022.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0023.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0024.jpg" alt="Carros"/>
      </Slide>
      <Slide class="slidecarousel">
        <img src="../../assets/img/cars/IMG-20200612-WA0025.jpg" alt="Carros"/>
      </Slide>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: "Main",
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
.slidecarousel {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
.slidecarousel img {
  width: 700px;
  height: 400px;
}

.main {
  display: flex;
  flex-direction: column;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome > img {
  position: relative;
  opacity: 0.5;
}

.welcome-home {
  height: 280px;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.welcome-home p {
  font-size: 1.2rem;
}

.info-home {
  display: flex;
  margin: 40px;
  justify-content: space-between;
}

.info-img {
  display: flex;
  justify-content: center;
  align-self: center;
}

.info-img img {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  width: 250px;
  height: 300px;
}

.info-img:hover {
  opacity: 0.7;
}

.info-img h4 {
  position: absolute;
  padding-top: 20%;
  color: #fff;
  text-shadow: -1px 1px 0px #000;
}

.main h2 {
  margin: 0;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #e9ae37;
}

.carousel {
  padding-bottom: 20px;
}

@media (max-width: 640px) {
  .welcome-home h1{
    font-size: 1.5rem;
  }
  .main h2 {
    font-size: 1.4rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  .main h1, h3 {
    font-size: 1.1rem;
  }
  .welcome-home p {
    font-size: 0.9rem;
    text-align: center;
  }
  .info-home {
    flex-wrap: wrap;
    margin: 20px;
  }
  .info-img {
    padding: 10px;
  }
  .info-img img {
    width: 125px;
    height: 150px;
  }

  .info-img h4 {
    font-size: 0.8rem;
  }

  .slidecarousel img {
    width: 100%;
    height: 300px;
  }

  .VueCarousel-pagination {
    display: none;
  }

  .VueCarousel {
    padding: 10px 10px;
  }
}
</style>