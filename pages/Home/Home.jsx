import { Text, View } from "react-native"
import { styles } from "./Home.style"
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { Txt } from "../../components/Txt/Txt"

export function Home(){
    return (
        <>
            <View style={styles.meteo_basic}>
                <MeteoBasic />
            </View>
            <View style={styles.searchbar_container}>
                <Txt style={styles.txt}>Search Bar</Txt>
            </View>
            <View style={styles.meteo_advanced}>
                <Txt style={styles.txt}>Advanced Weather info</Txt>
            </View>
        </>
    )
}