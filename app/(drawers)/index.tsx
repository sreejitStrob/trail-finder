import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
export default function CreateSurvey() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const actions = [
    {
      text: "Accessibility",
      icon:   <Ionicons name="home"  />,
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      icon:   <Ionicons name="home"  />,
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      icon:   <Ionicons name="home"  />,
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon:   <Ionicons name="home"  />,
      name: "bt_videocam",
      position: 4
    }
  ];

  const handleMarkerDragEnd = (e) => {
    setMarkerPosition(e.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => {
          // Update marker position based on map's center coordinate
          setMarkerPosition(region);
        }}
      >
        {/* Draggable truck marker */}
        <Marker
          draggable
          coordinate={markerPosition}
          onDragEnd={handleMarkerDragEnd}
          title="Draggable Truck Marker"
          description="Drag me around!"
        />
      </MapView>
      <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
