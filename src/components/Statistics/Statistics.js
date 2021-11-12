import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total(good, neutral, bad) ? (
      <>
        <ul className={s.statisticList}>
          <li className={s.statisticItem}>Good: {good}</li>
          <li className={s.statisticItem}>Neutral: {neutral}</li>
          <li className={s.statisticItem}>Bad: {bad}</li>
        </ul>
        <p className={s.statisticItem}>Total: {total(good, neutral, bad)}</p>
        <p className={s.statisticItem}>
          Positive feedback: {positivePercentage(good, neutral, bad)}%
        </p>
      </>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
