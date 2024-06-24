import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View, Image, TextInput, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function TelaLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [onPress] = useState('')
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style= { styles.logo } >
          <Image source={require('../../imagens/logo.png')} style={{width: 160,
          height: 81,}} />
        </View>
        <View>
          <TextInput  style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor='rgba(12, 95, 115, 0.4)' />
          <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} placeholderTextColor='rgba(12, 95, 115, 0.4)' secureTextEntry={true}
/>
        </View>
        <View style={styles.section}>  
          <CheckBox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#048ABF' : undefined}
        />
        <Text style={styles.lembrar}>Lembrar-me</Text>
        <Pressable onPress={onPress}>
            {({ pressed }) => (
              <Text style={[styles.esqueceu, pressed && styles.pressedText]}>
                Esqueceu a senha?
              </Text>
            )}
          </Pressable>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.cadstro}>
          <Text style={styles.text}>
          Não tem uma conta?{' '}
        </Text>
        <Pressable onPress={onPress}>
            {({ pressed }) => (
              <Text style={[styles.signupText, pressed && styles.pressedText]}>
                Cadastre-se
              </Text>
            )}
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Platform.OS === 'ios' ? 200 : 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        color: 'black',
      },
      logo: {
        alignSelf: 'center',
        paddingBottom: 30,
      },
      input: {
        backgroundColor: 'rgba(38, 153, 166, 0.3)',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        padding: 12,
        borderRadius: 50,
        fontWeight: 'bold',
      }, 
      shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      checkbox: {
        marginTop: 12,
        marginLeft: 50,
        color: '#B4B4B4'
      },
      section: {
        flexDirection: 'row',
      },
      lembrar: {
        marginTop: 12,
        marginLeft: 5,
        color: '#0C5F73',
        fontWeight: 'bold',
      },
      esqueceu: {
        marginTop: 12,
        ...Platform.select({
          ios: {
            marginLeft: 50,
          },
          android: {
            marginLeft: 90,
          },
          default: {
            marginLeft: 90,
          }
          },
        ),
        color: '#F2911C',
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#F2911C',
        marginLeft: 120,
        marginRight: 120,
        marginTop: 60,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
      },
      cadstro: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
       },
      text: {
        fontSize: 16,
      },
      signupText: {
        fontSize: 16,
        color: '#058ABF',
      },
      pressedText: {
        color: '#D17A1E',
      },
});