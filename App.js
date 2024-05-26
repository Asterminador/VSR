import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
 const Tab = createBottomTabNavigator();
 const SLIDER_WIDTH = Dimensions.get('window').width * 0.8
 const ITEM_WIDTH = SLIDER_WIDTH * 0.8
 /*carouselItens.PropTypes = {
  item: {
    imgUrl: string
  },
  index: number
 }*/
 const carouselItens = [
  {
    imgUrl:'./assets/product1.png'
  },
  {
    imgUrl:'./assets/product2.png'
  }
 ]
function HomeScreen(){
  return(
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={require('./assets/logop.png')} />
      <TextInput
        style={styles.searchBox}
        placeholder="Pesquisar produtos..."
        placeholderTextColor="#888"
      />
        <Text style={styles.titulo}>
Anúncios
        </Text>
        <Carousel
        data={carouselItens}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
    </View>
  )
} 
function carouselCardItem({item, index}){
  return(
    <View style={styles.cardCarousel} key={index}>
      <Image style={styles.image} source={{uri:item.imgUrl}}/>
    </View>
  )
}
function PerfilScreen(){
  return(
    <View>
      <Text>
        Pagina de configuração
      </Text>
    </View>
  )
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
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
    backgroundColor: '#e3f4de',
     
  },
  cardCarousel: {
    width: ITEM_WIDTH,
  },
  image: {
    height: 250,
    borderRadius:8, 
  },
  logo: {
    height: 40,
    width: '50%',
  },
  form: {
    width: '80%',
  },
  label: {
    color: '#00bf63',
    fontSize: 16,
    marginBottom: 10,
  },
  titulo: {
    color: '#009045',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10
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
  searchBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  productsList: {
    alignItems: 'center',
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    color: '#00bf63',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: '#00bf63',
    fontSize: 16,
    textAlign: 'center',
  },
  
});