import React, { Component } from 'react';
import propTypes from 'prop-types';

import Buttons from './components/Buttons';
import Statistic from './components/Statistics';
import Section from './components/Section/';
import Notification from './components/Notification';

class App extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };
  static propTypes = {
    state: propTypes.objectOf(propTypes.number.isRequired),

    doStuff: propTypes.func,
    countTotalFeedback: propTypes.func,
    countPositiveFeedbackPercentage: propTypes.func,
  };
  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };
  options = ['good', 'neutral', 'bad'];
  doStuff = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percents = Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100,
    );
    return Number.isNaN(percents) ? 0 : percents;
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={'Please leave feedback!'}>
          <Buttons options={this.options} onLeaveFeedback={this.doStuff} />
        </Section>
        <Section title={'Statistic:'}>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <Notification total={this.countTotalFeedback()} />
        </Section>
      </>
    );
  }
}
export default App;
