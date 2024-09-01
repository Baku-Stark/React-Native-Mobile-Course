import { View,Text } from 'react-native';

export default function IfTestament(props){
    const names = ["Wallace", "Satoru Gojo", "Aokiji Kuzan", "Roronoa Zoro", "Helen Park"];

    if(props.age > 18 && props.age <= 49){
        return(
            <View>
                <Text>
                    Your age is: {props.age}
                </Text>
            </View>
        )
    }

    else if(props.age >= 50){
        return(
            <View>
                <Text>
                    Very old... Your age is: {props.age}
                </Text>
            </View>
        )
    }

    else{
        return(
            <View>
                <Text>
                    You're a kid! Your age is: {props.age}
                </Text>
            </View>
        )
    }
}