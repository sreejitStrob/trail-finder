import React, { useContext } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogout = () => {
    logout()
    console.log('========>AsyncStorage.getItem',AsyncStorage.getItem('user'))
    navigation.navigate('(auth)'); 
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.divider} />
      <DrawerItem
        label="Logout"
        labelStyle={{ color: 'white' }}
        icon={({ size, color }) => (
          <Ionicons name="log-out" size={size} color="white" />
        )}
        onPress={handleLogout}
        style={styles.logoutItem}
      />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: "slide",
          drawerStyle: { width: '60%', borderRightWidth: 0, backgroundColor: '#000046' },
          overlayColor: 'transparent',
          headerStyle: { backgroundColor: '#000046' }, // Set default header color here
          headerTintColor: 'white', // Set default header text color here
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Dashboard',
            drawerLabelStyle: { color: 'white' },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color="white" />
            ),
            drawerActiveBackgroundColor: 'orange',
            headerStyle: { backgroundColor: '#000046' }, // Specific header color for "home" screen
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Index',
            drawerLabelStyle: { color: 'white' },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="search" size={size} color="white" />
            ),
            drawerActiveBackgroundColor: 'orange',
            headerStyle: { backgroundColor: '#000046' }, // Specific header color for "index" screen
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen
          name="createSurvey"
          options={{
            drawerLabel: 'Create Survey',
            title: 'Create Survey',
            headerTitleAlign: 'center',
            drawerLabelStyle: { color: 'white' },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="create" size={size} color="white" />
            ),
            drawerActiveBackgroundColor: 'orange',
            headerStyle: { backgroundColor: '#000046' }, // Specific header color for "createSurvey" screen
            headerTintColor: 'white',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  logoutItem: {
    marginTop: 'auto', // Puts the logout button at the bottom
  },
});
