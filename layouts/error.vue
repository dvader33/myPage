<template>
    <div class="error-screen">
        <h1>ERROR</h1>
        {{ error.message }} {{ error.statusCode }}
    </div>
</template>
<script>
export default {
    head(){
      return{
          title: 'ERROR'
      }  
    },
  props: {
      error:{
          type: Object,
          required: true
      }
  }
}
</script>

<style>
.error-screen{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -150px;
    background-image: url('~assets/desert.jpeg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>