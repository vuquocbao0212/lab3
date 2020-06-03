import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';

import iclogo from '../../../media/appIcon/ic_logo.png'
import icBack from '../../../media/appIcon/back_white.png'


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



class HeaderBack extends Component {
    render() {
        var Cssdefault = styles.Cssdefault;
        if (isIphoneX()) Cssdefault = [Cssdefault, styles.iPhoneX];
        return (
            <View style={Cssdefault}>
                <View style={styles.wrapper}>
                    <StatusBar barStyle="dark-content" hidden />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={icBack} style={{ height: 28, width: 28, right: 7 }} />
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>wearing a Dress</Text>
                        
                        <Image source={iclogo} style={{ height: 28, width: 28 }} />
                    </View>
                    <View />
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    PhoneX: {
        top: 20,
        marginBottom: 20
    },
    Cssdefault: {
        marginBottom: 0,
    },
    wrapper: {
        height: height / 14,
        backgroundColor: '#34b089',
        padding: 8,
        justifyContent: 'space-around'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20,
        paddingTop: 5
    }
});

export default HeaderBack;

