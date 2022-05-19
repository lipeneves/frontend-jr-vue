<template>

  <Header :logo_src='src' :app_name='alt'/>
  <HomeView />

</template>

<script>
import Header from './components/Header.vue'
import HomeView from './views/Home.vue'

export default{
  components: {
    Header, HomeView
  },

  data(){
    return {
      src: '/img/logo.png',
      alt: 'Sensus Tecnologia'
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: #f7eee9;
  }

  .container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>