'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var items = ['one', 'two', 'three', 'four', 'five', 'six'];

var swipe = React.createClass({

  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: () => true});
    return {
      dataSource: ds.cloneWithRows(items),
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => (
            <View style={styles.item}>
              <Text>{rowData}</Text>
            </View>
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
  },
  item: {
    justifyContent: 'center',
    height: 50,
    paddingLeft: 10
  }
});

AppRegistry.registerComponent('swipe', () => swipe);
