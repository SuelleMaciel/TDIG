import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EstilosGlobais, Cores } from './estilos';

export default function ProfileScreen() {
  return (
    <View style={EstilosGlobais.formPage}>
      <View style={stylesLocal.profileHeader}>
        <View style={stylesLocal.placeholderAvatar}>
          <Text style={stylesLocal.avatarText}>WP</Text>
        </View>
        <Text style={stylesLocal.userName}>Woof Parent</Text>
        <Text style={stylesLocal.userBio}>Amante de pets e explorador do Woofstagram</Text>
      </View>
      
      <View style={EstilosGlobais.formWrapper}>
        <Text style={EstilosGlobais.formH2}>Seu Perfil</Text>
        <Text style={EstilosGlobais.formH5}>Em breve você poderá gerenciar seus pets e postagens aqui!</Text>
      </View>
    </View>
  );
}

const stylesLocal = StyleSheet.create({
  profileHeader: { alignItems: 'center', marginBottom: 10 },
  placeholderAvatar: { 
    width: 100, height: 100, borderRadius: 50, 
    backgroundColor: Cores.primary, 
    justifyContent: 'center', alignItems: 'center', 
    marginBottom: 15,
    borderWidth: 4, borderColor: Cores.bg2
  },
  avatarText: { color: Cores.bg2, fontSize: 32, fontWeight: 'bold' },
  userName: { fontSize: 24, fontWeight: 'bold', color: Cores.textMain },
  userBio: { color: Cores.textSecondary, textAlign: 'center', marginTop: 5 },
});