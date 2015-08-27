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

var Nav = require('../nav.js');

var TestModule = NativeModules.TestModule;

var NavTest = React.createClass({

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
      <Nav />
    );
  }
});

NavTest.displayName = 'NavTest';

module.exports = NavTest;
