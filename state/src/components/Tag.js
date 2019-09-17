import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet,Platform, Text,KeyboardAvoidingView } from 'react-native';
export default class Tag extends Component {
    constructor() {
    super();
        this.state = {
            comment :'',
      
        }
         
     }
    render (){
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            style={styles.container}>

              <Text > tag </Text>

              <TextInput
                  value={this.state.comment}
                  title={'comment'}
                  onChangeText={(comment) => this.setState({ comment })}
                  //placeholder={'comment'}
                  style={styles.input}
                /> 

            </KeyboardAvoidingView>
          );
    }       

}
const styles = StyleSheet.create({
    container:{
        flex: 1,  
         flexDirection: 'column',
         alignItems: 'flex-start',
         paddingLeft : "8%",

    },
    input:{
          
        justifyContent: 'center',     
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,

    },
})