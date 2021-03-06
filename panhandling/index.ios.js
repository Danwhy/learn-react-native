'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  PanResponder,
  Text,
  View
} = React;

var panhandling = React.createClass({

  _styles: {},
  _previousLeft: 150,
  _previousTop: 100,

  getInitialState: function () {
    return {
      x: this._previousLeft,
      y: this._previousTop
    }
  },

  componentWillMount: function () {

    this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderGrant: (evt, gestureState) => console.log(gestureState),
          onPanResponderMove: (evt, gestureState) => this.move(gestureState),
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderRelease: (evt, gestureState) => this.end(gestureState),
          onPanResponderTerminate: (evt, gestureState) => console.log('end'),
          onShouldBlockNativeResponder: (evt, gestureState) => true
      });
  },

  _updatePosition: function() {

    this._root && this._root.setNativeProps(this._styles);
    this._root && this.setState({x:this._styles.left, y:this._styles.top});
  },

  move(gestureState) {

    this._styles.left = this._previousLeft + gestureState.dx;
    this._styles.top = this._previousTop + gestureState.dy;
    this._updatePosition();
  },

  end(gestureState) {

    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  },

  render: function() {

    return (
      <View style={styles.container}>
        <View ref={component => this._root = component} style={styles.circle} {...this._panResponder.panHandlers} />
        <Text style={styles.xcoords}>x:{this.state.x}</Text><Text style={styles.ycoords}>y:{this.state.y}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    top: 100,
    left: 150,
    width: 75,
    height: 75,
    backgroundColor: '#ffeeff',
    borderColor: 'black',
    borderWidth: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  xcoords: {
    position: 'absolute',
    top: 500,
    left: 140
  },
  ycoords: {
    position: 'absolute',
    top: 500,
    left: 200
  }
});


AppRegistry.registerComponent('panhandling', () => panhandling);
