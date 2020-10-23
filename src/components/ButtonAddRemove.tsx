import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,TouchableOpacity, TextInput,Image} from 'react-native'

interface ButtonProps {
    
    onTap: Function;
    // isAdded: Boolean
}

const ButtonAddRemove: React.FC<ButtonProps> =({onTap}) => {
    return (
        
        
            <TouchableOpacity onPress={()=>onTap()} style={styles.btn}>
                <View >
                    <Text style={{fontSize:18,color:'#FFF'}}>Add</Text>
                    
                 </View>
                                
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: 80,
    height:40,
    borderRadius:30,
    alignSelf:'center',
    backgroundColor:'#f15b'
},

})

export { ButtonAddRemove }