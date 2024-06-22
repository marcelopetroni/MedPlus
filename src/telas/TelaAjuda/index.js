import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const FAQItem = ({ question, answer }) => (
  <View style={styles.faqItemContainer}>
    <Text style={styles.faqQuestion}>{question}</Text>
    <Text style={styles.faqAnswer}>{answer}</Text>
  </View>
);

const TelaAjuda = () => {
  const [searchText, setSearchText] = useState('');

  const faqData = [
    {
      question: 'Como funciona a realocação de consultas?',
      answer: 'Quando um paciente cancela uma consulta, o app notifica outros pacientes na fila de espera. Os interessados podem confirmar sua disponibilidade e ocupar a vaga.',
    },
    {
      question: 'Como usar o chat de triagem rápida?',
      answer: 'Clique no quadro de Triagem Rápida na tela inicial e descreva seus sintomas.',
    },
    {
      question: 'Como faço para confirmar minha disponibilidade?',
      answer: 'Assim que receber uma notificação de uma consulta disponível, você pode confirmar sua disponibilidade diretamente pelo app com um clique.',
    },
    {
      question: 'Posso cancelar uma consulta agendada pelo app?',
      answer: 'Sim, você pode cancelar consultas diretamente pelo app. Recomendamos cancelar com antecedência para que outros pacientes possam ser realocados.',
    },
    {
      question: 'O que acontece se eu não puder comparecer à consulta após confirmar?',
      answer: 'Se você não puder comparecer, cancele a consulta o mais rápido possível pelo app para permitir que outros pacientes ocupem a vaga. Cancelamentos frequentes podem afetar sua prioridade na fila de espera.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AJUDA</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="No que você precisa de ajuda?"
            placeholderTextColor="rgba(13, 95, 116, 0.6)"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search" size={20} color="rgba(13, 95, 116, 0.6)" />
          </TouchableOpacity>
        </View>
        <Text style={styles.faqHeader}>Dúvidas Frequentes (FAQ)</Text>
      </View>
      <View style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F6FBFC',
    paddingBottom: 50
  },
  header: {
    backgroundColor: '#048ABF',
    alignItems: 'center',
    width: width,
    height: 295,
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 15,
    paddingHorizontal: 15,
    width: '100%',
    height: '25%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#0D5F74',
    fontWeight: 'bold',
    fontSize: 17,
  },
  searchIcon: {
    marginLeft: 10,
  },
  faqHeader: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 30,
    marginRight: 120,
  },
  faqContainer: {
    marginTop: -80, 
    paddingHorizontal: 20,
  },
  faqItemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: -20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#576D73',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 15,
    color: 'rgba(13, 95, 116, 0.66)',
  },
});

export default TelaAjuda;