'use strict';

var style = require('../style/style.js');
var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableOpacity,
} = React;

var Count = React.createClass({

  getInitialState: function() {

    return {
      count: this.props.initVal
    }
  },
  countUp: function() {

    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {

    return (
      <TouchableOpacity style={styles.container} onPress={this.countUp}>
        <Text style={styles.number}>
          {this.state.count}
        </Text>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create(style);

module.exports = Count;
