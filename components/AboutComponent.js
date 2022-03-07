import React, { Component } from "react";
import { View, Text } from "react-native";

class About extends Component {
    static navigationOptions = {
        title: "About",
    };

    render() {
        return (
            <View>
                <Text>About Find A Fur Baby Pet Rescue</Text>
            </View>
        );
    }
}

export default About;
