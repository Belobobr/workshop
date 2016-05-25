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
      gitHubUserName: ''
    }
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
            style={styles.userName}
            placeholder='Enter github repository'
            onChangeText={(gitHubUserName) => this.setState({gitHubUserName})}
            value={this.state.gitHubUserName}
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
    this.props.navigator.push({id: 'show_repository_screen', gitHubUserName: this.state.gitHubUserName});
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
  userName: {
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