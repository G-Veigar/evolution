<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="goAbout">parmas</button>
      <button @click="goAbout2">query</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goAbout () {
      this.$router.push({
        name: 'about',
        params: {
          date: '2019'
        }
      })
    },
    goAbout2 () {
      this.$router.push({
        name: 'about',
        params: {
          date: '2019'
        },
        query: {
          date2: '2019'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
