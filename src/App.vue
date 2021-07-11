<template>
  HOLA!
  <Alert variant="error">
    Texto
  </Alert>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Alert } from './components'

  export default defineComponent({
    name: "App",
    components: {
      Alert
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
