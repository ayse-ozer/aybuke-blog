<template>
  <div class="app-container">
    <transition name="fade" mode="out-in" appear>
      <Header />
    </transition>
    <div>
      <transition name="fade" duration="300" mode="out-in">
        <slot></slot>
      </transition>
    </div>
    <transition name="fade" mode="out-in" appear>
      <Footer />
    </transition>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
