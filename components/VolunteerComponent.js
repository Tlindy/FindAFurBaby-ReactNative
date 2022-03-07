import React, { Component } from "react";
import { View, Text } from "react-native";

class Volunteer extends Component {
    static navigationOptions = {
        title: "Volunteer",
    };

    render() {
        return (
            <View>
                <Text>Volunteer Component</Text>
            </View>
        );
    }
}

export default Volunteer;
