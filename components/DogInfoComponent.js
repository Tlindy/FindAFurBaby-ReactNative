import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Image } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";

export function RenderDog({ dog }) {
    if (dog) {
        return (
            <Card
                image={dog.image}
                imageStyle={{ height: 300 }}
            >
                <Text style={{ margin: 10, fontWeight: "bold", fontSize: 24 }}>
                    Name: {dog.name}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 20 }}>
                    Breed: {dog.breed}
                </Text>
                <Text style={{ margin: 10, fontSize: 15 }}>{dog.info}</Text>
            </Card>
        );
    }
    return <View />;
}

class DogInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
        };
    }

    static navigationOptions = {
        title: "Fur Baby Information",
    };

    render() {
        const dogId = this.props.navigation.getParam("dogId");
        const dog = this.state.dogs.filter((dog) => dog.id === dogId)[0];
        return <RenderDog dog={dog} />;
    }
}

export default DogInfo;
