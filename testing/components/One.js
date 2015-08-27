'use strict';

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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  number: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = One;
