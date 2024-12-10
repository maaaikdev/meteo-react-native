import { Text, View } from "react-native"
import { styles } from "./Home.style"
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { Txt } from "../../components/Txt/Txt";
import { getWeatherInterpretation } from "../../utlis/meteo-utils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../../components/SerachBar/SearchBar";

export function Home({ city, weather, onSubmitSearch }){
    const currentInterpretation = getWeatherInterpretation(weather?.current_weather.weathercode)
    return (
        <>
            <View style={styles.meteo_basic}>
                <MeteoBasic 
                    dailyWeather={weather?.daily}
                    city={city}
                    interpretation={currentInterpretation} 
                    temperature={Math.round(weather?.current_weather.temperature)}
                />
            </View>
            <View style={styles.searchbar_container}>
                <SearchBar onSubmit={onSubmitSearch}/>
            </View>
            <View style={styles.meteo_advanced}>
                <MeteoAdvanced 
                    sunrise={weather?.daily.sunrise[0].split("T")[1]} 
                    sunset={weather?.daily.sunset[0].split("T")[1]}  
                    windspeed={weather?.current_weather.windspeed} 
                />
            </View>
        </>
    )
}