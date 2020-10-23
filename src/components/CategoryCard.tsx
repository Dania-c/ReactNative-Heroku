import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,TouchableOpacity, TextInput,Image,ImageSourcePropType} from 'react-native'
import { Category } from '../redux'

interface CategoryProps {
    item: Category;
    onTap: Function;

}
const CategoryCard: React.FC<CategoryProps> =({item,onTap}) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={()=> onTap(item)}>
                <Image  source={{ uri:`${item.icon}` }} style={styles.img} />
                <Text style={styles.txt}>{item.title}</Text>
              
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container: {
    margin: 5, 
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120,
    height: 140,

    },
img: {
    width: 120,
    height:120,
    borderRadius:20,
    backgroundColor:'#EAEAEA'
},

txt: {
    fontSize:14,
    marginTop:10,
    color: '#858585',
}
})

export { CategoryCard }