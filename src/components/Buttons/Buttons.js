import React from 'react';
import style from './Buttons.module.css';

const Buttons = ({ options, onLeaveFeedback }) => (
  <div className={style.wrapper}>
    {options.map((option, idx) => (
      <button
        key={idx}
        type="button"
        className={style.btn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
export default Buttons;
