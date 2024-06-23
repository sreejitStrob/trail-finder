import CardView from '@/components/cardView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect,router  } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function home ()  {
  const [activities, setActivities] = useState([
    { name : 'Airoli', notes: 'test', distance: '10', type: 'survey' },
    { name : 'Airoli', notes: 'test', distance: '10', type: 'survey' },
  ]);
  const SurveyCard = ({ text, onPress, type }) => {
    return ( 
      <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.5}>
        <Ionicons name={type} size={20} color="black" />
        <Text style={styles.cardText}> {text}</Text>
      </TouchableOpacity>
    );
  };

  const surveyClickManager = () => {
    router.push('/createSurvey');
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SurveyCard type={'create'} onPress={surveyClickManager} text="Start a Survey" />
        <SurveyCard type={'list'}  onPress={surveyClickManager} text="Survey List" />
      </View>
      <View style={styles.recentView}>
        <Text style={styles.subtext}>Recent Surveys: </Text>
        <FlatList
              data={activities}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <CardView item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
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
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30
  },
  listContainer: {
    paddingVertical: 10,
  },
  recentView: {
    padding: 5
  }
});