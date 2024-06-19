
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardView = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Activity Details</Text>
      <Text style={styles.label}>Name: <Text style={styles.value}>{item.name}</Text></Text>
      <Text style={styles.label}>Notes: <Text style={styles.value}>{item.notes}</Text></Text>
      <Text style={styles.label}>Distance: <Text style={styles.value}>{item.distance}</Text></Text>
      <Text style={styles.label}>Type: <Text style={styles.value}>{item.type}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 250, // Adjust the width to fit your design
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
});

export default CardView;
