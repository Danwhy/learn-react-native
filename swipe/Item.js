'use strict';

var React = require('react-native');
var {
  View,
  Text,
  PanResponder,
  StyleSheet,
} = React;

var Item = React.createClass({

  componentWillMount: function () {

    this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderGrant: (evt, gestureState) => this.highlight(),
          onPanResponderMove: (evt, gestureState) => this.move(gestureState),
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderRelease: (evt, gestureState) => this.end(gestureState),
          onPanResponderTerminate: (evt, gestureState) => console.log('end'),
          onShouldBlockNativeResponder: (evt, gestureState) => true
      });
  },

  end: function (gestureState) {

    this.done = false;
  },

  move: function (gestureState) {

    if (gestureState.dx >= 100 && !this.done){
      this.props.pressHandler(this.props.rowData.id);
      this.done = true;
    }
  },

  highlight: function () {

  },

  render: function () {
    return (
      <View style={styles.item} {...this._panResponder.panHandlers}>
        {this.props.rowData.deletable &&
          <View>
            <Text style={styles.x}>X</Text>
          </View>
        }
        <View style={styles.text}>
          <Text>{this.props.rowData.name}</Text>
        </View>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  x: {
    color: 'red',
    textAlign: 'left',
    flex: 1
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    flex: 8
  }
});

module.exports = Item;
