import { constants } from "@/lib/constants"
import { StyleSheet, Text, View } from "react-native";

export default function Search(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        color: constants.colors.white[100],
        fontSize: constants.fontSize.md,
    }
}) 