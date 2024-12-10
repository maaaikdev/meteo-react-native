import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({ city, temperature, interpretation, dailyWeather }){
    const nav = useNavigation();
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
                <TouchableOpacity onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}>
                    <Txt style={styles.temperature}>{temperature}°</Txt>
                </TouchableOpacity>
                <Image style={styles.image} source={interpretation?.image}/>
            </View>
        </>
    )
}