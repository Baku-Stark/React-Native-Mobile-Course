import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import * as Clipboard from 'expo-clipboard' // ╰─$ npx expo install expo-clipboard

import generatePass from "../../service/passwordService";

import {styles} from './BatButtonStyles';
import { BatTextInput } from "../BatTextInput/BatTextInput";

interface Pass{
    pass : string
}

export default function BatButton(){
    const [passObj, setPassObj] = useState<Pass | undefined>();

    function handleGenerateButton(){
        let generateToken = generatePass();
        setPassObj({pass : generateToken});
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(String(passObj?.pass));
    }

    return (
        <>
            <BatTextInput pass={String(passObj?.pass)}/>
            <Pressable
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>
                    GENERATE
                </Text>
            </Pressable>

            <Pressable
                onPress={handleCopyButton}
                style={styles.button}
            >
                <Text style={styles.text}>
                    ⚡ COPY
                </Text>
            </Pressable>
        </>
    )
}