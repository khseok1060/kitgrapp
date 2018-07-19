import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View>
        <StatusBar hidden={false} />
        {isLoggedIn? <Text>You are logged in</Text> : <Text>I dont know you</Text>}
      </View>
    );
  }
}

export default AppContainer;
