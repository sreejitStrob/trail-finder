import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Index ()  {
  return <Redirect href="/home" />;
  return (
    <View style={styles.container}>
      <Text>
          Hello world
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});