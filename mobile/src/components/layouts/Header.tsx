import { constants } from "@/lib/constants"
import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: "https://github.com/Adyllsxn.png"}} />

            <View style={styles.user}>
                <Text style={styles.name}>Domingos Nascimento</Text>
                <Text style={styles.email}>domingos.nxscimento@gamil.com</Text>
            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={constants.colors.gray[100]} />
            </TouchableOpacity>
        </View>
    )
}


export const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        gap:10,
        alignItems: "center",
        padding:20,
        borderBottomWidth: 0.5,
        borderBottomColor: constants.colors.gray[400]
    },
    image:{
        width: 42,
        height:42,
    },
    user:{
        flex:1,
    },
    name:{
        color: constants.colors.gray[100],
        fontWeight: "500",
        fontSize: 16
    },
    email:{
        color: constants.colors.gray[300],
        fontSize: 14
    }
})