import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,TouchableOpacity, TextInput,Image,ImageSourcePropType, Dimensions} from 'react-native'
import {  FoodModel } from '../redux'
import { ButtonAddRemove } from './ButtonAddRemove'


interface FoodCardProps {
    item:  FoodModel;
    onTap: Function;

}
const FoodCard: React.FC<FoodCardProps> =({item,onTap}) => {
    return (
        
        <View style={styles.container}>
            <Image source={{ uri: `${item.images[0]}`}} style={styles.img} />
            <TouchableOpacity onPress={()=>onTap(item)} style={{display:'flex',flex:1,flexDirection:'row'}}
                >
                <View style={{display:'flex',flex:8,padding:10}}>
                    <Text>{item.name}</Text>
                    <Text>{item.category}</Text>
                 </View>
                <View style={{display:'flex',flex:4,padding:10,justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight: '600',color: '#7C7C7C'}}>{item.price}</Text>
                    <ButtonAddRemove onTap={()=>{}} />
                </View>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex:1,
    width: Dimensions.get('screen').width-20,
    margin: 10, 
    borderRadius:20,
    backgroundColor: '#FFF',
    height: 100,
    justifyContent: 'flex-start',
    borderWidth:1,
    borderColor: '#E5E5E5',
    flexDirection:'row',

    },
img: {
    width: 100,
    height:100,
    borderRadius:20,
    backgroundColor:'#EAEAEA'
},

txt: {
    fontSize:14,
    marginTop:10,
    color: '#858585',
}
})

export { FoodCard }