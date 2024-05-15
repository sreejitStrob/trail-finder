import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function index ()  {

  return (
    <View style={styles.container}>
      <Text>
          Trail finder Index
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});