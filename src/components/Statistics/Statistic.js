import React from 'react';
import style from './Statistic.module.css';
const Statistic = ({ good, neutral, bad, total, positivePercentage }) =>
  total !== 0 && (
    <ul className={style.list}>
      <li>good: {good}</li>
      <li>neutral: {neutral} </li>
      <li>bad: {bad} </li>
      <li>total: {total}</li>
      <li>positive feedback: {positivePercentage}%</li>
    </ul>
  );

export default Statistic;
