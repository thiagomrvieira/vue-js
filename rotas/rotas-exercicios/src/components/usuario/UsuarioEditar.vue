<template>
    <div class="usuario-editar">
        <h3>Editar usuário</h3>
        <p><strong>Código do usuário: </strong>{{id}}</p>
        <p><strong>Completo:</strong> {{$route.query.completo ? 'Sim' : 'Não'}}</p>
        <p><strong>Idioma:</strong> {{$route.query.idioma}}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
}
</script>

<style>

</style>