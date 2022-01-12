import CreateWorkout from "../pages/CreateWorkout";
import ReadiesWorkout from "../pages/ReadiesWorkout";
import WorkoutKinds from "../pages/WorkoutKinds";

export const routes = [
  { path: "/workout/create", component: CreateWorkout, exact: true },
  { path: "/workout/kinds", component: ReadiesWorkout, exact: true },
  { path: "/workout/readies", component: WorkoutKinds, exact: true },
];
