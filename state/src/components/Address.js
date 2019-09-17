import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker} from 'react-native'  
  
export default class Risk extends Component {  
  state = {  
      text :'', 
  };  

  render() {  
      return (  
          <View style={styles.container}>  
              <Text style={styles.styletext}> address </Text>  
              <Picker style={styles.pickerStyle}  
                      selectedValue={this.state.language}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({language: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="ha noi" value="hn" />  
                  <Picker.Item label="ho chi minh" value="hcm" />  
                  <Picker.Item label="tokyo" value="tk" />  
              </Picker>  
              
          </View>  
      );  
  }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         flexDirection: 'column', 
         justifyContent: 'center',
         alignItems: 'flex-start',
         paddingLeft:"8%",   
     },  
     
    pickerStyle:{ 
      
        width: 300,
        height: 40, 
        color: '#344953',  
    
        
    },
    styletext:{
      justifyContent: 'space-evenly',
      


    },  
})  