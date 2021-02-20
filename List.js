import React, { Component } from 'react';
 
import {  Image ,TouchableHighlight,ScrollView, StyleSheet, View,Animated, Text, Button,Platform } from 'react-native';
import LogoTitle from './LogoTitle';
const Header_Maximum_Height = 0;
 
const Header_Minimum_Height = 0;
// static navigationOptions = ({ navigation }) => {
//     return {
//         headerTitle: <LogoTitle />,
//     };
//   };

  export default class Mynewproject extends Component
{ 
    static navigationOptions = {
        headerTitle:'عرض القائمة',
      };

    constructor()
    {
        super();
        const LATITUDE = 37.78825;
        const LONGITUDE = -122.4324;
        this.AnimatedHeaderValue = new Animated.Value(0);
        const markers = [
            {
              id: 0,
              amount: 99,
              coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
              },
            },
          ];
          this.state = {markers};

    }
 
    render()
    {
        const {
            markers,
 
          } = this.state;
        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
        {
            inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height )  ],
 
            outputRange: [ '#009688', '#00BCD4' ],
 
            extrapolate: 'clamp'
        });
 
        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],
    
                outputRange: [ Header_Maximum_Height, Header_Minimum_Height ],
    
                extrapolate: 'clamp'
            });
 
        return(
            <View style = { styles.MainContainer }>
   <ScrollView 
 
 scrollEventThrottle = { 16 }

 contentContainerStyle = {{ paddingTop: Header_Maximum_Height }}

 onScroll = { Animated.event(
   [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
   ,{
    useNativeDriver: false,
    }
)}>
 {markers.map((marker, i) => {
               
                 return (
                    <Animated.View kye={marker.id} style={styles.item}>
                    <Text>{marker.amount}</Text>
                    
                               
                      </Animated.View>
          
                     
          
                 );
          })}
 
 </ScrollView>
 
 
 
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0,
     
    },
    item: {
        width: '100%',
        height:  150,
        backgroundColor: '#007aff',
        //marginTop: screen.height - ITEM_PREVIEW_HEIGHT - 64,
        marginTop:10,
        borderRadius: 25,
        borderColor: '#000',
      },
    HeaderStyle:
    {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: (Platform.OS == 'ios') ? 20 : 0,
    },
 
    HeaderInsideTextStyle:
    {
        color: "#fff",
        fontSize: 18,
        textAlign: 'center'
    },
 
    TextViewStyle:
    {
        textAlign: 'center',
        color: "#000",
        fontSize: 18,
        margin: 5,
        padding: 7,
        backgroundColor: "#ECEFF1"
    },
});