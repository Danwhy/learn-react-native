'use strict';

var style = require('../style/style.js');
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var Two = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>
        <Text style={styles.number} onPress={this.props.goOne}>Two</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create(style);

module.exports = Two;
