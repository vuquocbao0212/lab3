import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'



class TopProduct extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.textTop}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => this.props.navigation.navigate('ProductDetail')}>
                        <Image source={sp1} style={styles.productImg} />
                        <Text style={styles.productName}>PRODUCT Name</Text>
                        <Text style={styles.productPrice}>10$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => this.props.navigation.navigate('ProductDetail')}>
                        <Image source={sp2} style={styles.productImg} />
                        <Text style={styles.productName}>PRODUCT Name</Text>
                        <Text style={styles.productPrice}>20$</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }}></View>
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => this.props.navigation.navigate('ProductDetail')}>
                        <Image source={sp3} style={styles.productImg} />
                        <Text style={styles.productName}>PRODUCT Name</Text>
                        <Text style={styles.productPrice}>30$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => this.props.navigation.navigate('ProductDetail')}>
                        <Image source={sp4} style={styles.productImg} />
                        <Text style={styles.productName}>PRODUCT Name</Text>
                        <Text style={styles.productPrice}>40$</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window')
const productWidth = (width - 60) / 2;
const productImgHeight = (productWidth / 361) * 452



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10

    },
    textTop: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10

    },
    productContainer: {
        backgroundColor: '#fff',
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    productImg: {
        width: productWidth,
        height: productImgHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
})


export default TopProduct;