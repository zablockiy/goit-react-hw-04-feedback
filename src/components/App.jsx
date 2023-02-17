import {useState} from 'react';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Section from './section/section';
import Notification from './notification/notification';
import Statistics from './statistics/statistics';

const App =()=>{

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const buttonsName = ['good', 'neutral', 'bad']
  const buttonsName = Object.keys({good, neutral, bad})

  const onLeaveFeedback = (e) => {
    const {name} = e.target
    if (name === 'good') {
      setGood(prevState => prevState +1)
    }
    if (name === 'bad') {
      setBad(prevState => prevState +1)
    }
    if (name === 'neutral') {
      setNeutral(prevState => prevState +1)
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Number.parseInt(good / (good + neutral + bad) * 100);

  return (
    <Section
      title={'statictics form'}
      subtitle={'Please leave feedback'}>
      <FeedbackOptions options={buttonsName} onLeaveFeedback={onLeaveFeedback} />
      {countTotalFeedback ?
        <Statistics
          title='Statistics'
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          percentage={countPositiveFeedbackPercentage}
        /> :

        <Notification message="There is no feedback" />
      }
    </Section>
  )
  }
export {App};



