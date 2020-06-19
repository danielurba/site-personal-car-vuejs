<template>
    <div @click="toogleMenu" class="content">
        <router-view></router-view>
        <div class="whatstoggle">
             <a class="btn btn-success botao" target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5545999535458">
             <img class="mb-1" src="@/assets/img/whatsapp.png" alt="whatsapp"> Atendimento Via WhatsApp !!</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    methods: {
    toogleMenu() {
        this.$store.commit('toogleMenu', false)
      }
  }
}
</script>

<style>
    .content {
        grid-area: content;
        width: 100%;
    }

    .whatstoggle {
        position: fixed;
        right: 0;
        bottom: 0;
        padding: 20px;
    }

    .botao {
        font-size: 1.2rem;
        border-radius: 50px;
    }

    .rota  {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        background: linear-gradient(90deg, rgba(157,157,157,1) 0%, rgba(232,226,226,1) 50%, rgba(157,157,157,1) 100%);
    }

    .rota a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        padding: 0px 15px;
    }

    @media (max-width: 640px) {
        .botao {
            font-size: 1rem;
        }

        .whatstoggle {
            right: 10vw;
        }

        .rota {
            display: flex;
            flex-direction: column;
            font-size: 0.8rem;
        }

        .rota a {
            font-size: 0.8rem;
            padding: 0px 4px;
        }

        .rota h2 {
            font-size: 1rem;
            margin: 0;
            padding-bottom: 20px;
        }
    }
</style>