import React, { Component } from "react";
import { View, Text } from "react-native";

class AdoptCats extends Component {
    static navigationOptions = {
        title: "Adopt A Cat",
    };

    render() {
        return (
            <View>
                <Text>Cats to Adopt</Text>
            </View>
        );
    }
}

export default AdoptCats;
