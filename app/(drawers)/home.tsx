import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function home ()  {

  return (
    <View style={styles.container}>
      <Text>
          Trail finder
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