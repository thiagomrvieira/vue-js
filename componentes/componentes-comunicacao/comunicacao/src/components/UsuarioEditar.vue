<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade do usuário: <strong> {{idade}} </strong> </p>
        <button @click="alterarIdade" > Alterar idade</button>
        <button @click="reiniciarId" > Alterar idade (callback)</button>

    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
        reiniciarId: Function
    },
    methods:{
        alterarIdade(){
            // this.idade = 33
            this.$emit('novaIdade', 33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
