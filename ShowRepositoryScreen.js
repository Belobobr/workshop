import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class ShowRepositoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.gitHubUserName}/repos`)
      .then((response) => response.json())
      .then((repositories) => {
        console.log(repositories);
        this.setState({repositories})
      });
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.repositories}>
        <Text style={styles.userName}>
          {this.props.gitHubUserName}
        </Text>
        <ScrollView>
          {this.state.repositories.map((repository) => {
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
  repositories: {
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
  }
});

export default ShowRepositoryScreen;
