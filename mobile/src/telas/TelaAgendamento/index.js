import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

const appointments = [
  {
    id: 1,
    date: '2024-06-04',
    time: '08:35',
    doctor: 'Dra. Olivia Rodriguez',
    specialty: 'Cardiologia',
    imageUrl: 'https://images.megahits.sapo.pt/olivia-rodrigo18343574_vertical.jpg',
  },
  {
    id: 2,
    date: '2024-06-11',
    time: '15:00',
    doctor: 'Dra. Alison Silva',
    specialty: 'Psiquiatria',
    imageUrl: 'https://www.wsfm.com.au/wp-content/uploads/sites/11/2022/03/taylor-doctor.jpg?crop=382px,0px,1080px,1080px&resize=1200,1200&quality=75',
  },
  {
    id: 3,
    date: '2024-06-19',
    time: '17:00',
    doctor: 'Dra. Emilia Roberta',
    specialty: 'Psiquiatria',
    imageUrl: 'https://br.web.img3.acsta.net/r_1920_1080/pictures/16/08/25/12/58/199701.jpg',
  },
];

export default function FlashBookingScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [specialDays, setSpecialDays] = useState([false, false, true, false, false, false, true]);
  const [items, setItems] = useState({
    medicamentos: [],
    recomendacoes: [],
    exames: [],
    });

  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    const filtered = appointments.filter(
      (appointment) => appointment.date === day.dateString
    );
    setFilteredAppointments(filtered);
    setModalVisible(true);
  };

  const handleBookAppointment = (id) => {
    const updatedAppointments = filteredAppointments.filter(
      (appointment) => appointment.id !== id
    );
    setFilteredAppointments(updatedAppointments);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
      </TouchableOpacity>
        <Text style={styles.headerText}>AGENDAMENTO FLASH</Text>
      </View>
      <View style={styles.topBanner}>
         <Text style={styles.bannerText}>CONSULTE NOSSA VAGAS REMANESCENTES</Text>
       </View>
      

      <Calendar
        style={styles.calendar}
        current={'2024-06-01'}
        onDayPress={handleDayPress}
        markedDates={{
          '2024-06-04': { marked: true },
          '2024-06-11': { marked: true },
          '2024-06-19': { marked: true },
        }}
        theme={{
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#0D5F74',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textDayFontColor: '#F2911C',
          textMonthFontColor: '#0D5F74',
          monthTextColor: '#0D5F74',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHandle}></View>
          <ScrollView>
          {filteredAppointments.length === 0 ? (
              <Text style={styles.noAppointmentsText}>Você não tem mais nenhuma consulta.</Text>
            ) : (
            filteredAppointments.map((appointment) => (
              <View key={appointment.id} style={styles.appointmentCard}>
                <Image source={{ uri: appointment.imageUrl }} style={styles.doctorImage} />
                <View style={styles.appointmentDetails}>
                  <Text style={styles.appointmentTime}>{appointment.time}</Text>
                  <Text style={styles.doctorName}>{appointment.doctor}</Text>
                  <Text style={styles.specialty}>{appointment.specialty}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.bookButton}
                  onPress={() => handleBookAppointment(appointment.id)}
                >
                  <Text style={styles.bookButtonText}>Marcar</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
          </ScrollView>
        </View>
      </Modal>
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
    height: 160,
    backgroundColor: "#F2911C",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    marginLeft: 20,
    marginRight: 40,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topBanner: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 115,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  bannerText: {
    color: '#0D5F74',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendar: {
    margin: 20,
    color: '#0D5F74'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#2699A6',
    padding: 22,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '60%',
  },
  modalHandle: {
    width: 100,
    height: 7,
    backgroundColor: 'rgba(217, 217, 217, 0.35)',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 15,
  },
  appointmentDetails: {
    flex: 1,
  },
  appointmentTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2599A6',
  },
  doctorName: {
    fontSize: 16,
    color: '#0D5F74',
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#000000',
  },
  bookButton: {
    backgroundColor: '#F2911C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noAppointmentsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
});
