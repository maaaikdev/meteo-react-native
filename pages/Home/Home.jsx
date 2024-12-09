import { Text, View } from "react-native"
import { styles } from "./Home.style"
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { Txt } from "../../components/Txt/Txt";
import { getWeatherInterpretation } from "../../utlis/meteo-utils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";

export function Home({ city, weather }){
    const currentInterpretation = getWeatherInterpretation(weather?.current_weather.weathercode)
    return (
        <>
            <View style={styles.meteo_basic}>
                <MeteoBasic 
                    city={city}
                    interpretation={currentInterpretation} 
                    temperature={Math.round(weather?.current_weather.temperature)}
                />
            </View>
            <View style={styles.searchbar_container}>
                <Txt style={styles.txt}>Search Bar</Txt>
            </View>
            <View style={styles.meteo_advanced}>
                <MeteoAdvanced />
            </View>
        </>
    )
}