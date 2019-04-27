
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { incrementCount, decrementCount } from '../redux/actions/AppActions';
import { Color, Image } from '../config';

class index extends Component {
  onPressIncrement = () => {
    this.props.incrementCount();
  }

  onPressDecrement = () => {
    this.props.decrementCount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
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

index.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
};


const mapStateToProps = state => ({
  count: state.appReducer.count,
  title: state.appReducer.title,
});

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
    backgroundColor: Color.ATHENS_GRAY,
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
    color: Color.MINE_SHAFT,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 35,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    color: Color.WHITE,
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
    backgroundColor: Color.WILD_WATERMELON,
  },
  negativeButton: {
    backgroundColor: Color.FOUNTAIN_BLUE,
  }
});
