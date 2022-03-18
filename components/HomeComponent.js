import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS
        };
    }

    static navigationOptions = {
        title: "Home",
    };

    render() {
        return (
            <View>
                <Text>Featured Fur Babies</Text>
            </View>
        );
    }
}

export default Home;
