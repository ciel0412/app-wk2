
import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import albumData from "./albums.json";

const Albumlist=()=>{
    return(
        <ScrollView style={styles.scroview}>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                   <Image
                   style={styles.thumbnailStyle}
                   source={{
                       uri:albumData[0].image
                   }} 
                 />
                    <View style={styles.headerContentStyle}>
                     <Text style={styles.textstyle}>{albumData[0].title}</Text>
                     <Text style={styles.textstyle2}>{albumData[0].artist}</Text>
                     </View>  
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:albumData[0].song_image
                    }}
                    />
           
                </View>
            

            </View>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                   <Image
                   style={styles.thumbnailStyle}
                   source={{
                       uri:albumData[1].image
                   }} 
                 />
                    <View style={styles.headerContentStyle}>
                     <Text style={styles.textstyle}>{albumData[1].title}</Text>
                     <Text style={styles.textstyle2}>{albumData[1].artist}</Text>
                     </View>  
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:albumData[1].song_image
                    }}
                    />
                </View>
            </View>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                   <Image
                   style={styles.thumbnailStyle}
                   source={{
                       uri:albumData[2].image
                   }} 
                 />
                    <View style={styles.headerContentStyle}>
                     <Text style={styles.textstyle}>{albumData[2].title}</Text>
                     <Text style={styles.textstyle2}>{albumData[2].artist}</Text>
                     </View>  
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:albumData[2].song_image
                    }}
                    />
                </View>
            </View>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                   <Image
                   style={styles.thumbnailStyle}
                   source={{
                       uri:albumData[3].image
                   }} 
                 />
                    <View style={styles.headerContentStyle}>
                     <Text style={styles.textstyle}>{albumData[3].title}</Text>
                     <Text style={styles.textstyle2}>{albumData[3].artist}</Text>
                     </View>  
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:albumData[3].song_image
                    }}
                    />
                </View>
            </View>
            <View style={styles.cardContainerStyle}>
                <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                   <Image
                   style={styles.thumbnailStyle}
                   source={{
                       uri:albumData[4].image
                   }} 
                 />
                    <View style={styles.headerContentStyle}>
                     <Text style={styles.textstyle}>{albumData[4].title}</Text>
                     <Text style={styles.textstyle2}>{albumData[4].artist}</Text>
                     </View>  
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image
                    style={styles.imageStyle}
                    source={{
                        uri:albumData[4].song_image
                    }}
                    />
                </View>
            </View>
        </ScrollView>
    );                
};

const styles= StyleSheet.create({
    scroview:{
        backgroundColor:"#000",
    },
    cardContainerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:"#000",
        elevation:1,
        marginLeft:1,
        marginRight:1,
        marginTop:1,
    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    cardSectionStyle:{
        padding:5,
        backgroundColor:"#000000",
        borderColor:"#B22222",
        borderBottomWidth:5,
    },

    thumbnailStyle:{
        height:70,
        width:65,
    },
    headerConstentStyle:{
        fontWeight:"bold",
        flexDirection:"column",
        paddingLeft:10,
        paddingTop:5,
        justifyContent: "space-around",
    },
    textstyle:{
        color:"#FFF",
        fontSize:30,
        paddingLeft:2,
    },
    textstyle2:{
        color:"#FFF",
        fontSize:12,
        paddingBottom:1,
        paddingLeft:5,
    },
    imageStyle:{
        height:300,
        width:null,
        justifyContent:"center",
    },
    theLastCard:{
        marginBottom:80,
    },
});

export default Albumlist;