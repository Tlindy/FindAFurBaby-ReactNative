import React, { Component } from "react";
import AdoptDogs from "./AdoptDogsComponent";
import PetInfo from "./PetInfoComponent";
import { View } from "react-native";
import { DOGS } from "../shared/dogsAdopt";
import { CATS } from "../shared/catsAdopt";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
            cats: CATS,
            selectedPet: null,
        };
    }

    onPetSelect(petId) {
        this.setState({ selectedPet: petId });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <AdoptDogs
                    dogs={this.state.dogs}
                    onPress={(petId) => this.onPetSelect(petId)}
                />
                <PetInfo
                    dog={
                        this.state.dogs.filter(
                            (dog) => dog.id === this.state.selectedPet
                        )[0]
                    }
                />
            </View>
        );
    }
}

export default Main;
