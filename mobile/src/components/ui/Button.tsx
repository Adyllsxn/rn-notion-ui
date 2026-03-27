import { constants } from "@/lib/constants"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps  } from "react-native"

type ButtonProps = TouchableOpacityProps & {
    label: string
}

export function Button({label,...rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 48,
        backgroundColor: constants.colors.blue[100],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    label:{
        color: constants.colors.white[100],
        fontSize: constants.fontSize.lg,
        fontWeight: 600,
    }
})