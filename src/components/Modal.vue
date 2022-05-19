<template>
  <div id="modal">
    <button>Fechar</button>
    <img src="../assets/Icon-trash.svg" alt="Icone">
    <h2>Excluir</h2>
    <div>
      <button>Excluir</button>
      <button>Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style>
#modal {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
}
</style>