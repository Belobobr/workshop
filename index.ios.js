/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

class GithubRepo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          renderScene={(route, navigator) =>
        <MySceneComponent
          name={route.name}
          onForward={() => {
            var nextIndex = route.index + 1;
            navigator.push({
              name: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
        />
      }
      />
    );
  }

  _onPressGoButton() {

  }

}

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
  repository: {
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

AppRegistry.registerComponent('GithubRepo', () => GithubRepo);
