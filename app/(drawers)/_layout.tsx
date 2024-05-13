import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer  screenOptions={{
        drawerType:  'back',
        drawerStyle:  { width: '60%' },
        overlayColor: 'transparent',
      }}>
    
      </Drawer>
    </GestureHandlerRootView>
  );
}