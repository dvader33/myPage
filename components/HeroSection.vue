<template>
    <section class="hero">
        
        <div class="hero-layer">
            <div class="hero-background"></div>
        </div>
        <h1>{{ $t('message') }}</h1>
    </section>
</template>

<style scoped lang="scss">
.hero{
    margin-top: -150px;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-layer{
    position: absolute;
    left: 0;
   height: 100%;
   width: 100%;
   background-color: black;
   opacity: 0.7;
   z-index: -1;
   overflow: hidden;
}

.hero-background{
    position: absolute;
    left: 0;
    background-image: url('~assets/techno.jpeg');
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   height: 100%;
   width: 100%;
   filter: blur(6px);
   z-index: -2;
}
</style>