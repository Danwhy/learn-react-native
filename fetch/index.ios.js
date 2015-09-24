'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var FetchExample = React.createClass({

  sendGetRequest: function() {
    var req = {
      method: 'GET',
    }

    fetch('http://localhost:8000/details', req)
      .then(response => console.log(response))
  },

  sendPostRequest: function() {
    //The body of fetch post requests are set as key value pairs
    //To send nested object use the notation object[key]=value
    // {
    //   name: 'Bob',
    //   details: {
    //     age: 30,
    //     nationality: 'British'
    //   }
    // }
    var keyValuePair = 'name=Bob&details[age]=30&details[nationality]=British';

    var req = {
      method: 'POST',
      body: keyValuePair
    }

    fetch('http://localhost:8000/create', req)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.sendGetRequest}>
          <Text style={styles.get}>GET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.sendPostRequest}>
          <Text style={styles.post}>POST</Text>
        </TouchableOpacity>
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
  get: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  post: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fetch', () => FetchExample);
