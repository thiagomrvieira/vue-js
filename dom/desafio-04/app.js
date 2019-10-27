new Vue({
	el: '#desafio',
	data: {
		des: true,
		enc: false,
		classe: '',
		class01: '',
		aplicarC1: false
	},
	methods: {
		iniciarEfeito() {
			this.des = !this.des,
			this.enc = !this.enc
			
		},
		iniciarProgresso() {

		}
	}
})
