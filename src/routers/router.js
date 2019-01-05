import Home2 from "@/views/main-page/Home2.vue";

const homepage = {
  path: "/",
  name: "other",
  redirect: "/home",
  component: Home2,
  children: [
    {
      path: "home",
      name: "home_index",
      component: resolve => {
        require(["@/views/main-page/Carview.vue"], resolve);
      }
    },
    {
      path: "info",
      name: "info_index",
      component: () => import("@/views/main-page/TText.vue")
    },
    {
      path: "guide",
      name: "guide_index",
      component: () => import("@/views/main-page/MMap.vue")
    },
    {
      path: "phase",
      name: "phase_index",
      component: () => import("@/views/main-page/Phase.vue")
    },
    {
      path: "introduce",
      name: "introduce_index",
      component: () => import("@/views/main-page/Introduce.vue")
    },
    {
      path: "tells",
      name: "tells_index",
      component: () => import("@/views/main-page/Tells.vue")
    },
    {
      path: "show",
      name: "show_index",
      component: () => import("@/views/main-page/Show.vue")
    }
  ]
};

const aboutpage = {
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
};

export const routes = [homepage, aboutpage];
