import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SuperCluster from 'react-native-maps-super-cluster';

export default function CreateSurvey() {
  // Sample data of markers
  const markers = [
    { id: 1, coordinate: { latitude: 37.78825, longitude: -122.4324 }, title: 'Marker 1' },
    { id: 2, coordinate: { latitude: 37.79825, longitude: -122.4224 }, title: 'Marker 2' },
    // Add more markers as needed
  ];

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
      >
        {/* Marker clustering */}
        <SuperCluster
          initialMarkers={markers}
          renderMarker={(marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
            />
          )}
        />
      </MapView>
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
