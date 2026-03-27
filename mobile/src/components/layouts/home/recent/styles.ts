import { constants } from "@/lib/constants"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:134,
        width:134,
        borderRadius: 10,
        backgroundColor: constants.colors.gray[700],
        overflow: "hidden",
    },
    cover:{
        width: "100%",
        height:"50%",
        backgroundColor: constants.colors.gray[600]
    },
    title:{
        color: constants.colors.gray[100],
        fontSize: 16,
        marginTop: 10,
    },
    icon:{
        position: "absolute",
        left: 7,
        top: -16,
    },
    content:{
        width: "100%",
        height: "50%",
        padding: 12,
    }
})