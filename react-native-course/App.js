import { StyleSheet, View } from 'react-native';

import TextMessage from './src/services/TextMessage';

import image from "./assets/img/fe145850f3c9eb1c18ec12625a5e9cc1.jpg";
import Input from './src/components/Input';
import Main from './src/components/Main';
import Props from './src/components/Props';
import MapMethod from './src/components/MapMethod';
import ForMethod from './src/components/IfTestament';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}

      {/*CHAMANDO UM OUTRO BLOCO DE CONTEÚDO */}
      {/*<TextMessage/> */}

      {/* === TESTANDO INPUTS === */}
      {/* <Input/> */}

      {/* === PROPS === */}
      {/* <Props numero={4} text={"Um texto sendo passado por props"}/> */}


      {/* === UTILIZANDO O MAP === */}
      {/* <MapMethod/> */}

      {/* === LOOPING FOR ===  */}
      {/* <IfTestament age={24}/> */}

      {/* === FORMULARIOS === */}
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
