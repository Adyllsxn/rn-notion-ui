import Header from "@/components/layouts/Header";
import PageList from "@/components/layouts/home/page-list";
import RecentList from "@/components/layouts/home/recent list";
import { constants } from "@/lib/constants"
import { data } from "@/lib/data"
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index(){
    return(
        <View style={{flex:1, paddingTop: 32}}>
            <Header />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 24, paddingBottom: 100}}>
                <RecentList data={data.recent} />
                <PageList data={data.pages} />
            </ScrollView>
            
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