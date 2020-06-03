import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

//import Swiper from 'react-native-swiper'
import SwiperFlatList from 'react-native-swiper-flatlist';

import maxiIcon from '../../../../media/temp/maxi.jpg'
import littleIcon from '../../../../media/temp/little.jpg'
import partyIcon from '../../../../media/temp/party.jpg'

const { width, height } = Dimensions.get('window')


class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <SwiperFlatList
                        paginationDefaultColor='white'
                        paginationActiveColor='blue'
                        index={0}
                        showPagination
                    >
                        <TouchableOpacity style={styles.imageStyle} onPress={() => this.props.navigation.navigate('ListProduct')}>
                            <Image source={littleIcon} style={styles.imageStyle} />
                            <Text style={styles.textImg}>Maxi Dress</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageStyle} onPress={() => this.props.navigation.navigate('ListProduct')}>
                            <Image source={maxiIcon} style={styles.imageStyle} />
                            <Text style={styles.textImg}>Maxi Dress2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageStyle} onPress={() => this.props.navigation.navigate('ListProduct')}>
                            <Image source={partyIcon} style={styles.imageStyle} />
                            <Text style={styles.textImg}>Maxi Dress3</Text>
                        </TouchableOpacity>
                    </SwiperFlatList>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465

const styles = StyleSheet.create({
    container: {
        height: imageHeight * 1.3,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 18,
        color: '#afaeaf'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textImg: {
        fontSize: 18,
        color: '#9a9a9a',
        position: 'absolute'
    },

})

export default Category;