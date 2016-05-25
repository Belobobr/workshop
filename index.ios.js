import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import WelcomeScreen from './ChooseRepositoryScreen.ios.js';
import ShowRepositoryScreen from './ShowRepositoryScreen';

class GithubRepo extends Component {

  render() {
    return (
      <Navigator style={{flex: 1}}
          initialRoute={{id: 'choose_repository_screen'}}
          renderScene={(route, navigator) => {
            switch(route.id) {
              case 'choose_repository_screen':
                return <WelcomeScreen
                  navigator={navigator}
                />;
              case 'show_repository_screen':
                return <ShowRepositoryScreen
                  navigator={navigator}
                  gitHubRepository={route.gitHubRepository}
                />
            }
          }}
      />
    );
  }
}

AppRegistry.registerComponent('GithubRepo', () => GithubRepo);
