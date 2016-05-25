import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Navigator,
} from 'react-native';

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gitHubRepository: ''
    }
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
            style={styles.repositoryName}
            placeholder='Enter github repository'
            onChangeText={(gitHubRepository) => this.setState({gitHubRepository})}
            value={this.state.gitHubRepository}
        >
        </TextInput>
        <TouchableOpacity
            style={styles.goToButton}
            onPress={this._onPressGoButton.bind(this)}
        >
          <Text style={styles.goToButtonText}>
            GoTo
          </Text>
        </TouchableOpacity>
      </View>
    </View>;
  }

  _onPressGoButton() {
    this.props.navigator.push({id: 'show_repository_screen', gitHubRepository: this.state.gitHubRepository});
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  repositoryName: {
    flex: 1,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  goToButton: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#009688',
  },
  goToButtonText: {
    marginHorizontal: 8,
  }
});