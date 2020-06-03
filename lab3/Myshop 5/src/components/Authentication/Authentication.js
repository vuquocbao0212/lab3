import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';
import HeaderBack from '../Main/Shops/HeaderBack';


export default class Authentication extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: true,
        }
    }

    signIn = () => {
        this.setState({
            isSignedIn : true
        })
    }

    signUp = () => {
        this.setState({
            isSignedIn : false
        })
    }

    render() {
        const signInJSX = (
            <View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your email'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your password'
                    />
                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.btnText}>SIGN IN NOW</Text>
                    </TouchableOpacity>
                </View>
        );
        const signUpJSX = (
            <View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your name'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your email'
                    />
                    
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your password'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Re-enter your password'
                    />
                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.btnText}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
        );
        
        const { isSignedIn } = this.state
        const mainJSX = isSignedIn ? signInJSX : signUpJSX

        return (
            <View style={styles.container}>
                <HeaderBack navigation={this.props.navigation} />
                { mainJSX }
                <View /> 
                <View style={styles.controlStyle}>
                    <TouchableOpacity style={styles.signinStyle} onPress={this.signIn}>
                        <Text style={ isSignedIn ? styles.activeStyle : styles.inactiveStyle }>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupStyle} onPress={this.signUp}>
                        <Text style={ !isSignedIn ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34b089',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    controlStyle: {
        flexDirection: 'row',
        width: width,
        marginHorizontal: 10
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#34b089'
    },
    signinStyle: {
        height: 40,
        width: (width / 2) - 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 1,

    },
    signupStyle: {
        height: 40,
        width: (width / 2) - 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 1
    },
    inputStyle: {
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 20,
        marginHorizontal: 10
    },
    btnStyle: {
        height: 40,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    btnText: {
        fontSize: 15,
        fontFamily: 'Avenir',
        fontWeight: '400',
        color: '#fff'
    }
})