import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import TextMessage from './blocks/TextMessage';

import image from "./assets/img/fe145850f3c9eb1c18ec12625a5e9cc1.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/*CHAMANDO UM OUTRO BLOCO DE CONTEÚDO */}
      <TextMessage/>
        {/* === IMAGENS LOCAIS === */}
        <Image
        source={image} 
        style={{
            width: 100,
            height: 100,
        }} />

        {/* === IMAGENS LOCAIS === */}
        <Image
        source={{uri: "https://i.redd.it/irkyi76cdu461.jpg"}} 
        style={{
            width: 100,
            height: 100
        }} />
        <Text style={{
          color: "#fff"
        }}>OI, amor (Maria Izabel)!</Text>
        <StatusBar style="auto" />
        <Button title='Clique aqui' onPress={() => alert("Hi!")}/>
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
