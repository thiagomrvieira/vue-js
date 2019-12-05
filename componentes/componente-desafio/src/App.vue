<template>
	<v-app>
		<navbar />
		<toolbar />
		<cont />
		
		<foot />
	</v-app>
</template>

<script>
import nav from './Nav.vue'
import toll from './Tollbar.vue'
import content from './Content.vue'
import footer from './Footer.vue'

export default {
	data() {
		return {
			// itensMenu: [
			// 	{titulo: 'Início', icon: 'dashboard'},
			// 	{titulo: 'Sobre', icon: 'question_answer'}
			// ],
			// fotos: [
			// 	{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
			// 	{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
			// 	{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
			// 	{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			// ]
		}
	}, 
	components:{navbar: nav,  toolbar: toll, cont: content, foot: footer}

}
</script>
