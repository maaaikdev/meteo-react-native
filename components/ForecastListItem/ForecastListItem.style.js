import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    image: {
        width: 50,
        height: 50
    },
    day: {
        fontSize: 20,
    },
    date: {
        fontSize: 20,
    },
    temperature: {
        fontSize: 20,
        minWidth: 50,
        textAlign: "right",
    }
})