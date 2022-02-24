<template>
    <div id="container">
    <hero-section/>
    <about-section/>
    <tech-section/>
    <work-section/>
    </div>
</template>
<style>
    body{
        background-color: #2d2d30;
        margin: 0;
        color: white;
        overflow-x: hidden;
    }

</style>

<script>
export default {
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed (){
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            console.log(window.scrollY);
            //document.getElementById('circ').style.opacity =  (0 + window.scrollY/250)
            //document.getElementById('circ').style.transform =  ("scale("+0 + window.scrollY/25+")")
        }
    }
}
</script>