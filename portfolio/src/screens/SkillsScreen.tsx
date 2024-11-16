import { Text, View } from "react-native";

export default function SkillsScreen(){
    const languages = ["Java", "Python", "C"]
    return(
        <View>
            <Text style={{fontSize: 100, color: "#111"}}>
                Skills
            </Text>
            <View>
                {
                    languages.map((name, index) => (
                        <Text key={index} style={{color: "#111", fontWeight: "bold"}}>
                            {name}
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}