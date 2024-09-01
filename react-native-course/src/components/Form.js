import { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
const {width, height} = Dimensions.get('window');

export default function Form(){
    //console.log(`Celphone Dimensions: ${Math.floor(width)} x ${Math.floor(height)}`);

    const [name, setName] = useState("");
    const [age, setAge] = useState('');

    function mostrarInformacao(){
        alert(
            `Seu nome: ${name}\nIdade: ${age} anos`
        )
    }

    return(
        <View>
            <Text>Form</Text>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Insira seu nome'
                onChangeText={setName}
                value={name}
            >
            </TextInput>

            <Text style={styles.label}>Idade</Text>
            <TextInput
                style={styles.inputs}
                placeholder='Insira sua idade (12, 13, ...)'
                keyboardType='numeric'
                onChangeText={setAge}
                value={age}
            >
            </TextInput>
            <Button title='Clique aqui' onPress={() => mostrarInformacao()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
      color: "#fff",
      fontWeight: "bold",
      paddingTop: 10,
      paddingBottom: 10,
    },
    inputs:{
        width: width * 0.8, // VAI OCUPAR 80% DA TELA
        height: 35,
        padding: 10,
        color: "#111",
        backgroundColor: "#fff"
    }
  });