import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { EstilosGlobais, Cores } from './estilos';

export default function SignUpScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={EstilosGlobais.formPage}>
      <View style={EstilosGlobais.formWrapper}>
        <Text style={EstilosGlobais.formH2}>Cadastro</Text>
        <Text style={EstilosGlobais.formH5}>Campos marcados com * são obrigatórios</Text>

        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            petName: '',
            petBirthday: '',
            breed: '',
            favoriteToy: '',
          }}
          onSubmit={(values) => {
            if (values.email.trim() === '' || values.petName.trim() === '') {
              alert('Erro: E-mail e Nome do Pet são obrigatórios!');
              return;
            }
            if (values.password !== values.confirmPassword) {
              alert('Erro: As senhas não coincidem!');
              return;
            }
            navigation.navigate('Main');
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={EstilosGlobais.petForm}>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>E-mail *</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Seu e-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Senha *</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Digite sua senha"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Confirme a Senha *</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Digite sua senha novamente"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Nome do Pet *</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  onChangeText={handleChange('petName')}
                  value={values.petName}
                  placeholder="Ex: Rex"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Data de Aniversário</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  onChangeText={handleChange('petBirthday')}
                  value={values.petBirthday}
                  placeholder="dd/mm/aaaa"
                  keyboardType="numeric"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Raça</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  onChangeText={handleChange('breed')}
                  value={values.breed}
                  placeholder="Ex: Bulldog"
                />
              </View>

              <View style={EstilosGlobais.inputContainer}>
                <Text style={EstilosGlobais.label}>Brinquedo Favorito</Text>
                <TextInput
                  style={EstilosGlobais.input}
                  onChangeText={handleChange('favoriteToy')}
                  value={values.favoriteToy}
                  placeholder="Ex: Bolinha de tênis"
                />
              </View>

              <TouchableOpacity style={EstilosGlobais.submitButton} onPress={handleSubmit}>
                <Text style={EstilosGlobais.submitButtonText}>Cadastrar Pet</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginTop: 12, alignItems: 'center' }}
              >
                <Text style={{ color: Cores.primary, fontWeight: 'bold', fontSize: 16 }}>
                  Voltar
                </Text>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
