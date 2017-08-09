import React, { Component } from 'react';
import { StyleSheet,
  ToolbarAndroid,
  Alert } from 'react-native';
import logo_image from '../images/psr_logo.png'

class MainToolBar extends Component {
  render () {
    return (
      <ToolbarAndroid
        style={styles.toolbar}
        logo={logo_image}
        actions={[
          {title: 'Exit', show: 'always'}
        ]}
        onActionSelected={this.onActionSelected}
      />
    )
  }

  onActionSelected (position) {
    Alert.alert('You tapped Exit button!')
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'gainsboro',
    height: 64,
  }
})

export default MainToolBar;
