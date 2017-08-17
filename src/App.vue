<template>
    <div id="app">
        <header>
            <img style="width: 130px;padding: 10px;float: left;" src="./assets/logo.png" alt="Vue.js PWA">
            <span style="color: #e70962;line-height: 40px;font-weight: bold;font-family: sans-serif;">Astro Programme Guide</span>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style >
body {
    margin: 0;
    background-color: #f5f5f5;
    color: #838383;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-bottom: 100px;
}
main {
    text-align: center;
    margin-top: 40px;
}
header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
}
header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}
</style>
