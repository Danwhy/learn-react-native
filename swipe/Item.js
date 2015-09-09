'use strict';

var React = require('react-native');
var {
  View,
  Text,
  PanResponder,
  StyleSheet,
} = React;

var Item = React.createClass({

  getInitialState: function () {
    return {
      itemColor: 'white',
    }
  },

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
          onPanResponderTerminate: (evt, gestureState) => this.unhighlight(),
          onShouldBlockNativeResponder: (evt, gestureState) => true
      });
  },

  end: function (gestureState) {

    this.done = false;
    this.setState({itemColor: 'white'});
  },

  move: function (gestureState) {

    if (gestureState.dx >= 100 && !this.done){
      this.props.makeDeletable(this.props.rowData.id, true);
      this.done = true;
    } else if (gestureState.dx <= -100 && !this.done) {
      this.props.makeDeletable(this.props.rowData.id, false);
      this.done = true;
    }
  },

  highlight: function () {

    this.setState({itemColor: 'lightgrey'});
  },

  unhighlight: function () {

    this.setState({itemColor: 'white'});
  },

  render: function () {

    return (
      <View style={[styles.item, {backgroundColor: this.state.itemColor}]} {...this._panResponder.panHandlers}>
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
