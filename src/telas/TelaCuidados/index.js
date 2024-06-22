import React from 'react'
import { TouchableOpacity, ScrollView, Image, View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TelaCuidados({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meus cuidados</Text>
      </View>
      <View style={styles.boxWrapper}>
          <View style={styles.boxContainer}>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 195,
    backgroundColor: "#0D5F74",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  boxWrapper: {
    position: 'absolute',
    top: 164,
    width: '100%',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 15,
    shadowOpacity: 0.20,
    paddingHorizontal: 10,
  },  
});