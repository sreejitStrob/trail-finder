import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: "slide",
          drawerStyle: { width: '60%', borderRightWidth: 0, backgroundColor: '#013220' },
          overlayColor: 'transparent',
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Dashboard',
            drawerLabelStyle: { color: 'white' },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            drawerActiveBackgroundColor: 'red',
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
            drawerActiveBackgroundColor: 'red',
          }}
        />
        <Drawer.Screen
          name="createSurvey"
          options={{
            drawerLabel: 'Create Survey',
            drawerLabelStyle: { color: 'white' },
            drawerIcon: ({ size, color }) => (
              <Ionicons name="create" size={size} color="white" />
            ),
            drawerActiveBackgroundColor: 'red',
          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
