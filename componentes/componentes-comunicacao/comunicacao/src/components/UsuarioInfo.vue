<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p> Nome do usuário: <strong> {{inverterNome()}} </strong> </p>
        <button @click="reiniciarNome"> Reiniciar nome</button>
        <button @click="reiniciarFn">Alterar nome (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        // nome: String

        // ou Pode ser do tipo String ou Array
        // nome: [String, Array] // 
        nome: {
            type: String,
            // required: true,
            default: 'Thiago'
        },
        reiniciarFn: Function
    } ,
    // É possivel manipular dados passados como prop
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('novoNome', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
