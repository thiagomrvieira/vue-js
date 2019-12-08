<template>
	<v-app>
		<Navbar />
		<Toolbar />
		<Content />
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/template/Nav.vue'
import Toolbar from '@/components/template/Tollbar.vue'
import Content from '@/Content.vue'
import Footer from '@/components/template/Footer.vue'

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
	components:{Navbar,  Toolbar, Content, Footer}

}
</script>
