import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const TelaChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = { text: inputText, isUser: true, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulação de resposta do chatbot
      let responseText = 'Desculpe, não entendi. Pode reformular sua pergunta?';
      if (inputText.toLowerCase().includes('dor de cabeça') || inputText.toLowerCase().includes('náuseas')) {
        responseText = 'Entendi. Pode me dizer há quanto tempo você está sentindo esses sintomas?';
      } else if (inputText.toLowerCase().includes('três dias')) {
        responseText = 'Você também tem tido febre ou algum outro sintoma?';
      } else if (inputText.toLowerCase().includes('febre') || inputText.toLowerCase().includes('tontura')) {
        responseText = 'Pelos seus sintomas, recomendo que você consulte um neurologista.';
      } else if (inputText.toLowerCase().includes('obrigada pela ajuda')) {
        responseText = 'De nada! Espero que você se sinta melhor em breve.';
      }

      const responseMessage = {
        text: responseText,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setTimeout(() => setMessages((prevMessages) => [...prevMessages, responseMessage]), 1000);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2699A6',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 1,
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
    borderTopWidth: 1,
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