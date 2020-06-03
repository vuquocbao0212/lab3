import React, { Component } from 'react';
import { View , Text, StyleSheet, ScrollView } from 'react-native';

import Collection from './Collection'
import Category from './Category';
import TopProduct from './TopProduct';



class HomeView extends Component {
    static navigationOptions = {
        header: null
    };
    render(){
        const {types, navigation} = this.props;
        console.log('test HomeV', types)
        return(
            <ScrollView style={styles.container}>
                <Collection navigation={navigation}/>
                <Category navigation={navigation} types={types}/>
                <TopProduct navigation={navigation}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#DBDBD8'
    }
  })

export default HomeView;