import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ShowRepositoryScreen extends Component {

  render() {
    return <View style={styles.container}>
      <TouchableOpacity
          style={styles.goBackButton}
          onPress={this._onPressGoBackButton.bind(this)}
      >
        <Text style={styles.goBackButtonText}>
          Back
        </Text>
      </TouchableOpacity>
      <Text>{this.props.gitHubRepository}</Text>
    </View>
  }

  _onPressGoBackButton(){
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  goBackButton: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#009688',
  },
  goBackButtonText: {
    marginHorizontal: 16,
    marginVertical: 8,
  }
});

export default ShowRepositoryScreen;
