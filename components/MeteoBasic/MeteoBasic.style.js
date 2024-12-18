import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    clock: {
        alignItems: "flex-end"
    },
    city: {

    },
    interpretation: {
        alignSelf: "flex-end",
        transform:[{
            rotate: "-90deg"
        }]
    },
    interpretation_txt: {
        fontSize: 20
    },
    temperature_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    temperature: {
        fontSize: 150
    },
    image: {
        height: 50, 
        width: 50,
    }
})