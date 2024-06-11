import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TransactionScreen({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const renderIconButton = (iconName, buttonText, screen) => (
    <Button
      mode="contained"
      style={styles.squareButton}
      onPress={() => handleNavigation(screen)}
    >
      <View style={styles.iconButtonContent}>
        <MaterialCommunityIcons name={iconName} size={50} color="white" />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </Button>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderIconButton('account', 'Contact', 'Contact')}
        {renderIconButton('calculator', 'Calculator', 'Calculator')}
      </View>
      <View style={styles.row}>
        {renderIconButton('mosque', 'Dzikir', 'Dzikir')}
        {renderIconButton('image', 'Gallery', 'Gallery')}
      </View>
      <Button
        mode="text"
        style={[styles.button, styles.goBackButton]}
        labelStyle={styles.buttonText}
        onPress={() => navigation.goBack()}
      >
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#13aff2',
    padding: 20,
    width: 200,
    alignItems: 'center',
    margin: 10,
  },
  squareButton: {
    backgroundColor: '#13aff2',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  iconButtonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Increased font size for better readability
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  goBackButton: {
    position: 'absolute',
    bottom: 50,
    borderRadius: 50,
  },
});

