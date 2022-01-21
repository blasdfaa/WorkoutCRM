import React from "react";
import { useState } from "react";
import { optionsCreateWorkout } from "../../../utils/optionsList";
import AppInput from "../../UI/input/AppInput";
import AppSelect from "../../UI/select/AppSelect";
import AppButton from "../../UI/button/AppButton";
import classes from "./Form.module.scss";
import { MdAddCircleOutline } from "react-icons/md";
import ExerciseList from "../Exercise/ExerciseList";

// TODO расчет по секундам и минутам, добавить везде prop types, поставить Redux.

const Form = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({
    exerciseName: "",
    repeat: "",
    sets: "",
    timeSets: "",
    timeExercise: "",
    selectTimeType: "",
  });

  const addExercise = (e) => {
    e.preventDefault();

    const newExercise = {
      exerciseName: exercise.exerciseName,
      sets: Number(exercise.sets),
      timeSets: Number(exercise.timeSets),
      timeExercise: Number(exercise.timeExercise),
      repeat: Number(exercise.repeat),
      selectTimeType: exercise.selectTimeType,
    };
    setExercises([...exercises, newExercise]);
  };

  return (
    <form>
      <section className={classes.input_list}>
        <div className={classes.input_control}>
          <AppInput
            id="name"
            type="text"
            name="Название тренировки:"
            placeholder="Введите.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.select_control}>
          <label>Тип тренировки:</label>
          <AppSelect
            defaultValue="Выберите.."
            options={optionsCreateWorkout}
            value={option}
            onChange={(value) => setOption(value)}
          />
        </div>
      </section>
      <div style={{ width: "90%" }}>
        <AppInput
          type="text"
          placeholder="Название упражнения"
          value={exercise.exerciseName}
          onChange={(e) =>
            setExercise({ ...exercise, exerciseName: e.target.value })
          }
        />
      </div>
      <section className={classes.input_list}>
        <div className={classes.list_group}>
          <AppInput
            type="text"
            placeholder="Время между упражнениями"
            value={exercise.timeExercise}
            onChange={(e) =>
              setExercise({ ...exercise, timeExercise: e.target.value })
            }
          />
          <AppInput
            type="number"
            placeholder="Время между подходами"
            value={exercise.timeSets}
            onChange={(e) =>
              setExercise({ ...exercise, timeSets: e.target.value })
            }
          />
        </div>

        <div className={classes.list_group}>
          <AppInput
            placeholder="Кол-во подходов"
            type="number"
            value={exercise.sets}
            onChange={(e) => setExercise({ ...exercise, sets: e.target.value })}
          />
          <AppInput
            type="number"
            placeholder="Кол-во повторений"
            value={exercise.repeat}
            onChange={(e) =>
              setExercise({ ...exercise, repeat: e.target.value })
            }
          />
        </div>
        <button
          className={classes.add_exercise}
          onClick={addExercise}
          title="Добавить"
        >
          <MdAddCircleOutline size="40px" color="green" />
        </button>
      </section>
      <select
        className={classes.calculate}
        value={exercise.selectTimeType}
        onChange={(e) =>
          setExercise({ ...exercise, selectTimeType: e.target.value })
        }
      >
        <option disabled value="">
          Единицы измерения
        </option>
        <option value="sec">Секунды</option>
        <option value="min">Минуты</option>
      </select>
      <ExerciseList exercises={exercises} />
      <AppButton>Создать тренировку</AppButton>
    </form>
  );
};

export default Form;
