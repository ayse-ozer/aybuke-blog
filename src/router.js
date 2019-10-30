import Vue from 'vue';
import Router from 'vue-router';

const Anasayfa = () => import(`./Pages/Home.vue`);
const OnlineDiet = () => import(`./Pages/OnlineDiet.vue`);

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: `/`,
      name: `anasayfa`,
      component: Anasayfa,
    },
    {
      path: `/onlinediyet`,
      name: `onlinediyet`,
      component: OnlineDiet,
    },
  ],
  mode: `history`,
  scrollBehavior() {
    return window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
},
})

router.beforeEach((to, from, next) => {
  next();
})

export default router;
