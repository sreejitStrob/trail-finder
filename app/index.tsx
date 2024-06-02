import { Redirect } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Index ()  {
  return <Redirect href="sign-in" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});