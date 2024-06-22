import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

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
            headerRight: () => (
              <Text style={{ color: 'white' }}>test</Text> // Set text color to match header color
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
