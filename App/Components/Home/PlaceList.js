import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PlaceItems from './PlaceItems'
import PlaceItemBig from './PlaceItemBig'
import { useNavigation } from '@react-navigation/native'

export default function PlaceList({placeList}) {

  const navigator=useNavigation();
  
  const onPlaceClick=(item)=>{
    navigator.navigate('place-detail',{place:item}); 
  }
  return (
    <View>
      <Text
      style={{fontSize:20,
        // fontFamily:'raleway-bold'
        marginTop:10}}
      >Found {placeList.length} Places</Text>

      {/* <FlatList
      data={placeList}
      renderItem={({item,index})=>(
        <TouchableOpacity key={index} 
        onPress={()=>onPlaceClick(item)}>
            {index%4==0?
            <PlaceItemBig place={item} />
            :<PlaceItems place={item} />}
         </TouchableOpacity>
            
      )}
      /> */}

 {
   placeList.map((item, index) => {
     return (
       <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
           {index%4==0?
             <PlaceItemBig place={item} /> :
             <PlaceItems place={item} />
           }
       </TouchableOpacity>
     )
   })
 }
    </View>
  )
}
