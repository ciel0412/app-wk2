import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=()=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                - ALBUMS -
            </Text>
        </View>
    );
};

const styles=StyleSheet.create({
    viewStyle:{
        backgroundColor: '#8C0044',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        paddingTop:10,
        elevation:10,
        shadowColor:"#DDDDDD",
        shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          opacity:0.8,
    },
    textStyle:{
        fontSize:30,
        color:"#000",
      fontWeight:"bold",
    }
});
export default Header;