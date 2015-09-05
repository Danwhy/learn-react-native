'use strict';

var style = require('./style/style.js');
var Count = require('./components/Count.js');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var counter = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
        <Count initVal={1}/>
      </View>
    );
  }
});

var styles = StyleSheet.create(style);

AppRegistry.registerComponent('counter', () => counter);
