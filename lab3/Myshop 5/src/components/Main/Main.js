import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Drawer from 'react-native-drawer'

import Menu from './Menu'
import Shop from './Shops/Shop'


export default class Main extends Component {
  static navigationOptions = {
    header: null
  };

  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };



  render() {
    const { navigate } = this.props.navigation;
    return (
      <Drawer
        tapToClose
        openDrawerOffset={0.2}
        ref={(ref) => this.drawer = ref}
        content={<Menu navigation={this.props.navigation}/>}
      >
        <Shop open={this.openControlPanel} />
      </Drawer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa'
  }
})