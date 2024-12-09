import { Text, useWindowDimensions } from "react-native";
import { styles } from "./Txt.style";

const IPHONE_12_RATIO = 0.001184834123222749;

export function Txt({ children, style, ...restProps }){

    const fontSize = style?.fontSize || styles.txt.fontSize;
    const { height } = useWindowDimensions();

    return (
        <Text style={[
                styles.txt, 
                style, 
                { 
                    fontSize: Math.round(fontSize * IPHONE_12_RATIO * height)
                }
            ]} 
            {...restProps}
        >
            {children}
        </Text>
    )
}