import React from "react";
import { Text, View } from "react-native";
import { Card, Image } from "react-native-elements";

function RenderPet({ pet }) {
    if (pet) {
        return (
            <Card>
                <Image
                    source={require("./images/dogToAdopt1.jpg")}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
                <Text style={{ margin: 10, fontWeight: "bold", fontSize: 24 }}>
                    {pet.name}
                </Text>
                <Text style={{ margin: 10 }}>{pet.info}</Text>
            </Card>
        );
    }
    return <View />;
}

function PetInfo(props) {
    return <RenderPet pet={props.dog} />;
}

export default PetInfo;
