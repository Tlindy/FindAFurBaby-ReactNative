import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Volunteer from "./VolunteerComponent";
import AdoptCats from "./AdoptCatsComponent";
import AdoptDogs from "./AdoptDogsComponent";
import DogInfo from "./DogInfoComponent";
import CatInfo from "./CatInfoComponent";
import Constants from "expo-constants";
import {
    View,
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    Image,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";

const AdoptDogsNavigator = createStackNavigator(
    {
        AdoptDogs: {
            screen: AdoptDogs,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <Icon
                        name="dog"
                        type="font-awesome-5"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
                ),
            }),
        },
        DogInfo: { screen: DogInfo },
    },
    {
        initialRouteName: "AdoptDogs",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "lightskyblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                color: "white",
            },
        },
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "lightskyblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                color: "white",
            },
            headerLeft: (
                <Icon
                    name="home"
                    type="font-awesome-5"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const AdoptCatsNavigator = createStackNavigator(
    {
        AdoptCats: {
            screen: AdoptCats,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <Icon
                        name="cat"
                        type="font-awesome-5"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
                ),
            }),
        },
        CatInfo: { screen: CatInfo },
    },
    {
        initialRouteName: "AdoptCats",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "lightskyblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                color: "white",
            },
        },
    }
);

const VolunteerNavigator = createStackNavigator(
    {
        Volunteer: { screen: Volunteer },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "lightskyblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                color: "white",
            },
            headerLeft: (
                <Icon
                    name="hands-helping"
                    type="font-awesome-5"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "lightskyblue",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                color: "white",
            },
            headerLeft: (
                <Icon
                    name="info-circle"
                    type="font-awesome-5"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require("./images/furBabyLogo.png")}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Find A Fur Baby</Text>
                    <Text style={styles.drawerHeaderSubtext}>Pet Rescue</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        type="font-awesome-5"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        AdoptDogs: {
            screen: AdoptDogsNavigator,
            navigationOptions: {
                drawerLabel: "Adopt A Dog",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="dog"
                        type="font-awesome-5"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        AdoptCats: {
            screen: AdoptCatsNavigator,
            navigationOptions: {
                drawerLabel: "Adopt A Cat",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="cat"
                        type="font-awesome-5"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        Volunteer: {
            screen: VolunteerNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="hands-helping"
                        type="font-awesome-5"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: "About Find A Fur Baby",
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="info-circle"
                        type="font-awesome-5"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        drawerBackgroundColor: "lightpink",
        contentComponent: CustomDrawerContentComponent,
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "lightskyblue",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    drawerHeaderSubtext: {
        color: "orange",
        fontSize: 20,
        fontWeight: "bold",
    },
    drawerImage: {
        height: 100,
        width: 100,
    },
    stackIcon: {
        marginLeft: 10,
        color: "white",
        fontSize: 24,
    },
});

export default Main;
