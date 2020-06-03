import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform,
    StyleSheet,
    Image,
    TextInput,
    StatusBar
} from 'react-native';

import iclogo from '../../../media/appIcon/ic_logo.png'
import icmenu from '../../../media/appIcon/ic_menu.png'



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


class Header extends Component {

    render() {
        var Cssdefault = styles.Cssdefault;
        if (isIphoneX()) Cssdefault = [Cssdefault, styles.iPhoneX];

        return (
            <View style={Cssdefault}>
                <View style={styles.wrapper}>
                <StatusBar barStyle="dark-content" hidden />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.props.onPen}>
                            <Image source={icmenu} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>wearing a Dress</Text>
                        <Image source={iclogo} style={{ height: 24, width: 24 }} />
                    </View>
                    
                    <TextInput
					        style={styles.TextInputStyle}
					        underlineColorAndroid = "transparent"
                            placeholder='what do you want to by'
					    />
                </View>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    iPhoneX: {
        paddingTop: 0,
        paddingBottom: 0
    },
    Cssdefault: {
        marginBottom: 0,
    },
    wrapper: {
        height: height / 7,
        backgroundColor: '#34b089',
        padding: 8,
        justifyContent: 'space-around'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },
    TextInputStyle:{
        width: width-15,
        height:30,
        backgroundColor:'#fff',
        padding:5,
        //alignSelf: 'flex-start',  
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20,
    }
});

export default Header;

