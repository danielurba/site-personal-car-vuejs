<template>
    <div class="header">
        <router-link to="/" ><i class="fa fa-home"></i> HOME</router-link>
        <router-link to="/services"><i class="fa fa-cogs"></i> SERVIÇOS</router-link>
        <router-link to="/contacts" ><i class="fa fa-phone"></i> CONTATO</router-link>
        <router-link to="/info"><i class="fa fa-info-circle"></i> QUEM SOMOS</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
      grid-area: header;
      background-color: #000;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .header a {
        text-decoration: none;
        color: #fff;
    }

    .header a:hover {
        color: #aaa;
    }

    .header .whats {
        color: rgb(22, 202, 37);
    }

    @media (max-width: 640px) {
        .header {
            display: none;
        }
    }
</style>