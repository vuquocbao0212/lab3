import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import profileIcon from '../../media/temp/profile2.jpg'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: true,
        }
    }
    render() {
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Authentication')}
                    style={styles.btnStyle}
                >
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={styles.loginContainer}>
                <Text style={styles.textProfile}>Vu Le Tuyen</Text>
                <View>
                    <TouchableOpacity
                        style={[styles.btnSignInStyle]}
                        onPress={() => this.props.navigation.navigate('OrderHistory')}>
                        <Text style={styles.btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnSignInStyle]}
                        onPress={() => this.props.navigation.navigate('ChangeInfo')}>
                        <Text style={styles.btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Authentication')}
                        style={[styles.btnSignInStyle]}>
                        <Text style={styles.btnTextSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View />
                <View />
                <View />
            </View>
        );
        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX
        return (
            <View style={styles.container}>
                <Image source={profileIcon} style={styles.profile} />
                {mainJSX}
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34b089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',
        paddingTop: 10
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 30,
    },
    textProfile: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    btnStyle: {
        height: 40,
        paddingHorizontal: 100,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        color: '#34b089',
        fontSize: 20,
        textAlign: 'center'
    },
    btnSignInStyle: {
        marginBottom: 10,
        height: 40,
        width: (width * 0.75),
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34b089',
        fontSize: 15,
    }
})

export default Menu;
