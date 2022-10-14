import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import {firstLetterUppercase} from '../../services/firstLetterUppercase'

export const Statistics = ({ total, positivePercentage, reactions, options }) => {
  const { stat__wrap, stat__lab, stat__val, stat__txt } = styles;

  return (
    <div className={stat__wrap}>
      {options.map(option => (
        <p className={stat__txt} key={option}>
          <span className={stat__lab}>{firstLetterUppercase(option)}: </span>
          <span className={stat__val}>{reactions[option]}</span>
        </p>
      ))}
      <p className={stat__txt}>
        <span className={stat__lab}>Total: </span>
        <span className={stat__val}>{total}</span>
      </p>
      <p className={stat__txt}>
        <span className={stat__lab}>Positive feedback: </span>
        <span className={stat__val}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  reactions: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;