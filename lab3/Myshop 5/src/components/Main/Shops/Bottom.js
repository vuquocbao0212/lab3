import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

import Home from './Home/Home'
import Contact from './Contact/Contact'
import Cart from './Cart/Cart'
import Search from './Search/Search'

import homeIconS from '../../../media/appIcon/home.png'
import homeIcon from '../../../media/appIcon/home0.png'
import cartIconS from '../../../media/appIcon/cart.png'
import cartIcon from '../../../media/appIcon/cart0.png'
import searchIconS from '../../../media/appIcon/search.png'
import searchIcon from '../../../media/appIcon/search0.png'
import contactIconS from '../../../media/appIcon/contact.png'
import contactIcon from '../../../media/appIcon/contact0.png'


export function isIphoneX() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

export function isIPhoneXSize(dim) {
    return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
    return dim.height == 896 || dim.width == 896;
}


class Bottom extends Component {
    static navigationOptions = {
        header: null
    };
 


    render() {
        var Cssdefault = styles.Cssdefault;
        if (isIphoneX()) Cssdefault = [Cssdefault, styles.iPhoneX];
        const { types, selectedTab, topProducts } = this.props;
        console.log('test bottom', types)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title='Home'
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={{height: 20, width: 20}} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={{height: 20, width: 20, }} />}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir', fontSize: 13, fontWeight: '500'}}
                    >
                        <Home types={types} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title='Cart'
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={{height: 20, width: 20}} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={{height: 20, width: 20, }} />}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir', fontSize: 13, fontWeight: '500'}}
                        badgeText="1"
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title='Search'
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={{height: 20, width: 20}} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={{height: 20, width: 20, }} />}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir', fontSize: 13, fontWeight: '500'}}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title='Contact'
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={{height: 20, width: 20}} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={{height: 20, width: 20, }} />}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir', fontSize: 13, fontWeight: '500'}}
                    >
                        <Contact />
                    </TabNavigator.Item>
                    
                </TabNavigator>
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    iPhoneX: {
        top: 20,
        marginBottom: 20
    },
    Cssdefault: {
        marginBottom: 0,
        marginTop: 20
    },

});
export default Bottom;