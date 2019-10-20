new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Isso é um alerta!')
        },
        guardaValor(event){

            this.valor = event.target.value
        }

    },
})