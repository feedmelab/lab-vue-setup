<template>
  <div class="app">
    <h1>First Vue App</h1>
    <nav>
      <router-link to="/" exact-active-class="active">Home </router-link>|
      <router-link to="/my-component" exact-active-class="activeB"
        >My Component </router-link
      >|
      <router-link to="/binding" exact-active-class="activeC"
        >Another Page</router-link
      >
      <router-view />
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: rgb(248, 248, 245);
}
nav {
  text-align: center;
  padding: 2rem;
}
.app {
  width: 100%;
  height: 100%;
}
h1 {
  font-size: 3rem;
  display: flex;
  justify-content: center;
}
ul {
  display: flex;
  padding-inline-start: 0px;
  justify-content: space-evenly;
}
nav a {
  padding: 1rem;
  color: black;
  background-color: azure;
  text-decoration: none;
}
nav a:hover {
  color: red;
  background-color: rgb(182, 206, 206);
}
.active {
  color: #92ff05;
}
.activeB {
  color: #1f22e0;
}
.activeC {
  color: #ff0707;
}
</style>
