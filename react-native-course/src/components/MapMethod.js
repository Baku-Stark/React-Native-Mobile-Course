import { View,Text } from 'react-native';

export default function MapMethod(){
    const names = ["Wallace", "Satoru Gojo", "Aokiji Kuzan", "Roronoa Zoro", "Helen Park"];

    return(
        <View>
            {
                names.map((name, index) => (
                    <Text key={index} style={{color: "#fff", fontWeight: "bold"}}>
                        {name}
                    </Text>
                ))
            }
        </View>
    )
}