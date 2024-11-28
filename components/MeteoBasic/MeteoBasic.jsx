import { Image, Text, View } from "react-native";
import { styles } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";

export function MeteoBasic(){
    return (
        <>
            <View style={styles.clock}>
                <Txt>Clock</Txt>
            </View>
            <View style={styles.city}>
                <Txt>City</Txt>
            </View>
            <View style={styles.interpretation}>
                <Txt style={styles.interpretation_txt}>Sunny</Txt>
            </View>
            <View style={styles.temperature_box}>
                <Txt style={styles.temperature}>3</Txt>
                <Image style={styles.image} />
            </View>
        </>
    )
}