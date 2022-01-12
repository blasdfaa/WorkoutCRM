import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/workout/create",
    name: "CreateWorkout",
    component: () => import("../views/CreateWorkout.vue"),
  },
  {
    path: "/workout/kinds",
    name: "WorkoutKinds",
    component: () => import("../views/WorkoutKinds.vue"),
  },
  {
    path: "/workout/readies",
    name: "WorkoutReadies",
    component: () => import("../views/ReadiesWorkout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link"
});

export default router;
