<template>
  <div>
    <header class="head">
      <nuxt-link class="home-link" :to="`/${$i18n.locale}`">
        <h2>Daniel Rivera</h2>
      </nuxt-link>
      <div class="link-container">
          <nuxt-link to="#about">about</nuxt-link>
          <nuxt-link to="#tech">tech</nuxt-link>
          <nuxt-link to="#work">work</nuxt-link>
      </div>
      <language-input />
    </header>
    <nuxt />
    <footer class="footer">
      <h1>contacto</h1>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.head {
  height: 150px;
  width: 100vw;
  background-color: #3e3e42;
  display: flex;
  position: sticky;
  top: 0;
  padding: 16px;
  box-sizing: border-box;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
}

.home-link {
  text-decoration: none;
  color: white;
}

.footer {
  height: 150px;
  width: 100vw;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
}

.link-container{
    width: 200px;
    display: flex;
    justify-content: space-around;

    a{
        font-size: 20px;
        transition: all .2s ease-in-out;
        &:hover{
            transform:  scale(1.25);
        }
    }
}

</style>

