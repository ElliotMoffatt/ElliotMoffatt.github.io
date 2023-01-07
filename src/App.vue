<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav" style="position:sticky">
      <span class="navbar-brand mr-3" id="navbar-name"><router-link to="/">Elliot Moffatt</router-link></span>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <span class="nav-item nav-link active">
            <router-link to="/">Projects</router-link>
          </span>
          <span class="nav-item nav-link">
            <router-link to="/University">University</router-link>
          </span>
        </div>
      </div>
    </nav>

    <div class="container-fluid mt-4">
      <router-view />
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #navbar-name a {
    margin-right: 30px !important;
    font-weight: bold !important;
    color: #702963 !important;
  }

  #nav {
    padding: 15px;
  }

    #nav a {
      font-weight: bolder;
      color: #702963;
      margin-right: 5px;
      text-decoration: none
    }

      #nav a.router-link-exact-active {
        color: #42b983;
      }
</style>
