import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';


import backList from '../../../../media/appIcon/backList.png'
import sp1 from '../../../../media/temp/sp1.jpeg'

export default class ListProduct extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const {
            container, wrapper, header, backStyle,
            titleStyle, productImg, productInfor,
            lastRowInfor, productContainer, txtShowDetail,
            txtName, txtPrice, txtMaterial, txtColor
        } = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 24 }} />
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImg} />
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImg} />
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImg} />
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImg} />
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImg} />
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>100$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbd8',
        padding: 5
    },
    header: {
        height: height / 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 24,
        height: 24
    },
    productContainer: {
        flexDirection: "row",
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1,
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImg: {
        width: 90,
        height: (90 * 452) / 361,
    },
    productInfor: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    lastRowInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 17,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
})







{/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>GoBack List</Text>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
                </View> */}