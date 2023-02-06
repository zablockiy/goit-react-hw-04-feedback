import React, {Component} from 'react';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import Section from './section/section';
import Notification from './notification/notification';
import Statistics from './statistics/statistics';
import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () =>
  this.state.good + this.state.neutral + this.state.bad



  countPositiveFeedbackPercentage = () =>
  Number.parseInt(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)


  render() {
    const { good, neutral, bad } = this.state;

    const objKey = Object.keys(this.state);


    return (
      <Section
        title={'statictics form'}
        subtitle={'Please leave feedback'}>
        <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
        {this.countTotalFeedback() ?
          <Statistics
            title='Statistics'
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          /> :

          <Notification message="There is no feedback" />
        }
      </Section>
    );
  }}
