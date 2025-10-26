import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

return (
  <View style={styles.container}>
    <Text>🍎 Catch The Fruit Game! 🍌</Text>
    <Text>Score: {score}</Text>
    <Text>Lives: {lives}</Text>
    <Button title="Add Score" onPress={() => setScore(score + 1)} />
    <Button title="lose Lives" onPress={() => setLives(lives - 1)} />
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 