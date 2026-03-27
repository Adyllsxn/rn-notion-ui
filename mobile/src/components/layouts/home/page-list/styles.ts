import { constants } from "@/lib/constants"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding:20,
        gap: 12,
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        gap:16,
        paddingRight: 16,
    },
    title:{
        color: constants.colors.gray[300],
        fontSize: 16,
        flex: 1,
    },
    list:{
        backgroundColor: constants.colors.gray[700],
        borderRadius: 8,
    },
    separator:{
        flex:1,
        height: 1,
        backgroundColor: constants.colors.gray[500],
        marginLeft: 42,
    }
})