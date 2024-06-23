import { View, StyleSheet } from 'react-native';

const BoxContainer = ({ children, category }) => {

  if (category === 'medicamentos') {
    backgroundColor = 'rgba(242, 145, 28, 0.33)';
  } else if (category === 'recomendacoes') {
    backgroundColor = 'rgba(217, 72, 41, 0.33)';
  } else if (category === 'exames') {
    backgroundColor = 'rgba(4, 138, 191, 0.33)';
  }

  return (
    <View style={[styles.boxContainer, { backgroundColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 15,
    marginBottom: 30,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    height: 50,
    width: '85%',
    borderRadius: 10,
  },
});

export default BoxContainer;
