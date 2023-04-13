import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";
import BadgerNewsStack from "./BadgerNewsStack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BadgerTabs(props) {
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name = "News"
                component = {BadgerNewsStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='newspaper' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name = "Preferences"
                component = {BadgerPreferencesScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='construct' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    </>
}


export default BadgerTabs;