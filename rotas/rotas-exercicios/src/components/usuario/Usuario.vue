<template>
  <div class="usuario">
      <h2>Usuarios</h2>
      <hr>
      <p><strong>Código do usuário: </strong>{{id}}</p>
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
  props: ['id'],
  methods:{
    irParaInicio(){
      // this.$router.push('/')
      // ou
      this.$router.push({
        path: '/'
      })

    }      
  }
}
</script>

<style>

</style>