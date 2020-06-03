import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchView from './SearchView'
import ProductDetail from '../ProductDetail/ProductDetail';


const Navigator = createStackNavigator({
    SearchView: {
        screen: SearchView
    },
    ProductDetail: {
        screen: ProductDetail
    }
},
    {
        initialRouteName: 'SearchView'
    });

const Search = createAppContainer(Navigator);

export default Search;