import { Button, Text, View } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <Text style={{fontSize: 100, color: "#111"}}>Home Page</Text>
            <Button title="About Page" onPress={() => navigation.navigate('Others')}/>
        </View>
    )
}