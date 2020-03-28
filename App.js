/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Lista from './src/Lista';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        <TouchableOpacity>
          <Image
          source={require('./src/img/cam.png')}
          style={styles.cam}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
          source={require('./src/img/send1.png')}
          style={styles.send}
          />
          </TouchableOpacity>
        </View>

        <FlatList
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        renderItem={ ({item}) => <Lista data={item} /> }
        />

        <View style={styles.header1}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/home.png')}
          style={styles.home}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
          source={require('./src/img/search.png')}
          style={styles.search}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
          source={require('./src/img/add.png')}
          style={styles.search}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
          source={require('./src/img/like.png')}
          style={styles.search}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
          source={require('./src/img/profile.png')}
          style={styles.search}
          />
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,

  },
  logo: {

  },

  cam: {
    width: 37,
    height: 39,
  },
  send: {
    width:23,
    height: 23,

  },
  home: {
    width:30,
    height: 30 ,
 
  },

  search:{
    width:25,
    height:25 ,
  },

  header1: {
    height: 30,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
});

export default App;