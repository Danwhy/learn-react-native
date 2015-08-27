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

var TestComp = require('../index.ios.js');

var TestModule = NativeModules.TestModule;

var SnapperTest = React.createClass({

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

    return (
      <TestComp />
    );
  }
});

SnapperTest.displayName = 'SnapperTest';

module.exports = SnapperTest;
