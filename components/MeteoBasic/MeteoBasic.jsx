import { Image, Text, View } from "react-native";
import { styles } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

export function MeteoBasic({ city, temperature, interpretation }){
    return (
        <>
            <View style={styles.clock}>
                <Clock />
            </View>
            <View style={styles.city}>
                <Txt>{city}</Txt>
            </View>
            <View style={styles.interpretation}>
                <Txt style={styles.interpretation_txt}>{interpretation?.label}</Txt>
            </View>
            <View style={styles.temperature_box}>
                <Txt style={styles.temperature}>{temperature}°</Txt>
                <Image style={styles.image} source={interpretation?.image}/>
            </View>
        </>
    )
}