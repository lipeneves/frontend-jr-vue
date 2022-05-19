<template>
  <div>

    <!-- Barra de Busca -->
    <div class="busca_container">
      <input type="text" v-model="text_search" placeholder="Digite aqui sua busca..." class="busca_input container">
    </div>
    <div>
      <p>{{ text_search }}</p>
    </div>

    <!-- Resultado da Busca -->
    <div id="resultado_container" class="container">
      <h1>Resultado de busca</h1>
      <PrimaryButton :text_button="btn_novo" />
    </div>
    <div id="container_cards">
      <p>Texto</p>
    </div>

  </div>
</template>

<script>

export default {
  name: "HomeView",
}
</script>

<style>
.busca_container {
  height: 261px;
  background: url('../assets/fundo-busca.png');
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 39px;
}

.busca_input {
  height: 60px;
  width: 90%;
  border-radius: 10px;
  border: none;
  padding: 5px 25px;
  font-size: 1.25rem;
  background: #fff url('../assets/lupa.png') no-repeat;
  background-position: 98% 7px;
}

h1 {
  font-weight: 400;
  font-size: 1.75rem;
  color: #f47735;
}

#resultado_container {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
}
</style>