<template> 
    <div>
        <header class="head">
            <h1>Daniel Rivera</h1>
            <language-input/>
        </header>
        <nuxt/>
        <footer class="footer">
         <h1>contacto</h1>
        </footer>
    </div>
</template>

<style scoped>
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
    align-items: center
    ;
}

.footer{
    height: 150px;
    width: 100vw;;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    box-sizing: border-box;
}
</style>
