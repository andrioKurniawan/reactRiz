import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dzikir = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prayText}>sudah banyak dzikir</Text>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tambah" onPress={incrementCount} />
        <Button title="Reset" onPress={resetCount} />
      </View>
    </View>
  );
};

const CustomerScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Dzikir />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  prayText: {
    fontSize: 24,
    marginBottom: 10,
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default CustomerScreen;
