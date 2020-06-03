import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg'


const { width, height } = Dimensions.get('window')


class Collection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4 }}>
                    <Image source={bannerImage} style={styles.imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}

const imageWidth = width-40;
const imageHeight = (imageWidth / 933) * 465

const styles = StyleSheet.create({
    container: {
        width: width -20,
        //height: imageHeight * 1.3,
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
        width: imageWidth
    }
})

export default Collection;