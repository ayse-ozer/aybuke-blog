<template>
  <div>
    <b-navbar toggleable="md" type="dark" v-scroll="handleScroll" id="nav">
      <b-navbar-brand>
        <div class="logo">
          <img src="../assets/img/logo1.png" alt width="60%" height="100%" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="nav-collapse" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/" tag="li" active-class="active" class="router-tag" exact>
            <a class="link-a">Anasayfa</a>
          </router-link>
          <router-link to="/onlinediyet" tag="li" active-class="active" class="router-tag">
            <a class="link-a">Online Diyet</a>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll: (event, el) => {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "box-shadow: 1px 1px 10px 1px #ddd; transition: all .6s ease-in-out;"
        );
      } else {
        el.setAttribute("style", "box-shadow: 0px 0px 0px 0px ;");
      }
    }
  }
};
</script>
<style  scoped>
#nav {
  position: fixed;
  top: 0;
  background-color: #fafafa;
  width: 100%;
  /* height: 80px; */
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #484848;
  z-index: 1071;
}
.logo {
  max-width: 200px;
  max-height: 70px;
}
img {
  height: auto;
}
.router-tag {
  margin-right: 20px;
  text-align: center;
}
.router-tag.active {
  font-weight: bold;
  border-bottom: 2px solid #60ba62;
}
.link-a {
  color: #484848;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  ul {
    text-align: center;
    padding-bottom: 15px;
  }
  .router-tag {
    height: 40px;

    margin: 0px auto;
    padding: 15px 0px;
    text-align: center;
    width: 30%;
  }
  .logo {
  max-width: 150px;
  max-height: 70px;
  text-align: left;
}
#nav{
  font-size: 13px;
}

button:focus {
    outline: 1px solid;
    outline: 0px auto ;
}
.navbar-dark .navbar-toggler {
    border-color: transparent;
}
}
</style>