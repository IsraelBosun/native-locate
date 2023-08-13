import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {

    const categoryList=[
        {
            id:1,
            name:'Gas Station',
            value:'gas_station',
            icon:require('./../../../assets/gas.png')
        },
        {
            id:2,
            name:'Church',
            value:'church',
            icon:require('./../../../assets/food.png')
        },
        {
            id:3,
            name:'School',
            value:'school',
            icon:require('./../../../assets/cafe.png')
        },
    ]

  return (
    <GestureHandlerRootView style={{marginTop: 15}}>
      <Text style={{
        fontSize:20,
        // fontFamily: "raleway",
      }} >Select Top Category</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        style={{marginTop:5}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity onPress={()=>setSelectedCategory(item.value)} >
                <CategoryItem category={item} />
            </TouchableOpacity>
        )}
     />
    </GestureHandlerRootView>
  )
}