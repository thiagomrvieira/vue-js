<template>
  <div class="usuario">
      <h2>Usuarios</h2>
      <hr>
      <router-view />
      <button sucesso @click="irParaInicio"> Voltar </button>
  </div>
</template>

<script>
export default {  
  // data(){
  //   return {
  //     id: this.$route.params.id,
  //     teste: 'Thiago'
  //   }
  // },
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id
  //   }
  // },
 
  methods:{
    irParaInicio(){
      // this.$router.push('/')
      // ou
      
      // this.$router.push({
      //   path: '/'
      // })
      
      // rota nomeada
      this.$router.push({
        name: 'inicio', path: '/'
      })

    }      
  }
}
</script>

<style>

</style>