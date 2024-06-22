import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect,router  } from 'expo-router';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function home ()  {

  const SurveyCard = ({ text, onPress }) => {
    return ( 
      <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.5}>
        <Text style={styles.cardText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const surveyClickManager = () => {
    router.push('/createSurvey');
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SurveyCard onPress={surveyClickManager} text="Start a Survey" />
        <SurveyCard onPress={surveyClickManager} text="Survey List" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});