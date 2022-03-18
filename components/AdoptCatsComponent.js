import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { Tile, Divider } from "react-native-elements";
import { CATS } from "../shared/catsAdopt";

class AdoptCats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CATS,
        };
    }

    static navigationOptions = {
        title: "Adopt A Cat",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderCatAdoptCard = ({ item }) => {
            return (
                <View>
                    <Tile
                        title={item.name}
                        onPress={() => navigate("CatInfo", { catId: item.id })}
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
                    data={this.state.cats}
                    renderItem={renderCatAdoptCard}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default AdoptCats;
