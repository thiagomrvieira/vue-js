new Vue({
    el: '#desafio',
    data: {
        nome:  'Thiago Maciel',
        idade: 31,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        numAleatorio(){
            return Math.random(0 , 1)
        }
    },
})