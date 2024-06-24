import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialConsultations = [
  {
    id: 1,
    date: '22/06/24',
    time: '08:35',
    doctor: 'Dra. Olivia Rodriguez',
    specialty: 'Cardiologia',
    next: true,
    imageUrl: 'https://images.megahits.sapo.pt/olivia-rodrigo18343574_vertical.jpg', // Replace with actual image URLs
  },
  {
    id: 2,
    date: '24/06/24',
    time: '15:00',
    doctor: 'Dra. Alison Silva',
    specialty: 'Psiquiatria',
    next: false,
    imageUrl: 'https://www.wsfm.com.au/wp-content/uploads/sites/11/2022/03/taylor-doctor.jpg?crop=382px,0px,1080px,1080px&resize=1200,1200&quality=75', // Replace with actual image URLs
  },
  {
    id: 3,
    date: '01/07/24',
    time: '17:00',
    doctor: 'Dra. Emilia Roberta',
    specialty: 'Psiquiatria',
    next: false,
    imageUrl: 'https://br.web.img3.acsta.net/r_1920_1080/pictures/16/08/25/12/58/199701.jpg', // Replace with actual image URLs
  },
];


export default function ConsultationsScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [specialDays, setSpecialDays] = useState([false, false, true, false, false, false, true]);
  const [items, setItems] = useState({
    medicamentos: [],
    recomendacoes: [],
    exames: [],
    });

  const [consultations, setConsultations] = useState(initialConsultations);

  const updateNextConsultation = (updatedConsultations) => {
    if (updatedConsultations.length > 0) {
      updatedConsultations[0].next = true;
    }
    return updatedConsultations;
  };

  const handleConfirmOrCancel = (id) => {
    setConsultations((prevConsultations) => {
      const updatedConsultations = prevConsultations.filter((consultation) => consultation.id !== id);
      return updateNextConsultation(updatedConsultations);
    });
  };

  const renderConsultation = (consultation) => {
    return (
      <View
        key={consultation.id}
        style={[
          styles.consultationCard,
          consultation.next && styles.nextConsultation,
          consultation.next && styles.nextConsultationCard,
        ]}
      >
        <View style={styles.cardHeader}>
          <Text style={[styles.consultationDate, consultation.next && styles.nextConsultationText]}>
            {consultation.next ? 'Próxima Consulta' : consultation.date}
          </Text>
          {consultation.next && <Text style={styles.nextConsultationDate}>{consultation.date}</Text>}
        </View>
        <View style={styles.cardBody}>
          <Image source={{ uri: consultation.imageUrl }} style={styles.doctorImage} />
          <View style={styles.consultationDetails}>
            <Text style={[styles.consultationTime, consultation.next && styles.nextConsultationText]}>
              {consultation.time}
            </Text>
            <Text style={[styles.doctorName, consultation.next && styles.nextConsultationText]}>{consultation.doctor}</Text>
            <Text style={[styles.specialty, consultation.next && styles.nextConsultationText]}>{consultation.specialty}</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.confirmButton} onPress={() => handleConfirmOrCancel(consultation.id)}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => handleConfirmOrCancel(consultation.id)}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
        </TouchableOpacity>
          <Text style={styles.headerText}>MINHAS CONSULTAS</Text>
        </View>
        {consultations.length > 0 ? (
          consultations.map((consultation) => renderConsultation(consultation))
        ) : (
          <Text style={styles.noConsultationsText}>Você não tem mais nenhuma consulta {':('}</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    backgroundColor: "#D94829",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50,
  },
  scrollViewContent: {
    paddingTop: 130,
    padding: 20,
  },
  backIcon: {
   marginLeft: 20,
  },
  consultationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  nextConsultation: {
    backgroundColor: '#00A2A1',
  },
  nextConsultationCard: {
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  consultationDate: {
    color: '#666',
    fontSize: 16,
  },
  nextConsultationText: {
    color: '#fff',
  },
  nextConsultationDate: {
    color: '#fff',
    fontSize: 16,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  consultationDetails: {
    flex: 1,
  },
  consultationTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  doctorName: {
    fontSize: 16,
    color: '#000',
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#37AB0E',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor: '#D94829',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noConsultationsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 110,
  },
});