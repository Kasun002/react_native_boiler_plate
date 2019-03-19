
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { appSampleAction } from '../redux/actions/AppActions';
import { bindActionCreators } from 'redux';

type Props = {};
class index extends Component<Props> {

  componentDidMount() {
    this.props.appSampleAction(1);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world......{this.props.count}</Text>
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
    appSampleAction,
  }, dispatch)
);

// function mapDispatchToProps(dispatch) {
//   return {
//       // showAlert: (payload) => dispatch(appActions.showAlert(payload)),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
