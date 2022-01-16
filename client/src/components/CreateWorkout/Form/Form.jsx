import React from "react";
import { useState } from "react";
import { optionsCreateWorkout } from "../../../utils/optionsList";
import AppInput from "../../UI/input/AppInput";
import AppSelect from "../../UI/select/AppSelect";
import classes from "./Form.module.scss";
import { MdAddTask } from "react-icons/md";

// TODO Сделать объект упражнения, сделать список упражнений и отдельный элемент списка.

const Form = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(null);
  const [time, setTime] = useState(null);


  const test = (e) => {
    e.preventDefault();
    console.log(name, option);
  };

  const addExercise = (e) => {
    e.preventDefault();
    console.log(exercise, sets, time);
  };

  return (
    <form>
      <div className={classes.input_list}>
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
      </div>
      <div className={classes.input_list}>
        <AppInput
          type="text"
          placeholder="Название упражнения"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <AppInput
          type="number"
          placeholder="Кол-во подходов"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <AppInput
          type="number"
          placeholder="Время между подходами"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button className={classes.add_exercise} onClick={addExercise}>
          <MdAddTask size="2em" color="green" />
        </button>
      </div>
      <button onClick={test}>Test</button>
    </form>
  );
};

export default Form;
