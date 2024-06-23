import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BoxContainer from '../../componentes/cuidadosComponentes/boxContainer';

export default function TelaCuidados({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [specialDays, setSpecialDays] = useState([false, false, true, false, false, false, true]);
  const [items, setItems] = useState({
    medicamentos: [],
    recomendacoes: [],
    exames: [],
  });

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

  const addItem = (category) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: [...prevItems[category], { text: '', isEditing: true }],
    }));
  };

  const confirmItem = (category, index, text) => {
    setItems((prevItems) => {
      const newItems = [...prevItems[category]];
      newItems[index] = { text, isEditing: false };
      return { ...prevItems, [category]: newItems };
    });
  };

  const deleteItem = (category, index) => {
    setItems((prevItems) => ({
      ...prevItems,
      [category]: prevItems[category].filter((_, i) => i !== index),
    }));
  };

  const renderItems = (category) => {
    let boxColor = '#F2911C'; // Cor padrão para Medicamentos

    if (category === 'recomendacoes') {
      boxColor = '#D94829'; // Cor para Recomendações
    } else if (category === 'exames') {
      boxColor = '#048ABF'; // Cor para Exames
    }

    return items[category].map((item, index) => (
      <BoxContainer key={index} style={{ backgroundColor: boxColor }}>
        {item.isEditing ? (
          <>
            <TextInput
              style={styles.textInput}
              placeholder="Digite aqui"
              value={item.text}
              onChangeText={(text) => {
                const newItems = [...items[category]];
                newItems[index].text = text;
                setItems({ ...items, [category]: newItems });
              }}
              onSubmitEditing={() => confirmItem(category, index, item.text)}
            />
            <TouchableOpacity onPress={() => deleteItem(category, index)} style={styles.iconContainer2}>
              <Icon name="trash-bin" size={30} style={styles.iconPlus} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmItem(category, index, item.text)} style={styles.iconContainer}>
              <Icon name="checkmark-circle" size={30} style={styles.iconPlus} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.textoCaixa}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteItem(category, index)} style={styles.iconContainer}>
              <Icon name="trash-bin" size={30} style={styles.iconPlus} />
            </TouchableOpacity>
          </>
        )}
      </BoxContainer>
    ));
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Icon name="arrow-back" size={25} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>MEUS CUIDADOS</Text>
      </View>

      <View style={styles.boxWrapper}>
        <View style={styles.boxContainer}>
          <View style={styles.monthTitleContainer}>
            <Text style={styles.monthTitle}>
              {currentDate.toLocaleString('pt-BR', { month: 'long' }).toUpperCase()}
            </Text>
            <View style={styles.underline} />
          </View>

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

      <View style={styles.mainContainer}>
        <View style={styles.textoContainer}>
          <View style={styles.caixinha}></View>
          <Text style={styles.texto}>Medicamentos</Text>
        </View>
        <BoxContainer category="medicamentos">
          <View style={styles.textoCaixaContainer}>
            <Text style={styles.textoCaixa}>Paracetamol (5mg) a cada 6h por 3 dias.</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => addItem('medicamentos')}>
            <Icon name="add-circle" size={30} style={styles.iconPlus} />
          </TouchableOpacity>
        </BoxContainer>
        {renderItems('medicamentos')}

        <View style={styles.textoContainer}>
          <View style={styles.caixinha2}></View>
          <Text style={styles.texto}>Recomendações</Text>
        </View>
        <BoxContainer category="recomendacoes">
          <View style={styles.textoCaixaContainer}>
            <Text style={styles.textoCaixa}>Fazer exercício físico 2 vezes por semana.</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => addItem('recomendacoes')}>
            <Icon name="add-circle" size={30} style={styles.iconPlus} />
          </TouchableOpacity>
        </BoxContainer>
        {renderItems('recomendacoes')}

        <View style={styles.textoContainer}>
          <View style={styles.caixinha3}></View>
          <Text style={styles.texto}>Exames</Text>
        </View>
        <BoxContainer category="exames">
          <View style={styles.textoCaixaContainer}>
            <Text style={styles.textoCaixa}>Não há exames registrados.</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => addItem('exames')}>
            <Icon name="add-circle" size={30} style={styles.iconPlus} />
          </TouchableOpacity>
        </BoxContainer>
        {renderItems('exames')}
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
    backgroundColor: '#0D5F74',
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
    shadowOpacity: 0.15,
    paddingHorizontal: 10,
  },
  monthTitle: {
    flexDirection: 'column',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0a4a5c',
  },
  monthTitleContainer: {
    width: '100%',
    textAlign: 'flex-start',
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
    color: '#0a4a5c',
  },
  underline: {
    height: 1,
    backgroundColor: '#048ABF',
    marginTop: 2,
    width: '22.5%',
    color: '#0D5F74',
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
    width: 32,
  },
  dayOfWeek: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D5F74',
  },
  dayOfMonth: {
    fontSize: 16,
    marginTop: 6,
    color: '#0D5F74',
    fontWeight: '700',
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
  mainContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 375,
    paddingLeft: 30,
  },
  textoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  caixinha: {
    height: 17,
    width: 17,
    borderRadius: 3.5,
    backgroundColor: '#F2911C',
  },
  caixinha2: {
    height: 17,
    width: 17,
    borderRadius: 3.5,
    backgroundColor: '#D94829',
  },
  caixinha3: {
    height: 17,
    width: 17,
    borderRadius: 3.5,
    backgroundColor: '#048ABF',
  },
  texto: {
    color: '#0D5F74',
    fontSize: 20,
    fontWeight: '500',
  },
  textoCaixaContainer: {
    maxWidth: '85%',
  },
  textoCaixa: {
    fontSize: 13,
    color: '#0D5F74',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    left: 280,
    alignItems: 'center',
  },
  iconContainer2: {
    position: 'absolute',
    left: 240,
    alignItems: 'center',
  },
  iconPlus: {
    zIndex: 1,
    color: '#0D5F74CF',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#0D5F74',
    marginRight: 10,
    width: '70%',
  },
});
