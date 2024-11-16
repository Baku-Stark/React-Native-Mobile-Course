import { Button, Image, Text, View } from "react-native";
import Icon from "../../assets/satoru.jpeg"

export default function MainScreen({navigation} : any){
    return(
        <View>
            <View>
                <Text style={{fontSize: 100, color: "#111"}}>
                    Baku-Stark
                </Text>
                <Image source={Icon}
                    style={{
                        width: 100,
                        height: 100,
                  }}
                />
                <Button title="Skills Page" onPress={() => navigation.navigate('Skills')}/>
            </View>

        </View>
    )
}