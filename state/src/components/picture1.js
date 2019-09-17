import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image, View } from 'react-native';
export default class Picture1 extends Component {
    render() {
      return (
        <View style={styles.container}>

          <Image
            style={{width: 100, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
          <Image
            style={{width: 100, height: 50}}
            source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          />
         
        </View>
      );
    }
}  
const styles = StyleSheet.create({
    container:{
        flex:1,  
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'stretch',  
        
        //justifyContent: 'center',  
        //alignSelf :'stretch',

     }



    
})