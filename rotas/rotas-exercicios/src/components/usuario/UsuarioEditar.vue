<template>
    <div class="usuario-editar">
        <h3>Editar usuário</h3>
        <p><strong>Código do usuário: </strong>{{id}}</p>
        <p><strong>Completo:</strong> {{$route.query.completo ? 'Sim' : 'Não'}}</p>
        <p><strong>Idioma:</strong> {{$route.query.idioma}}</p>
        <hr>
        <button primario> Confirmar</button>
        <div id="rodape">
            <h3>Curso vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
}
</script>

<style>
    #rodape{
        margin-top: 1000px;
    }
</style>