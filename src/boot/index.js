
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/actions/AppActions';
import { bindActionCreators } from 'redux';

type Props = {};
class index extends Component<Props> {

  onPressIncrement = () => {
    this.props.incrementCount();
  }

  onPressDecrement = () => {
    this.props.decrementCount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Boiler Plate</Text>
        <Text style={styles.number}>{this.props.count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onPressDecrement} style={[styles.button, styles.positiveButton]}>
              <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressIncrement} style={[styles.button, styles.negativeButton]}>
              <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
      count: state.appReducer.count,
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    incrementCount,
    decrementCount,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFF5',
  },
  title: {
    margin: 30,
    fontSize: 30,
    marginBottom: 50,
    fontWeight: '500',
    textAlign: 'center',
  },
  number: {
    margin: 10,
    fontSize: 22,
    textAlign: 'center',
  },
  instructions: {
    marginBottom: 5,
    color: '#333333',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 35,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  positiveButton: {
    backgroundColor: '#ff637c',
  },
  negativeButton: {
    backgroundColor: '#4dc2c2',  
  }
});
