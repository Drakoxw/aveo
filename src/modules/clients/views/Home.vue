<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { PRODUCTOS } from '../../../core/services/http.service';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup(){
    PRODUCTOS.getAll().then(res => console.log(res) )
  }
});
</script>
