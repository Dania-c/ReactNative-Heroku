import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,TouchableOpacity, TextInput,Image,ImageSourcePropType, Dimensions} from 'react-native'
import { Category, FoodModel, Restaurant } from '../redux'

const screenWidth =Dimensions.get('screen').width;

interface RestaurantProps {
    item: Restaurant | FoodModel;
    onTap: Function;

}
const RestaurantCard: React.FC<RestaurantProps> =({item,onTap}) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={()=> onTap(item)}>
                <Image  source={{ uri:`${item.images[0]}` }} style={styles.img} />   
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container: {
    margin: 10, 
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth-20,
    height: 230,
    borderRadius:20,

    },
img: {
    width: screenWidth-20,
    height:220,
    borderRadius:20,
    backgroundColor:'#EAEAEA'
},

txt: {
    fontSize:14,
    marginTop:10,
    color: '#858585',
}
})

export { RestaurantCard }