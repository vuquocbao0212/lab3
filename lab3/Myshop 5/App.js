import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Authentication from './src/components/Authentication/Authentication'
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo'
import Main from './src/components/Main/Main'
import OrderHistory from './src/components/OrderHistory/OrderHistory'

import HomeView from './src/components/Main/Shops/Home/HomeView'
import ProductDetail from './src/components/Main/Shops/ProductDetail/ProductDetail';
import ListProduct from './src/components/Main/Shops/ListProduct/ListProduct';


const MainNavigator = createStackNavigator({
    Main: {
        screen: Main
    },
    ChangeInfo: {
        screen: ChangeInfo
    },
    Authentication: {
        screen: Authentication
    },
    OrderHistory: {
        screen: OrderHistory
    },
    HomeView: {
        screen: HomeView
    },
    ProductDetail: {
        screen: ProductDetail
    },
    ListProduct: {
        screen: ListProduct
    },
});




const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <AppContainer
                navigation={this.props.navigation}
            />
        )
    }
}