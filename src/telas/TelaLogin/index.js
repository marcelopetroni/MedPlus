import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
      <Text>Projeto React Native HackaSaude</Text>
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