import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import FeedScreen from './screens/FeedScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CustomHeader() {
  const navigation = useNavigation();
  
  return (
    <LinearGradient
      colors={['rgb(174, 0, 255)', 'rgb(255, 111, 0)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }} 
      style={stylesHeader.headerContainer}
    >
      <View style={stylesHeader.headerContent}>
        <Text style={stylesHeader.title}>Woofstagram 🐾</Text>
        
        <View style={stylesHeader.navGroup}>
          <TouchableOpacity style={stylesHeader.navButton} onPress={() => navigation.navigate('Feed')}>
            <Text style={stylesHeader.navText}>Feed</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={stylesHeader.navButton} onPress={() => navigation.navigate('Perfil')}>
            <Text style={stylesHeader.navText}>Perfil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={stylesHeader.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

function MainNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: { display: 'none' } 
        }}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerMode: 'none' }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesHeader = StyleSheet.create({
  headerContainer: {
    paddingTop: 40, 
    paddingBottom: 20,
    elevation: 4, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 40,
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navButton: {
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  navText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '600'
  }
});