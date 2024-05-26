import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
/*export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={require('./assets/logosf.png')} />
      <View style={styles.form}>
        <Text style={styles.label}>Usuário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o usuário"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conectar</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>Não possui cadastro? Clique aqui</Text>
      </View>
    </View>
  );
}*/
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
      
      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebd0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: '80%',
    marginBottom: 30,
  },
  form: {
    width: '80%',
  },
  label: {
    color: '#00bf63',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00bf63',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  registerText: {
    marginTop: 20,
    color: '#00bf63',
    fontSize: 16,
    textAlign: 'center',
  },
});