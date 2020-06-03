import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

import Header from './Header';
import Bottom from './Bottom';




class Shop extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost/api/';
        fetch(url)
        .then(res => res.json())
        .then(resJSON =>{
            const { type, product } = resJSON;
            this.setState({ types: type, topProducts: product });
        })
    }

    openMenu = () => {
        const { open } = this.props;
        open()
    }
    render() {
        const { types, selectedTab, topProducts } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header onPen={this.openMenu} navigation={this.props.navigation}/>
                <Bottom navigation={this.props.navigation} types={types} selectedTab={selectedTab}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    
  });

export default Shop;