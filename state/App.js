import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Logo from './src/components/Logo';
import Imagesapp from './src/components/Imagesapp';
import Address from './src/components/Address';
import Comment from './src/components/Comment';
import Risk from './src/components/Risk';
import Tag from './src/components/Tag';
import Choose from './src/components/Choose';
//import Tag from './src/components/Tag';
//import Address from './src/components/Address';
//import Risk from './src/components/Risk';
//import Choose from './src/components/Choose';

export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Imagesapp />
        <Address/>
        <Comment/>
        <Risk/>
        <Tag/>
        <Choose/>
        

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 1,
  },
});



