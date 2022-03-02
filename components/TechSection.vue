<template>
<section class="tech" id="tech"> 
    
    <div class="back-layer">
        <div class="tech-background"></div>
    </div>
    <div class="tech-content">
        <h1 id="tech-tit" class="tech-title">Tech</h1>
        <div class="tech-container">
            <a class="tech-icon">
             <img src="~assets/git.svg" class="app-fav"/>
            </a>
             <a class="tech-icon">
             <img src="~assets/nuxt.svg" class="app-fav"/>
            </a>
             <a class="tech-icon">
             <img src="~assets/vue.svg" class="app-fav"/>
            </a>
            <a class="tech-icon">
             <img id="csharp" src="~assets/csharp.svg" class="app-fav"/>
            </a>
        </div>
   
    </div>
    

</section>
</template>

<style scoped>
 .tech{
   height: 100vh;
   width: 100vw; 
   display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    
}

#csharp{
    height: 80px;
    width: 80px;
}

.tech-container{
    display: flex;
}

.tech-icon{
    height: 80px;
    width: 80px;
    margin: 20px;
}

.tech-background{ 
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
   background-image: url('~assets/backcode.jpg');
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
    height: 100%;
    width: 100%;
    filter: blur(2px);
}

.back-layer{
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    left: 0;
    z-index: 0;
    overflow: hidden;
}

.tech-content{
    z-index: 1;
}

</style>


