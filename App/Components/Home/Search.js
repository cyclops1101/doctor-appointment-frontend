import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';


export default function Search({setSearchText}) {
  const [searchInput, setSearchInput] = useState()

  return (
    <View style={{marginTop:15}}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        borderRadius:8,
        borderColor: Colors.GREY,
        padding:8,
        borderWidth:0.6
        }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder='Search'
          onChangeText={(value)=>(setSearchInput(value))}
          onSubmitEditing={()=>setSearchText(searchInput)}
          style={{width:'100%',fontFamily:'appfont'}}
        />
      </View>
    </View>
  )
}