import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

class ShowRepositoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.gitHubUserName}/repos?client_id=59ee05aba00e83d55297&client_secret=d4c8b19042acc8a1aab4a7d7c4eac60eb101abf6`)
      .then((response) => response.json())
      .then((repositories) => {
        if (repositories) {
          this.setState({repositories})
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.repositories)

    return <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>
          {this.props.gitHubUserName}
        </Text>
        <ScrollView>
          <Image
              source={{uri: this.state.repositories[0] && this.state.repositories[0].owner.avatar_url}}
              style={styles.userProfileImage}
          />

          {this.state.repositories && this.state.repositories.map((repository) => {
            return <View style={styles.repository}>
              <Text>{repository.name}</Text>
              <Text>{repository.stargazers_count}</Text>
            </View>
          })}
        </ScrollView>
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
    alignItems: 'stretch',
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
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  repository: {
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
  },
  userProfileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
});

export default ShowRepositoryScreen;
