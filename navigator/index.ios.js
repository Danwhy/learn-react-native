'use strict';

var One = require('./One.js');
var Two = require('./Two.js');
var React = require('react-native');
var {
  AppRegistry,
  Navigator
} = React;

var navigator = React.createClass({

  render: function() {

    return (
      <Navigator
        initialRoute={{name: 'one', index: 0}}
        renderScene={(route, navigator) => {

          if (route.name === 'one') {
              return <One goTwo={() => {
                  navigator.push({
                    name: 'two',
                    index: 1
                  });
                }}/>;
            } else {
              return <Two goOne={() => navigator.pop() }/>;
            }
          }}
      />
    );
  }
});

AppRegistry.registerComponent('navigator', () => navigator);
