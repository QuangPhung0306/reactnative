import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import Picture1 from './picture1';
import Picture2 from './picture2';
import {StyleSheet, Image, View } from 'react-native';
export default class Imagesapp extends Component {
    render() {
      return (
        <View style={styles.container}>

          <Picture1 style={styles.ptr1} />
          <Picture2 style={styles.ptr2} />
        </View>
      );
    }
}  
const styles = StyleSheet.create({
    container:{
        flex:1,  
        flexDirection: 'column',

        //justifyContent:'space-between',
        //alignItems: 'center',  
        //justifyContent: 'center',  
        //alignSelf :'stretch',

     },
     ptr1:{
       flex:1,
       alignItems: 'flex-start',
       

     },
     ptr2: {
       flex :1,

     },



    
})