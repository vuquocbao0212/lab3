import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeView from './HomeView'
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';


const Navigator = createStackNavigator({
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

const HomeContainer = createAppContainer(Navigator);

export default class App extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { types, selectedTab, topProducts } = this.props;
        console.log('test homesss', types)
        return (
            <HomeContainer
                navigation={this.props.navigation}
                types={types}
            />
        )
    }
}