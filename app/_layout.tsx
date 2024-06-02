import { Stack } from "expo-router";

export default function layout() {
  return(
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
  </Stack>
  );
}