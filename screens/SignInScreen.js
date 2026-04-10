import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EstilosGlobais, Cores } from './estilos';

export default function SignInScreen({ navigation }) {
  return (
    <View style={EstilosGlobais.formPage}>
      <View style={EstilosGlobais.formWrapper}>
        <Text style={EstilosGlobais.formH2}>Login - Woofstagram </Text>
        <Text style={EstilosGlobais.formH5}>Bem-vindo de volta!</Text>
        
        <TouchableOpacity style={EstilosGlobais.submitButton} onPress={() => navigation.navigate('Main')}>
          <Text style={EstilosGlobais.submitButtonText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignUp')} 
          style={{ marginTop: 20, alignItems: 'center' }}
        >
          <Text style={{ color: Cores.primary, fontWeight: 'bold', fontSize: 16 }}>
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}