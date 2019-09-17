import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'



export default class Choose extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}> check </Text>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
        >
         <Text> Touch Here </Text>
        </TouchableHighlight>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft : "8%",
  },
  button: {
    //alignItems: 'flex-start',
    justifyContent: 'center',     
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#344953',
    marginBottom: 10,


  },
  texts:{

    alignItems: 'flex-end' ,



  },
 
})