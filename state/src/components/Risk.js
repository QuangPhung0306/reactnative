import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker} from 'react-native'  
  
export default class Risk extends Component {  
  state = {  
      text :'', 
  };  

  render() {  
      return (  
          <View style={styles.container}>  
              <Text>risk</Text>  
              <Picker style={styles.pickerStyle}  
                      selectedValue={this.state.language}  
                      onValueChange={(itemValue, itemPosition) =>  
                          this.setState({language: itemValue, choosenIndex: itemPosition})}  
                  >  
                  <Picker.Item label="quản lý " value="java" />  
                  <Picker.Item label="người sửa 1" value="js" />  
                  <Picker.Item label="người sửa 2" value="rn" />  
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
})  