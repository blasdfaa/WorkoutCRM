import { makeAutoObservable } from "mobx";

class Exercise {
  workouts = [
    {
      id: 1,
      name: "Тренировка 1",
      type: "Силовая",
      exercises: [
        {
          id_exercise: 1,
          exerciseName: "Приседания",
          repeat: 15,
          sets: 5,
          timeSets: 120,
          timeExercise: 120,
          selectTimeType: "sec",
        },
        {
          id_exercise: 2,
          exerciseName: "Пресс",
          repeat: 25,
          sets: 4,
          timeSets: 60,
          timeExercise: 60,
          selectTimeType: "sec",
        },
      ],
    },
    {
      id: 2,
      name: "Тренировка 2",
      type: "Круговая",
      exercises: [
        {
          id_exercise: 1,
          exerciseName: "Отжимания",
          repeat: 35,
          sets: 3,
          timeSets: 1,
          timeExercise: 1,
          selectTimeType: "min",
        },
        {
          id_exercise: 2,
          exerciseName: "Подтягивания",
          repeat: 10,
          sets: 4,
          timeSets: 1,
          timeExercise: 2,
          selectTimeType: "min",
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addWorkout(exercise) {
    this.workouts.push(exercise);
  }
}

export default new Exercise();
