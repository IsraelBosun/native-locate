import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";
import Colors from "../../Shared/Colors";

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setMapRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state

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
        setIsLoading(false); // Once data is fetched, set loading to false
      }, 9000);
    }
  }, [location]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          // fontFamily:'raleway-bold'
        }}
      >
        Top Near By Places
      </Text>
      <View style={{ borderRadius: 20, overflow: "hidden" }}>
        {location ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="You" coordinate={mapRegion} />
            {placeList.map(
              (item, index) =>
                index <= 4 && <PlaceMarker item={item} key={index} />
            )}
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
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}
      </View>
    </View>
  );
}









// import { View, Text, Dimensions, ActivityIndicator } from "react-native";
// import React, { useContext, useEffect, useState } from "react";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { UserLocationContext } from "../../Context/UserLocationContext";
// import PlaceMarker from "./PlaceMarker";
// import Colors from "../../Shared/Colors";

// export default function GoogleMapView({placeList}) {
//   const [mapRegion, setmapRegion] = useState([]);

//   const { location, setLocation } = useContext(UserLocationContext);

//   useEffect(()=>{
//     if(location)
//     {
//         setmapRegion({
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//             latitudeDelta: 0.0422,
//             longitudeDelta: 0.0421,
//         })
//     }
//   },[location])
 

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 20, 
//         marginBottom: 10, fontWeight: "600",
//         // fontFamily:'raleway-bold'
//          }}>
//         Top Near By Places
//       </Text>
//       <View style={{ borderRadius: 20, overflow: "hidden" }}>
//     {location?    <MapView
//           style={{
//             width: Dimensions.get("screen").width * 0.89,
//             height: Dimensions.get("screen").height * 0.23,
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
        
//       </View>
     
//     </View>
//   );
// }