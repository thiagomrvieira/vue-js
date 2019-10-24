new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
   
    computed:{
        resultado(){
            return this.resultado = this.valor != 37 ? 'Diferente' : 'Valor igual'
        }
    },
    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
        
    },
   
   
});