import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';

export default function CreateSurvey() {
  const predefinedCoordinates = [
    { latitude: 19.148833518942492, longitude: 72.99529595607417 },
    { latitude: 19.14924906186207, longitude: 72.99529595607417 },
    { latitude: 19.14979636069588, longitude: 72.99530668490958 },
    { latitude: 19.15019669850802, longitude: 72.99536032908661 },
    { latitude: 19.15104297904034, longitude: 72.99536032908661 },
    { latitude: 19.15135209839193, longitude: 72.99538715117512 },
    { latitude: 19.151397706116082, longitude: 72.99495263334113 },
  ];

  const [markerPosition, setMarkerPosition] = useState(predefinedCoordinates[0]);
  const [routeCoordinates, setRouteCoordinates] = useState([predefinedCoordinates[0]]);
  const mapRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const actions = [
    {
      text: "Accessibility",
      icon: <Ionicons name="home" />,
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      icon: <Ionicons name="home" />,
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      icon: <Ionicons name="home" />,
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon: <Ionicons name="home" />,
      name: "bt_videocam",
      position: 4
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % predefinedCoordinates.length;
        const newCoordinate = predefinedCoordinates[nextIndex];

        setMarkerPosition(newCoordinate);
        setRouteCoordinates((prevCoords) => [...prevCoords, newCoordinate]);

        if (mapRef.current) {
          mapRef.current.animateToRegion({
            ...newCoordinate,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }, 1000); // animation duration in milliseconds
        }

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMarkerDragEnd = (e) => {
    const newCoordinate = e.nativeEvent.coordinate;
    setMarkerPosition(newCoordinate);
    setRouteCoordinates((prevCoords) => [...prevCoords, newCoordinate]);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 19.148833518942492,
          longitude: 72.99529595607417,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={routeCoordinates} strokeWidth={5} strokeColor="blue" />
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
