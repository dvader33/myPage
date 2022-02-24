<template>
    <section class="work">
        <h2>work</h2>
        <div class="places-container">
            <a href="https://www.corporacionbi.com/" target="_blank" class="project project-tile">
                <img class="project-image" src="~assets/bi.jpg" alt="project">
                <p class="project-title">
                Banco Industrial <br/>
                <span class="code">&lt;</span>
                Administrador de sistemas
                <span class="code">/&gt;</span>
                </p>
            </a>
            <a href="https://principal.url.edu.gt/" target="_blank" class="project project-tile">
                <img class="project-image" src="~assets/url.png" alt="project">
                <p class="project-title">
                Universidad Rafael Landivar <br/>
                <span class="code">&lt;</span>
                Catedratico
                <span class="code">/&gt;</span>
                </p>
            </a>
            <a href="https://www.pixela.com.gt/" target="_blank" class="project project-tile">
                <img class="project-image" src="~assets/pixela.png" alt="project">
                <p class="project-title">
                Pixela<br/>
                <span class="code">&lt;</span>
                Frontend Developer
                <span class="code">/&gt;</span>
                </p>
            </a>
            <a class="project project-tile">
                <img class="project-image" src="~assets/remesas.png" alt="project">
                <p class="project-title">
                Empresas locales<br/>
                <span class="code">&lt;</span>
                Desarrollador de Software
                <span class="code">/&gt;</span>
                </p>
            </a>
        </div>       
    </section>
</template>
<style scoped>
.work{
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.project {
  background: #303841;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 50%);
  border-radius: 2px;
  text-decoration: none;
}

.project-image {
  height: calc(100% - 6.8rem);
  width: 100%;
  object-fit: cover;
}

.project-title {
  font-size: 16px;
  padding: 2rem 0.5rem;
  color: white;
  text-align: center;
  margin: 0;
}

.places-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 4rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: 24px;
    padding: 16px;
    box-sizing: border-box;
}
</style>