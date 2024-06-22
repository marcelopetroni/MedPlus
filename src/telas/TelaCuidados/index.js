import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TelaCuidados({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  /* esse estado eu inseri para exibir bolinha amarela quando precisar tomar medicamento */
  const [specialDays, setSpecialDays] = useState([false, false, true, false, false, false, true]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); 

    return () => clearInterval(interval);
  }, []);

  const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const getCurrentWeekDays = () => {
    const currentDayOfWeek = currentDate.getDay(); 
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() + i - currentDayOfWeek);
      const dayOfWeekIndex = day.getDay();
      days.push({
        dayOfWeek: daysOfWeek[dayOfWeekIndex],
        dayOfMonth: day.getDate(),
        isToday: day.toDateString() === currentDate.toDateString(),
        hasSpecialMarker: specialDays[dayOfWeekIndex],
      });
    }

    return days;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>MEUS CUIDADOS</Text>
      </View>

      {/* Caixa de informações */}
      <View style={styles.boxWrapper}>
        <View style={styles.boxContainer}>
          {/* Título do mês */}
          <View style={styles.monthTitleContainer}>
            <Text style={styles.monthTitle}>
              {currentDate.toLocaleString('pt-BR', { month: 'long' }).toUpperCase()}
            </Text>
            <View style={styles.underline} />
          </View>

          {/* Dias da semana e números */}
          <View style={styles.daysContainer}>
            {getCurrentWeekDays().map((day, index) => (
              <View key={index} style={[styles.dayItem, day.isToday && styles.today]}>
                <Text style={styles.dayOfWeek}>{day.dayOfWeek}</Text>
                <Text style={styles.dayOfMonth}>{day.dayOfMonth}</Text>
                {day.hasSpecialMarker && <View style={styles.bolinhaAmarela}></View>}
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 195,
    backgroundColor: "#0D5F74",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  boxWrapper: {
    position: 'absolute',
    top: 164,
    width: '100%',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 155,
    width: '75%',
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 15,
    shadowOpacity: 0.20,
    paddingHorizontal: 10,
    flexDirection: 'collumn'
  },  
  monthTitle: {
    flexDirection: 'column',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a4a5c'
  },
  monthTitleContainer: {
    width: '100%',
    textAlign: 'flex-start',
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
    color: '#0a4a5c'
  },
  underline: {
    height: 1,
    backgroundColor: '#048ABF',
    marginTop: 2,
    width: '22.5%',
    color: '#0D5F74'
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dayItem: {
    width: '13.25%',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6, 
  },
  today: {
    backgroundColor: 'rgba(13, 95, 116, 0.25)', 
    borderRadius: 10,
    height: 59,
    width: 32
  },  
  dayOfWeek: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D5F74'
  },
  dayOfMonth: {
    fontSize: 16,
    marginTop: 6,
    color: '#0D5F74',
    fontWeight: 700
  },
  bolinhaAmarela: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#F2911C',
    position: 'absolute',
    top: -3,
    right: -1.5,
  },
  caixinha: {
    height: 15,
    width: 15,
    borderRadius: 2,
    backgroundColor: '#F2911C',
    position: 'absolute',
    top: -3,
    right: -1.5,
  },
});