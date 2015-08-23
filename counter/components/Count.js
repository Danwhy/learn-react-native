'use strict';

var style = require('./style.js');
var React = require('react-native');
var {
  Text,
  StyleSheet
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
      <Text style={styles.number} onPress={this.countUp}>
        {this.state.count}
      </Text>
    );
  }
});

var styles = StyleSheet.create(style);

module.exports = Count;
