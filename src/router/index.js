import Vue from "vue";
import Router from "vue-router";
import BasicLayout from "@/layout/BasicLayout";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: BasicLayout,
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "@/views/home/Index.vue")
        }
      ]
    }
  ]
});
router.afterEach(() => {
  const main = document.getElementById("main");
  if (main) {
    const child = main.firstElementChild;
    child.scrollIntoView(true);
  }
});
export default router;
