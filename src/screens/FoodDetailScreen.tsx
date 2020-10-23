import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image} from 'react-native'

interface FoodDetailProps {}

const FoodDetailScreen: React.FC<FoodDetailProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}><Text>navigation</Text></View>
            <View style={styles.body}><Text>search scrn</Text></View>
            <View style={styles.footer}><Text>footer content</Text></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
    },
    navigation: {
      flex: 2,
      backgroundColor: "red",
    },
    body: {
      flex: 9,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "yellow",
    },
  
    footer: {
      flex: 1,
      backgroundColor: "cyan",
    },
  });

  export {FoodDetailScreen}