import React from 'react';
import { Image, View, Text, TextInput, StyleSheet } from 'react-native';

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleView}>
        <View style={styles.conteudoContainer}>
          <View style={styles.imagemContainer}>
            <Image style={styles.imagem1} resizeMode="cover" source={require('../../imagens/homeImages/emiliaCarlas.png')} />
          </View>
          <View style={styles.textoContainer}>
            <Text style={styles.texto1}>{`Olá, Emília Carlas.`}</Text>
            <Text style={styles.texto2}>Seja bem-vinda!</Text>
          </View>
          <View style={styles.imagemContainer2}>
            <Image style={styles.imagem2} resizeMode="cover" source={require('../../imagens/homeImages/mdi_bell.png')} />
          </View>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Image style={styles.lupa} source={require('../../imagens/homeImages/healthicons_medical-search.png')} />
          <TextInput style={styles.input} placeholder="Para onde deseja ir?" placeholderTextColor="#0D5F7466"/>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.textoContainer2}>
          <Text style={styles.texto3}>{`O que deseja fazer agora? `}</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <View style={styles.imagemContainer3}>
              <Image style={styles.imagem3} resizeMode="cover" source={require('../../imagens/homeImages/red_kit.png')} />
            </View>
            <View style={styles.textoContainer3}>
              <Text style={styles.texto4}>{`Minhas Consultas`}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Image style={styles.imagem4} resizeMode="cover" source={require('../../imagens/homeImages/orange_pc.png')} />
            <View style={styles.textoContainer4}>
              <Text style={styles.texto5}>{`Agendamento Flash`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Image style={styles.imagem5} resizeMode="cover" source={require('../../imagens/homeImages/person_reading.png')} />
            <View style={styles.textoContainer5}>
              <Text style={styles.texto6}>{`Meus Cuidados`}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Image style={styles.imagem6} resizeMode="cover" source={require('../../imagens/homeImages/jam_medical.png')} />
            <View style={styles.textoContainer6}>
              <Text style={styles.texto7}>{`Triagem Rápida`}</Text>
            </View>
          </View>
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
  mainContainer: {
    flexDirection: 'column',
    marginTop: 225,
    paddingHorizontal: 20,
  },
  textoContainer2: {
    marginTop: 20,
  },
  texto3: {
    fontSize: 18,
    fontWeight: '500',
    color: '#048ABF',
  },
  underline: {
    height: 1,
    backgroundColor: '#048ABF',
    marginTop: 5,
    width: '58%',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 8,
    marginRight: 20,
    marginBottom: 10
  },
  box: {
    marginRight: 26,
    width: '48%', // Adjust this value to change the width of the boxes
    height: 110,
    backgroundColor: '#FCFCFC',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemContainer3: {
    width: 50,
    height: 46,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem3: {
    borderRadius: 6,
  },
  imagem4: {
    marginTop: 2
  },
  texto4: {
    padding: 6,
    marginTop: 3,
    fontSize: 14,
    color: '#D94829',
    fontWeight: 'bold'
  },
  texto5: {
    padding: 6,
    marginTop: 1,
    fontSize: 14,
    color: '#F2911C',
    fontWeight: 'bold'
  },
  texto6: {
    padding: 6,
    marginTop: 3,
    fontSize: 14,
    color: '#0D5F74',
    fontWeight: 'bold'
  },
  texto7: {
    padding: 6,
    marginTop: 3,
    fontSize: 14,
    color: '#2699A6',
    fontWeight: 'bold'
  }
});
