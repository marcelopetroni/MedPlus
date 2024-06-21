import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const TelaPerfil = () => {
  const [name, setName] = useState('Emília Carlas');
  const [email, setEmail] = useState('emiliacarlas1988@gmail.com');
  const [gender, setGender] = useState('Feminino');
  const [birthdate, setBirthdate] = useState('02/01/1988');
  const [cpf, setCpf] = useState('110********');
  const [address, setAddress] = useState('Estrada das Rosas, 606');
  const [state, setState] = useState('Amazonas');
  const [city, setCity] = useState('Manaus');
  const [neighborhood, setNeighborhood] = useState('Vista Alegre');
  const [password, setPassword] = useState('********');

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PERFIL</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
          <View style={styles.editIcon}>
            <Icon name="pencil" size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          {renderInput('Nome', name, setName)}
          {renderInput('Email', email, setEmail, true, false, true)}
          {renderInput('Gênero', gender, setGender)}
          {renderInput('Nascimento', birthdate, setBirthdate)}
          {renderInput('CPF', cpf, setCpf, true, true)}
          {renderInput('Endereço', address, setAddress)}
          {renderInput('Estado', state, setState)}
          {renderInput('Cidade', city, setCity)}
          {renderInput('Bairro', neighborhood, setNeighborhood)}
          {renderInput('Senha', password, setPassword, true, true)}
        </View>
      </ScrollView>
    </View>
  );
};

const renderInput = (label, value, setValue, isEditable = true, isPassword = false, showIcon = false) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.infoInput}
        value={value}
        onChangeText={setValue}
        editable={isEditable}
        secureTextEntry={isPassword}
        placeholderTextColor="rgba(13, 95, 116, 0.66)"
      />
      {showIcon && !isPassword && <Icon name="pencil" size={16} color="#0C5F73" />}
      {isPassword && <Icon name="eye-off" size={16} color="#0C5F73" />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#058ABF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#058ABF',
    padding: 15,
    width: width,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    zIndex: 1,
    marginBottom: -50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#0D5F74', 
    marginTop: 20,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#F2911C',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    width: width,
    minHeight: height,
  },
  infoRow: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(12, 95, 115, 0.4)',
    paddingBottom: 10,
    paddingHorizontal: 20, 
  },
  infoLabel: {
    fontSize: 14,
    color: 'rgba(12, 95, 115, 0.4)',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoInput: {
    fontSize: 16,
    color: 'rgba(13, 95, 116, 0.66)',
    flex: 1,
  },
});

export default TelaPerfil;