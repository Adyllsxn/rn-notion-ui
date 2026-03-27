import { constants } from "@/lib/constants"
import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: constants.colors.blue[100],
            tabBarInactiveTintColor: constants.colors.gray[400],
            tabBarStyle:{
                backgroundColor: constants.colors.gray[800],
                borderTopColor: constants.colors.gray[400]
            },
            sceneStyle: {
                backgroundColor: constants.colors.gray[800],
            },
        }}>
            
            <Tabs.Screen 
                name="index" 
                options={{
                    tabBarIcon:({color, size})=> (
                        <Feather name="home" size={size} color={color} />
                    )
                }}/>
            
            <Tabs.Screen 
                name="search" 
                options={{
                    tabBarIcon:({color, size})=> (
                        <Feather name="search" size={size} color={color} />
                    )
                }}/>
            
            <Tabs.Screen 
                name="notifications" 
                options={{
                    tabBarIcon:({color, size})=> (
                        <Feather name="inbox" size={size} color={color} />
                    ),
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        backgroundColor: constants.colors.red[300],
                        borderRadius: 5
                    }
                }}/>
            
            <Tabs.Screen 
                name="profile" 
                options={{
                    tabBarIcon:({color, size})=> (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }}/>

        </Tabs>
    )
}