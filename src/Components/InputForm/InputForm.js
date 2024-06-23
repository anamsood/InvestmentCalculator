import { useState } from "react";
import classes from "./InputForm.module.css";

const initialUserInut = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 9,
  duration: 4,
};

function InputForm(props) {
  const [userInput, setUserInput] = useState(initialUserInut);

  function submitHandler(event) {
    event.preventDefault();
    props.onCalculate(userInput);
  }

  function resetHandler() {
    setUserInput(initialUserInut);
  }

  function inputChangeHandler(inputId, value) {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [inputId]: +value,
      };
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InputForm;
