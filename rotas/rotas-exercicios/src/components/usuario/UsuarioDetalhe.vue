<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <p><strong>Código do usuário: </strong>{{id}}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->
        <router-link tag="button" primario 
            :to="{ name: 'editarUsuario', params:{id}, 
                   query:{ completo: false, idioma: 'Pt-br'},
                   hash:'#rodape'}">
            Editar</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter (to, from, next) {
        console.log('Dentro do componente -> UsuarioDetalhe')
        next()
    }
}
</script>

<style>

</style>