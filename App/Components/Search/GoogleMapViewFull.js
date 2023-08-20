import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "../Home/PlaceMarker";
import { Dimensions } from 'react-native';
import Colors from "../../Shared/Colors";

export default function GoogleMapViewFull({ placeList }) {

  const [mapRegion, setMapRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });

      // Simulating fetching data for demonstration purposes
      setTimeout(() => {
        setIsLoading(false);
      }, 9000);
    }
  }, [location]);

  return (
    <View>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.93,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker
            title="You"
            coordinate={mapRegion}
          />
          {placeList.map((item, index) => index <= 4 && (
            <PlaceMarker item={item} key={index} />
          ))}
        </MapView>
      ) : null}
      {isLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  )
}




















// import { View, Text } from 'react-native'
// import React, { useContext, useEffect, useState } from "react";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { UserLocationContext } from "../../Context/UserLocationContext";
// import PlaceMarker from "../Home/PlaceMarker";
// import { Dimensions } from 'react-native';

// export default function GoogleMapViewFull({placeList}) {

//     const [mapRegion, setmapRegion] = useState([]);

//     const { location, setLocation } = useContext(UserLocationContext);
  
//     useEffect(()=>{
//       if(location)
//       {
//           setmapRegion({
//               latitude: location.coords.latitude,
//               longitude: location.coords.longitude,
//               latitudeDelta: 0.0422,
//               longitudeDelta: 0.0421,
//           })
//       }
//     },[location])

//   return (
//     <View>
//           {location?    <MapView
//           style={{
//             width: Dimensions.get("screen").width ,
//             height: Dimensions.get("screen").height * 0.93,
//           }}
//           provider={PROVIDER_GOOGLE}
//           showsUserLocation={true}
//           region={mapRegion}
//         >
//             <Marker 
//             title="You" 
//             coordinate={mapRegion}
//              />
//             {placeList.map((item,index)=>index<=4&&(
//                 <PlaceMarker item={item} key={index} />
//             ))}
           
//         </MapView>:null} 
//     </View>
//   )
// }