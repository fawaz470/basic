import React, {Component,} from 'react';
import {View,Button,Text,TouchableOpacity,TextInput,Image,StyleSheet,FlatList,Dimensions, Alert} from 'react-native';
import AppBodyData from './AppBodyData'
export default class Reg extends Component
{ 
  constructor(){
    super()
    this.state ={
      data:[]
    }
  }

  getData(){
    return fetch('http://react.toq.sa/markers')
      .then((response) => response.json())
      .then((responseJson) => {
       
        
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });

  } 
  componentDidMount(){

    this.getData();
   }
    render()
    { 
        return (
            <View style={[{ flexDirection: 'column',
            justifyContent: 'center',alignItems: 'center',width:'100%'}]}>
              <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
       
      />
        <AppBodyData data= {this.state.data}/>
            </View>
    );
    }
}
