import { createStackNavigator, createAppContainer } from 'react-navigation';

import CartView from './CartView'
import ProductDetail from '../ProductDetail/ProductDetail';


const Navigator = createStackNavigator({
    CartView: {
        screen: CartView
    },
    ProductDetail: {
        screen: ProductDetail
    }
},
    {
        initialRouteName: 'CartView'
    });

const Cart = createAppContainer(Navigator);

export default Cart;