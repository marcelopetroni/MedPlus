import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import CheckBox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function CadastroScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [onPress] = useState('');

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = () => {
    // Handle the registration logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={email} onChangeText={setEmail} />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="CPF" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={cpf} onChangeText={setCpf} />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Gênero" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={gender} onChangeText={setGender} />
      </View>
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Nascimento" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={birthDate} onChangeText={setBirthDate} />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="CEP" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={cep} onChangeText={setCep} />
      </View>
      <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={address} onChangeText={setAddress} />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Cidade" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={city} onChangeText={setCity} />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Bairro" placeholderTextColor='rgba(12, 95, 115, 0.4)' value={neighborhood} onChangeText={setNeighborhood} />
      </View>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Senha"
          placeholderTextColor='rgba(12, 95, 115, 0.4)'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={styles.eyeIcon}>{showPassword ? <Icon name="eye" size={20} color="#0C5F73" /> : <Icon name="eye-slash" size={20} color="#0C5F73" />}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Repetir Senha"
          placeholderTextColor='rgba(12, 95, 115, 0.4)'
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleShowConfirmPassword}>
          <Text style={styles.eyeIcon}>{showConfirmPassword ? <Icon name="eye" size={20} color="#0C5F73" /> : <Icon name="eye-slash" size={20} color="#0C5F73" />}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
        <Text style={styles.checkboxLabel}>Eu li e concordo com os{' '}</Text>
        <Pressable onPress={onPress}>
            {({ pressed }) => (
              <Text style={[styles.link]}>
                termos de uso
              </Text>
            )}
        </Pressable>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navigate to login screen')}>
        <Text style={[styles.link, styles.possuo]}> {'<'} Já possuo cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2699A6',
  },
  input: {
    backgroundColor: 'rgba(38, 153, 166, 0.3)',
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    width: '100%',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  passwordInput: {
    width: '90%',
  },
  eyeIcon: {
    padding: 10,
    paddingTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 8,
    color: '#B4B4B4'
  },
  checkboxLabel: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#7C7C7C',
  },
  link: {
    color: '#0C5F73',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F2911C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 30,
    margin: 'auto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  possuo: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    paddingTop: 10,
  }
});