import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const TelaChatBot = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [symptomsList, setSymptomsList] = useState([]);
  const [waitingForSymptoms, setWaitingForSymptoms] = useState(true);
  const [specialties] = useState([
    { name: 'Cardiologia', symptoms: ['dor', 'peito', 'aperto', 'peito', 'falta', 'ar', 'cansaço', 'excessivo', 'palpitações', 'coração', 'batimentos', 'cardíacos', 'irregulares', 'desmaios', 'suor', 'frio', 'pele', 'pálida', 'pele', 'azulada', 'enjoo', 'falta', 'apetite', 'tosse', 'seca', 'duradoura', 'inchaço', 'pernas', 'tornozelos', 'pés', 'pescoço'] },
    { name: 'Psiquiatria', symptoms: ['indiferença', 'ausência', 'emoção', 'tristeza', 'irritabilidade', 'dificuldade', 'concentração', 'mudanças', 'humor', 'insônia', 'compulsão', 'alimentar', 'preocupação', 'excesso', 'ansiedade', 'enjoo', 'nervosismo', 'falta', 'energia', 'dores', 'constantes', 'dor', 'corpo', 'falta', 'apetite', 'ideação', 'suicida'] },
    { name: 'Neurologia', symptoms: ['dor', 'cabeça', 'dor', 'crônica', 'tontura', 'dormência', 'formigamento', 'convulsões', 'dificuldade', 'enxergar', 'dificuldade', 'lembrar', 'perda', 'memória', 'perda', 'sono', 'dificuldade', 'dormir', 'dificuldades', 'fala', 'desequilíbrio', 'fraqueza', 'muscular'] },
  ]);

  const handleSend = () => {
    if (inputText) {
      const newMessage = { text: inputText, isUser: true, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages([...messages, newMessage]);
      setInputText('');

      const userMessage = inputText.toLowerCase();
      const userSymptoms = userMessage.match(/\b\w+\b/g);

      let responseText = 'Desculpe, não entendi. Pode reformular sua pergunta?';

      if (userMessage.includes('obrigado') || userMessage.includes('obrigada') || userMessage.includes('valeu')) {
        responseText = 'De nada! Espero que você melhore, estou sempre à disposição!';
      } else if (waitingForSymptoms && userSymptoms) {
        setSymptomsList(prevSymptomsList => [...prevSymptomsList, ...userSymptoms]);

        if (userMessage.includes('não')) {
          setWaitingForSymptoms(false);

          // Verificar os sintomas correspondentes em cada especialidade
          const matchedSpecialties = specialties.map(specialty => ({
            ...specialty,
            count: specialty.symptoms.filter(symptom => symptomsList.includes(symptom)).length
          }));

          // Filtrar especialidades com ao menos um sintoma correspondente
          const filteredSpecialties = matchedSpecialties.filter(specialty => specialty.count > 0);

          // Se há sintomas em mais de uma especialidade, recomenda clínico geral
          if (filteredSpecialties.length > 1) {
            responseText = 'Com base nos sintomas mencionados, recomendo que você consulte um clínico geral para uma avaliação mais detalhada.';
          } else if (filteredSpecialties.length === 1) {
            // Se há sintomas em apenas uma especialidade, recomenda essa especialidade
            responseText = `Com base nos sintomas mencionados, parece que você precisa de uma consulta com um especialista em ${filteredSpecialties[0].name}.`;
          } else {
            // Se não houver sintomas correspondentes, recomenda clínico geral
            responseText = 'Nesse caso, você deverá marcar consulta com um Clínico Geral para investigar melhor esses sintomas.';
          }
        } else {
          responseText = 'Você apresenta mais algum sintoma?';
        }
      }

      const responseMessage = {
        text: responseText,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setTimeout(() => setMessages(prevMessages => [...prevMessages, responseMessage]), 1000);
    }
  };

  return (
    <KeyboardAvoidingView style={{
      display: 'flex',
      height: '100%',
      backgroundColor: '#FFF'
    }}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
            <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Triagem Rápida</Text>
        </View>
        <View style={styles.chatHeader}>
          <View style={styles.chatHeaderIcon}>
            <Icon name="medkit" size={30} color="#fff" />
          </View>
          <View style={styles.chatHeaderTextContainer}>
            <Text style={styles.chatHeaderTextBold}>Como você está se sentindo hoje?</Text>
            <Text style={styles.chatHeaderText}>Nos conte seus sintomas para direcioná-lo ao especialista certo.</Text>
          </View>
        </View>
        <View style={styles.chatContainer}>
          <ScrollView contentContainerStyle={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <View key={index} style={[styles.messageContainer, msg.isUser ? styles.userMessage : styles.botMessage]}>
                <Text style={styles.messageText}>{msg.text}</Text>
                <Text style={styles.timestamp}>{msg.timestamp}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Escreva uma mensagem"
              placeholderTextColor="rgba(13, 95, 116, 0.4)"
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <Icon name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>  
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '90%',
    backgroundColor: '#2699A6',
    display: 'flex',
    flexDirection: 'column'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginRight: 30,
    flex: 1,
  },
  chatHeader: {
    backgroundColor: '#2699A6',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatHeaderIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2911C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  chatHeaderTextContainer: {
    flex: 1,
  },
  chatHeaderTextBold: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#fff',
  },
  chatHeaderText: {
    color: '#fff',
    fontSize: 18,
  },
  chatContainer: {
    display: 'flex',
    height: '75%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 20,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  messagesContainer: {
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(242, 145, 28, 0.5)',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(38, 153, 166, 0.5)',
  },
  messageText: {
    fontSize: 16,
    color: '#0D5F74',
  },
  timestamp: {
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#888',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    color: 'rgba(13, 95, 116, 0.66)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sendButton: {
    backgroundColor: '#F2911C',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaChatBot;