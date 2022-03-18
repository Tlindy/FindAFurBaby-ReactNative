import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { Tile, Divider } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";
//images not showing up and pet info components not working now"
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
                <View>
                    <Tile
                        title={item.name}
                        onPress={() => navigate("DogInfo", { dogId: item.id })}
                        imageSrc={ item.image }
                        titleStyle={{ alignSelf: "center" }}
                        contentContainerStyle={{ backgroundColor: "lightpink", margin: 10 }}
                    />
                    <Divider style={{ height: 70, backgroundColor: "black" }} />
                </View>
            );
        };
        return (
            <View>
                <FlatList
                    data={this.state.dogs}
                    renderItem={renderDogAdoptCard}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default AdoptDogs;
