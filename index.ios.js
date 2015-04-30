/**
 * Alternative UI for date/time selection
 * https://github.com/christopherdro/react-native-alt-date-time-picker
 */
'use strict';

var React = require('react-native');
var moment = require('moment');
var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

class AltDateTimePicker extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      date: moment().add(30 - moment(new Date()).minutes() % 30, 'minutes')
    }
  }

  /*
  Date selector buttons
  */
  subtractDay(){
    // if (moment(this.state.date).isSame(new Date, 'day')) return;    // Disable going back with date selection
    this.setState({ date: moment(this.state.date).subtract(1, 'day') });
  }

  addDay(){
    this.setState({ date: moment(this.state.date).add(1, 'day') });
  }

  /*
  Time selector buttons
  */
  subtractTime(){
    // if (moment(this.state.date).hour() === 8 && moment(this.state.date).minutes() === 0) return; // Set 8am as minimum time slot
    this.setState({ date: moment(this.state.date).subtract(30, 'minutes') });
  }

  addTime(){
    // if (moment(this.state.date).hour() === 23 && moment(this.state.date).minutes() === 0) return; // Set 11pm as maximum time slot
    this.setState({ date: moment(this.state.date).add(30, 'minutes') });
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.subtractDay.bind(this)}
            underlayColor="transparent">
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>

          <Text style={styles.text}> {moment(this.state.date).format('dddd') + '\n' + moment(this.state.date).format('MMM D, YYYY')} </Text>
        
          <TouchableHighlight
            onPress={this.addDay.bind(this)}
            underlayColor="transparent">
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
        </View>
        
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.subtractTime.bind(this)}
            underlayColor="transparent">
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>

          <Text style={styles.text}> { moment(this.state.date).format('hh:mm') + '\n' + moment(this.state.date).format('A') } </Text>
        
          <TouchableHighlight
            onPress={this.addTime.bind(this)}
            underlayColor="transparent">
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: 'black',
  },

});

AppRegistry.registerComponent('AltDateTimePicker', () => AltDateTimePicker);
