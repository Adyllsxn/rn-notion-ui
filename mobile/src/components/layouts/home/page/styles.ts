import { constants } from "@/lib/constants"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
        padding: 16,
    },
    title:{
        color: constants.colors.gray[100],
        fontSize: 16,
        flex: 1,
    }
})