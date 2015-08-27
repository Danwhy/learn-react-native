'use strict';

var style = require('../style/style.js');
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var One = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
        <Text style={styles.number} onPress={this.props.goTwo}>One</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create(style);

module.exports = One;
