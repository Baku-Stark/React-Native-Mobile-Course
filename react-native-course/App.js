import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import TextMessage from './src/services/TextMessage';

import image from "./assets/img/fe145850f3c9eb1c18ec12625a5e9cc1.jpg";
import Form from './src/components/Form';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}

      {/*CHAMANDO UM OUTRO BLOCO DE CONTEÚDO */}
      {/*<TextMessage/> */}

      {/* === CRIANDO UM FORMULÁRIO === */}
      <Form/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
