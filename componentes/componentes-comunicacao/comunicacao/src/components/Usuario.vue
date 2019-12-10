<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é: <strong> {{nome}} </strong></p>
        <p>A idade é: <strong> {{idade}}</strong></p>
        <button @click="alterarNome"> Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
            :nome="nome"
            :idade="idade"
            @novoNome = "nome = $event"
            :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar 
            :idade="idade"
            @novaIdade = "idade = $event"

            />

        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data (){
        return {
            nome: 'Pedro Alcantara',
            idade: 31
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome(){
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
