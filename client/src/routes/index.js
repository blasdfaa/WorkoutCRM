import CreateWorkout from "../pages/CreateWorkout";
import Login from "../pages/Login";
import ReadiesWorkout from "../pages/ReadiesWorkout";
import Register from "../pages/Register";
import WorkoutTypes from "../pages/WorkoutTypes";

export const routes = [
  { path: "/workout/create", component: CreateWorkout, exact: true },
  { path: "/workout/types", component: ReadiesWorkout, exact: true },
  { path: "/workout/readies", component: WorkoutTypes, exact: true },
];

export const authRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
];
