import { Text, View } from 'react-native';

export default function Props(props){
    return(
        <View>
            <Text>Numero: {props.numero}</Text>
            <Text>Texto: {props.text}</Text>
        </View>
    )
}