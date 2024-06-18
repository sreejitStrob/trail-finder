import { Stack } from "expo-router";
import { AuthProvider } from './../context/AuthProvider';
export default function layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}