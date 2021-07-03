import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Home,
    Absent,
    Courses,
    Agency
} from "scenes";
import Icons from "./icons.json";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { Icon } from "components";

const TabIcon = ({ routeName, focused, color, size }) => {
    let iconName = Icons[routeName];
    return (
        <Icon
            name={iconName.name}
            type={iconName.type}
            style={{ color: color, fontSize: size, marginTop: width * .01 }}
        />
    );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () => (
    <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return (
                    <TabIcon
                        routeName={route.name}
                        focused={focused}
                        color={color}
                        size={size}
                    />
                );
            },
        })}
        tabBarOptions={{
            activeTintColor: "#fcdef1",
            inactiveTintColor: Colors.WHITE,
            labelStyle: {
                fontFamily: Fonts.PMedium,
                marginTop: -5,
                textTransform: 'capitalize',
                fontSize: RFValue(10)
            },
            style: {
                height: width * .17,
                justifyContent: 'center',
                paddingBottom: width * .009,                
                borderTopLeftRadius: width * .07,
                borderTopRightRadius: width * .07,
                backgroundColor: Colors.PRIMARY
            }
        }}
    >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Absent" component={Absent} />
        <BottomTab.Screen name="Courses" component={Courses} />
        <BottomTab.Screen name="Agency" component={Agency} />
    </BottomTab.Navigator>
)

export default BottomTabNavigation;