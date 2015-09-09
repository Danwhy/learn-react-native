'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  PanResponder,
  TouchableHighlight,
  TouchableOpacity,
} = React;

var Item = require('./Item.js');

var items = [
  {name: 'one', deletable: false, id: 0},
  {name: 'two', deletable: false, id: 1},
  {name: 'three', deletable: false, id: 2},
  {name: 'four', deletable: false, id: 3},
  {name: 'five', deletable: false, id: 4},
  {name: 'six', deletable: false, id: 5},
];

var swipe = React.createClass({

  getInitialState: function () {

    var ds = new ListView.DataSource({rowHasChanged: () => true});
    return {
      dataSource: ds.cloneWithRows(items),
    };
  },

  pressRow: function(id) {

    items[id].deletable = !items[id].deletable;
    this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});
  },

  render: function () {

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => (
              <Item rowData={rowData} pressHandler={this.pressRow}/>
          )}
          renderSeparator={() => <View style={{backgroundColor: 'grey', height: 1}} />}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
});

AppRegistry.registerComponent('swipe', () => swipe);
