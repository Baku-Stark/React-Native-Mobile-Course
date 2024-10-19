import { Image, Text } from "react-native";


import batLogo from '../../../assets/bat-logo.png';

import {styles} from './BatLogoStyles';

export default function BatLogo(){
    return (
        <>
            <Text style={styles.title}>
                BAT PASS GENERATOR
            </Text>
            <Image
                source={batLogo}
                style={{
                    resizeMode: 'contain',
                    height: 180
                }}
            />
        </>
    )
}