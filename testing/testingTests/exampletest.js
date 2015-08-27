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

var { TestModule } = React.addons;

var Test = React.createClass({

  componentDidMount: function () {

    this.done(true);
  },

  done: function(success) {

    TestModule.markTestPassed(success);
  },

  render: function () {

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
    top: 100,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: '#ffeeff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Test.displayName = 'Test';

module.exports = Test;
