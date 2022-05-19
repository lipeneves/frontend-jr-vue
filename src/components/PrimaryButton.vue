<template>
  <input type="button" :value="text_button" class="btn_primary">
</template>

<script>
  export default{
    name: 'PrimaryButton',
    props: ['text_button']
  }
</script>

<style>

  .btn_primary{
    background: #E76316;
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1.05rem;
  }

</style>