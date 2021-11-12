import { useState } from "react";
import "./index.css";
import Container from "./components/Container";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const feedbacks = ["good", "neutral", "bad"];

  const onFeedbackValue = (e) => {
    switch (e.target.value) {
      case "good":
        return setGood((good) => good + 1);

      case "neutral":
        return setNeutral((neutral) => neutral + 1);

      case "bad":
        return setBad((bad) => bad + 1);

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return countTotalFeedback(good, neutral, bad)
      ? Math.round((good * 100) / countTotalFeedback(good, neutral, bad))
      : 0;
  };

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
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Container>
  );
}

// class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onFeedbackValue = (e) => {
//     const feedbackOptions = e.target.value;
//     this.setState((prevState) => ({
//       ...prevState,
//       [feedbackOptions]: prevState[feedbackOptions] + 1,
//     }));
//   };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

//   countPositiveFeedbackPercentage = () => {
//     let countTotalFeedback = this.countTotalFeedback();
//     return countTotalFeedback
//       ? Math.round((this.state.good * 100) / countTotalFeedback)
//       : 0;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     const feedbacks = ["good", "neutral", "bad"];
//     const { onFeedbackValue } = this;

//     return (
//       <Container>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             feedbacks={feedbacks}
//             onFeedbackValue={onFeedbackValue}
//           />
//         </Section>
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback}
//           positivePercentage={positiveFeedbackPercentage}
//         />
//       </Container>
//     );
//   }
// }
