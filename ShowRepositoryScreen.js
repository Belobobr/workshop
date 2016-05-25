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
      <View style={styles.repository}>
        <Text style={styles.repositoryName}>
          {this.props.gitHubRepository}
        </Text>
      </View>
      <TouchableOpacity
          style={styles.goBackButton}
          onPress={this._onPressGoBackButton.bind(this)}
      >
        <Text style={styles.goBackButtonText}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  }

  _onPressGoBackButton(){
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
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
  },
  repository: {
    flex: 1,
  },
  repositoryName: {
    textAlign: 'center',
    fontSize: 20,
  }
});

export default ShowRepositoryScreen;
