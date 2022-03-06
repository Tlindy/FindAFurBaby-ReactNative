import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function AdoptDogs(props) {
    const renderDogAdoptCard = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.breed}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require("./images/dogToAdopt1.jpg") }}
            />
        );
    };
    return (
        <FlatList
            data={props.dogs}
            renderItem={renderDogAdoptCard}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default AdoptDogs;
