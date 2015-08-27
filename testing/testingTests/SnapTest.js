'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  PanResponder,
  Text,
  View,
  NativeModules,
} = React;

var TestModule = NativeModules.TestModule;

var SnapTest = React.createClass({

  componentDidMount: function () {

    if (!TestModule.verifySnapshot) {
      throw new Error('TestModule.verifySnapshot not defined.');
    }
    requestAnimationFrame(() => TestModule.verifySnapshot(this.done));
  },

  done: function(success) {
    TestModule.markTestPassed(success);
  },

  render: function () {
    console.log('TESTING2', TestModule);
    return (
      <View style={styles.container}>
        <View style={styles.square} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  square: {
    position: 'absolute',
    top: 250,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

SnapTest.displayName = 'SnapTest';

module.exports = SnapTest;
