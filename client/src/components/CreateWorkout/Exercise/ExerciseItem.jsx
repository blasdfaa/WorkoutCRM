import React from "react";
import PropTypes from "prop-types";
import classes from "./Exercise.module.scss";

const ExerciseItem = ({
  exerciseName,
  sets,
  timeSets,
  timeExercise,
  repeat,
  selectTimeType,
}) => {
  return (
    <div className={classes.item}>
      <div>
        <h3>Название упражнения:</h3>
        <p>{exerciseName}</p>
      </div>
      <div>
        <h3>Кол-во подходов:</h3>
        <p>{sets}</p>
      </div>
      <div>
        <h3>Кол-во повторений</h3>
        <p>{repeat}</p>
      </div>
      <div>
        <h3>Время между подходами:</h3>
        <p>
          {timeSets} {selectTimeType === "sec" ? "секунд/-ы" : "минут/-ы"}
        </p>
      </div>
      <div>
        <h3>Время между упражнениями:</h3>
        <p>
          {timeExercise} {selectTimeType === "sec" ? "секунд/-ы" : "минут/-ы"}
        </p>
      </div>
    </div>
  );
};

export default ExerciseItem;
ExerciseItem.propTypes = {
  exerciseName: PropTypes.string,
  sets: PropTypes.number,
  timeSets: PropTypes.number,
  timeExercise: PropTypes.number,
  repeat: PropTypes.number,
  selectTimeType: PropTypes.string,
};
