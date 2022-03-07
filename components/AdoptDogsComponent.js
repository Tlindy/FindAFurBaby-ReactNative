import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";

class AdoptDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
        };
    }

    static navigationOptions = {
        title: "Adopt A Dog",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDogAdoptCard = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.breed}
                    onPress={() => navigate("DogInfo", { dogId: item.id })}
                    leftAvatar={{ source: require("./images/dogToAdopt1.jpg") }}
                />
            );
        };
        return (
            <FlatList
                data={this.state.dogs}
                renderItem={renderDogAdoptCard}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default AdoptDogs;
