import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Vibration } from 'react-native';
import Timer from './components/Timer';
import TimerInput from './components/TimerInput';

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
export default class App extends Component {
  state = {
    current: {
      minutes: 25,
      seconds: 0,
      playOrPause: 'Pause',
      doing: 'work',
    },
    inputs: {
      work: {
        minutes: 25,
        seconds: 0,
      },
      rest: {
        minutes: 5,
        seconds: 0,
      },
    },
  };

  onChangeText = (change, type, time) => {
    if (!+change && change !== '' && change !== "0" || time == 'seconds' && change > 60 || change < 0) {
      return;
    }
    else if (change > 1440) {
      change = 1440
    }
    else if (change.length > 1 && change[0] === '0') {
      change = change.slice(1)
    }
    else if (!change) {
      change = 0

    }

    newState = this.state;
    newState.inputs[type][time] = change;
    this.setState(newState);
    if (this.state.current.doing === type) {
      this.resetTimer('same')
    }
    this.onPlayOrPause('pause')

  };

  resetTimer = (action = "switch") => {
    newState = this.state;
    if (newState.current.doing === 'rest' && action === 'switch' || action === 'start' || action === 'same' && newState.current.doing === 'work') {
      newState.current.minutes = this.state.inputs.work.minutes;
      newState.current.seconds = this.state.inputs.work.seconds;
      newState.current.doing = 'work';
    } else {
      newState.current.minutes = this.state.inputs.rest.minutes;
      newState.current.seconds = this.state.inputs.rest.seconds;
      newState.current.doing = 'rest';
    }
    this.setState(newState);
  };

  inc = () => {
    let seconds = this.state.current.seconds - 1;
    let minutes = this.state.current.minutes;

    if (seconds === -1) {
      seconds = 59;
      minutes = this.state.current.minutes - 1;
    }
    if (this.state.current.minutes == 0 && this.state.current.seconds == 0) {
      Vibration.vibrate([500,500,500])
      return this.resetTimer();
    }

    newState = this.state;
    newState.current.minutes = minutes;
    newState.current.seconds = seconds;
    this.setState(newState);
  };

  onPlayOrPause = (action = 'toggle') => {
    newState = this.state
    if (newState.current.playOrPause === 'Pause' && action === 'toggle' || action === 'pause') {
      clearInterval(this.intervals)
      newState.current.playOrPause = 'Play'
    }
    else {
      this.intervals = setInterval(this.inc, 1000)
      newState.current.playOrPause = 'Pause'
    }
    this.setState(newState)
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Timer
          {...this.state.current}
          count={() => { this.intervals = setInterval(this.inc, 1000); }}
          onPlayOrPause={() => this.onPlayOrPause()}
          onReset={() => this.resetTimer('start')}
        />
        <TimerInput {...this.state.inputs} onChangeText={this.onChangeText} />
      </View>
    );
  }
}
