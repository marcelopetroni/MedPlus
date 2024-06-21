import React from 'react';
import { Image, View, Text, TextInput, StyleSheet } from 'react-native';

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleView}>
        <View style={styles.conteudoContainer}>
          <View style={styles.imagemContainer}>
            <Image style={styles.imagem1} resizeMode="cover" source={require('../../imagens/emiliaCarlas.png')} />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.texto1}>{`Olá, Emília Carlas.`}</Text>
            <Text style={styles.texto2}>Seja bem-vinda!</Text>
          </View>
          <View style={styles.imagemContainer2}>
            <Image style={styles.imagem2} resizeMode="cover" source={require('../../imagens/mdi_bell.png')} />
          </View>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Image style={styles.lupa} source={require('../../imagens/healthicons_medical-search.png')} />
          <TextInput style={styles.input} placeholder="Para onde deseja ir?" placeholderTextColor="#0D5F7466"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rectangleView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: "#048abf",
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteudoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textoContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  texto1: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  texto2: {
    fontSize: 17,
    color: '#fff',
  },
  imagemContainer: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 35, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8, 
    shadowRadius: 10,
    elevation: 15, 
  },
  
  imagem1: {
    alignSelf: 'flex-start', 
    width: '100%',
    height: '100%',
    marginLeft: 14,
    transform: [{ scale: 1.4 }], 
  },
  inputWrapper: {
    position: 'absolute',
    top: 160,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
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
    shadowOpacity: 1,
    paddingHorizontal: 10,
  },  
  lupa: {
    fontWeight: 'bold', 
    marginLeft: 8,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  imagemContainer2: {
    marginRight: 10,
    width: 40,
    height: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem2: {
    width: '100%',
    height: '100%',
  },
});
