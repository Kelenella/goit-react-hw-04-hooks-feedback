import React, { Component } from "react";
import "./index.css";
import Container from "./components/Container";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackValue = (e) => {
    const feedbackOptions = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [feedbackOptions]: prevState[feedbackOptions] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotalFeedback = this.countTotalFeedback();
    return countTotalFeedback
      ? Math.round((this.state.good * 100) / countTotalFeedback)
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const feedbacks = ["good", "neutral", "bad"];
    const { onFeedbackValue } = this;

    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            feedbacks={feedbacks}
            onFeedbackValue={onFeedbackValue}
          />
        </Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Container>
    );
  }
}
export default App;
