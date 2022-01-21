import React from "react";
import PropTypes from "prop-types";
import ExerciseItem from "./ExerciseItem";
import classes from "./Exercise.module.scss";

const ExerciseList = ({ exercises }) => {
  return (
    <div className={classes.item_list}>
      {exercises.map((exercise) => (
        <ExerciseItem
          exerciseName={exercise.exerciseName}
          sets={exercise.sets}
          timeSets={exercise.timeSets}
          timeExercise={exercise.timeExercise}
          repeat={exercise.repeat}
          selectTimeType={exercise.selectTimeType}
          key={exercise.exerciseName}
        />
      ))}
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array,
};

export default ExerciseList;
