<template>
  <div id="container_cards">
    <div v-for="(item) in listPokes" :key="item.name" class="card">

      <img :src="item.imgUrl" alt="" class="img_poke">
      <h2 class="title_card">{{ item.name }}</h2>
      <ul class="btn_cards">
        <li>
          <a href="#"><img src="../assets/Icon-trash.svg" alt="Excluir" class="img_btn">Excluir</a>
        </li>
        <li>
          <a href="#"><img src="../assets/Icon-edit.svg" alt="Editar" class="img_btn">Editar</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import pokeApi from '../services/pokeapi-service';
import axios from "axios";

export default {
  name: 'Card',
  data() {
    return {
      title: 'Teste',
      listPokes: []
    }
  },

  methods: {
    async loadImage(element) {
      return await axios.get(element.url).then(
        (success) => {
          return Promise.resolve(success.data.sprites.front_default)
            .then((value) => {
              element.imgUrl = value;
              console.log(this.url);
            });
        },
        (error) => {
          console.log(error);
        }
      );
    },

    async load() {
      pokeApi.pokemon(0).then(
        (success) => {
          this.listPokes = success.data.results;
          this.listPokes.forEach(element => {
            const imgUrl = this.loadImage(element)
          });
        },
        (error) => {
          console.log(error);
        }
      )
    }
  },

  beforeMount() {
    this.load();
  }
}
</script>

<style>
#container_cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
}

.card {
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #E4E4E4;
  box-shadow: 0px 3px 6px #E5E5E5;
  align-items: center;
}

.title_card {
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  text-transform: capitalize;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn_cards {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 43px;
  border-top: 1px solid #ddd;
  box-shadow: 0px 3px 6px #E5E5E5;

}

.img_poke {
  width: 96px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: #F6F4F6;
}

.img_btn {
  margin-right: 10px;
}

a {
  color: #263238;
}
</style>