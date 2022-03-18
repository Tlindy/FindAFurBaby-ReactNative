import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Image } from "react-native-elements";
import { CATS } from "../shared/catsAdopt";

export function RenderCat({ cat }) {
    if (cat) {
        return (
            <Card
                image={ cat.image }
                imageStyle={{ height: 300 }}
            >
                <Text style={{ margin: 10, fontWeight: "bold", fontSize: 24 }}>
                    Name: {cat.name}
                </Text>
                <Text style={{ margin: 10, fontSize: 15 }}>{cat.info}</Text>
            </Card>
        );
    }
    return <View />;
}

class CatInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CATS,
        };
    }

    static navigationOptions = {
        title: "Fur Baby Information",
    };

    render() {
        const catId = this.props.navigation.getParam("catId");
        const cat = this.state.cats.filter((cat) => cat.id === catId)[0];
        return <RenderCat cat={cat} />;
    }
}

export default CatInfo;