<template>
  <section class="about" id="about">
    <div class="animated-layer"></div>
    <div about-content>
      <h1>{{ $t('aboutTitle') }}</h1>
      <p>{{ $t('aboutDescription') }}</p>
      <p>{{ $t('aboutExtras') }}</p>
    </div>
  </section>
</template>

<style>
.about {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animated-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(-15deg, #2d2d30,#404044,#0563af,#66d3fa);
  background-size: 400% 400% ;
  opacity: 0.7;
  left: 0;
  z-index: -1;
  animation: change 10s ease-in-out infinite;
}

.about-content{
    z-index: 2;
}


@keyframes change {
    0%{
        background-position: 0 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
}
</style>