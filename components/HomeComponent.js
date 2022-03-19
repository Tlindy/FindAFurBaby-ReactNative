import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { Card, Divider } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";
import { CATS } from "../shared/catsAdopt";
import { RenderDog } from "./DogInfoComponent";
import { RenderCat } from "./CatInfoComponent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
            cats: CATS
        };
    }

    static navigationOptions = {
        title: "Home",
    };

    render() {
        const { navigate } = this.props.navigation;
        function RenderFeaturedDog(props) {
            const { dog } = props;

            if (dog) {
                return (
                    <Card
                        title={dog.name}
                        image={dog.image}
                    >
                        <Button
                            title="More info"
                            onPress={() => 
                                navigate("DogInfo", {
                                    dogId: dog.id
                                })
                            }
                            color="lightpink"
                        />
                    </Card>
                );
            }
        }

        function RenderFeaturedCat(props) {
            const { cat } = props;

            if (cat) {
                return (
                    <Card
                        title={cat.name}
                        image={cat.image}
                    >
                        <Button
                            title="More info"
                            onPress={() => 
                                navigate("CatInfo", {
                                    catId: cat.id
                                })
                            }
                            color="lightpink"
                        />
                    </Card>
                );
            }
        }

        return (
            <ScrollView>
                <View>
                    <Text style={styles.header}>
                        Featured Fur Babies
                    </Text>
                </View>
                <RenderFeaturedDog
                    dog={this.state.dogs.filter(
                        dog => dog.featured
                    )[0]}
                />
                <RenderFeaturedCat
                    cat={this.state.cats.filter(
                        cat => cat.featured
                    )[0]}
                />
                <RenderFeaturedDog
                    dog={this.state.dogs.filter(
                        dog => dog.featured
                    )[1]}
                />
                <RenderFeaturedCat
                    cat={this.state.cats.filter(
                        cat => cat.featured
                    )[1]}
                />
                <RenderFeaturedDog
                    dog={this.state.dogs.filter(
                        dog => dog.featured
                    )[2]}
                />
                <RenderFeaturedCat
                    cat={this.state.cats.filter(
                        cat => cat.featured
                    )[2]}
                />
                <Divider />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        color: "lightpink",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    }
})

export default Home;
