<template>
  <div class="contador">
    <span>{{contador}}</span>
    <button @click="soma"> + </button>
    <button @click="subtrai"> - </button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            contador : 0
        }
    }, 
    methods: {
        soma(){
            this.contador ++
        },
        subtrai(){
            this.contador --
        }
    }
}
</script>

<style scoped>
span{
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
}

button{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
}
</style>
