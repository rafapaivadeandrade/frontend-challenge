import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from '../screens/Home';
import AddBook from "../screens/AddBook";
import colors from '../styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

function ProfileTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: "transparent",
          overflow: "hidden",
          position: "absolute",
          zIndex: 8,
        },
        tabStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderColor: "transparent",
          overflow: "hidden",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
        },
        inactiveBackgroundColor: "#fafafc",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={focused ? colors.black : color}
              />
            );
          },
        }}
      />
      <Screen
        name="AddBook"
        component={AddBook}
        options={{
          tabBarLabel: "Add Book",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="plus"
                size={size}
                color={focused ? colors.black : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={focused ? colors.black : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default ProfileTabs;
