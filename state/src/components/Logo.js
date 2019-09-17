import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image,Button} from 'react-native';
const MARGIN = 5;
export default class Logo extends Component {

  constructor(){
    super();
    this.state= {
        
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Button 
          title={'Login'}
          style={styles.input}
         // onPress={this.onLogin.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'flex-end' ,
    //justifyContent: 'center',
    height: MARGIN,
    borderRadius: 10,
    zIndex: 100,
  },
 
});
