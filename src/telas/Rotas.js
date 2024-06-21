import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaAgendamentos from './TelaAgendamento';
import TelaAjuda from './TelaAjuda';
import TelaCadastro from './TelaCadastro';
import TelaChatBot from './TelaChatBot';
import TelaConsultas from './TelaConsultas';
import TelaHome from './TelaHome';
import TelaLogin from './TelaLogin';
import TelaPerfil from './TelaPerfil';
import TelaCuidados from './TelaCuidados';

const Stack = createStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHome">
      <Stack.Screen name="TelaAgendamentos" component={TelaAgendamentos} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaAjuda" component={TelaAjuda} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaChatBot" component={TelaChatBot} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaCuidados" component={TelaCuidados} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaConsultas" component={TelaConsultas} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaHome" component={TelaHome} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaLogin" component={TelaLogin} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="TelaPerfil" component={TelaPerfil} 
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;