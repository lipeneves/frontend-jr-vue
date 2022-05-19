<template>
  <header>
    <img :src='logo_src' :alt='app_name' id="logo">
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['logo_src', 'app_name']
  }
</script>

<style scoped>
  header{
    height: 60px;
    width: 100%;
    background-image: linear-gradient(to right,#f47735,#bcbc40,#0d9fc1);
    padding: 15px 50px;
    display: flex;
    align-items: center;
    position: absolute;
    box-shadow: 0px 3px 6px #00000029;
  }

  #logo{
    width: 85px;
  }
</style>