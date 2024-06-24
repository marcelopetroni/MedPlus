import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, StyleSheet } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { useState } from 'react';
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
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  iconHome: {
    width: 40,
    height: 40,
  },
});
// Componente para o Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="TelaHome"
        component={TelaHome}
        options={{
          title: '',
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <Iconify icon="material-symbols-light:home-outline" size={42} color="#0D5F74" />
          ),
        }}
      />
      <Tab.Screen
        name="TelaPerfil"
        component={TelaPerfil}
        options={{
          title: '',
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <Iconify icon="carbon:user-profile" size={32} color="#0D5F74" />
          ),
        }}
      />
      <Tab.Screen
        name="TelaAjuda"
        component={TelaAjuda}
        options={{
          title: '',
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <Iconify icon="mdi:comment-help-outline" size={32} color="#0D5F74" />
          ),
        }}
      />
      <Stack.Screen
          name="TelaAgendamentos"
          component={TelaAgendamentos}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarButton: () => null, // botei essa propriedade para esconder o botão na bottom tabs
          }}
        />
        <Stack.Screen
          name="TelaCuidados"
          component={TelaCuidados}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarButton: () => null, // botei essa propriedade para esconder o botão na bottom tabs
          }}
        />
        <Tab.Screen
          name="TelaConsultas"
          component={TelaConsultas}
          options={{
            title: '',
            headerTransparent: true,
            tabBarButton: () => null, // botei essa propriedade para esconder o botão na bottom tabs
          }}
      />
    </Tab.Navigator>
  );
};
// Componente para as rotas principais
function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{
            title: '',
            headerTransparent: true,
            headerTransparent: true,
            headerShown: false,
          }}
        />
         
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
       
        <Stack.Screen
          name="TelaChatBot"
          component={TelaChatBot}
          options={{
            title: '',
            headerTransparent: true,
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaAgendamentos"
          component={TelaAgendamentos}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaCuidados"
          component={TelaCuidados}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaConsultas"
          component={TelaConsultas}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TelaAjuda"
          component={TelaAjuda}
          options={{
            title: '',



            headerTransparent: true,
            headerShown: false,
          }}
          />
           <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{
            title: '',
            headerTransparent: true,
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Rotas;