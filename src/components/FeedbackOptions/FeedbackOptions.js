import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ feedbacks, onFeedbackValue }) => (
  <>
    <div className={s.btnGroup}>
      {feedbacks.map((feedback) => (
        <button
          key={feedback}
          className={s.btn}
          type="button"
          value={feedback}
          onClick={onFeedbackValue}
        >
          {feedback}
        </button>
      ))}
    </div>
  </>
);

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.array,
  onFeedbackValue: PropTypes.func.isRequired,
};

export default FeedbackOptions;
