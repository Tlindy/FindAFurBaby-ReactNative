import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    Button,
    Modal,
    StyleSheet
} from "react-native";
import { Card, Input, CheckBox } from "react-native-elements";
import { DOGS } from "../shared/dogsAdopt";

export function RenderDog(props) {
    const { dog } = props;

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
                <Text style={{ margin: 10, fontSize: 15 }}>
                    {dog.info}
                </Text>
                <View>
                    <Button
                        title="Adopt"
                        color="lightpink"
                        onPress={() => props.onShowModal()}
                    />
                </View>
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
            showModal: false,
            firstName: "",
            lastName: "",
            email: "",
            agree: false
        };
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    resetForm() {
        this.setState({
            showModal: false,
            firstName: "",
            lastName: "",
            email: "",
            agree: false
        });
    }

    static navigationOptions = {
        title: "Fur Baby Information",
    };

    render() {
        const dogId = this.props.navigation.getParam("dogId");
        const dog = this.state.dogs.filter((dog) => dog.id === dogId)[0];
        return (
            <ScrollView>
                <RenderDog 
                    dog={dog}
                    onShowModal={() => this.toggleModal()}
                />
                <Modal
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>
                            Please fill out the form below to receive an adoption form and more information about adopting from Find A Fur Baby
                        </Text>
                        <Input
                            placeholder="First Name"
                            onChangeText={text => 
                                this.setState({ firstName: text })
                            }
                            value={this.state.firstName}
                        />
                        <Input
                            placeholder="Last Name"
                            onChangeText={text => 
                                this.setState({ lastName: text })
                            }
                            value={this.state.lastName}
                        />
                        <Input
                            placeholder="Email"
                            onChangeText={text => 
                                this.setState({ email: text })
                            }
                            value={this.state.email}
                        />
                        <CheckBox
                        title="I agree to receive email from Find A Fur Baby"
                        center
                        checked={this.state.agree}
                        onPress={() => this.setState({agree: !this.state.agree})}
                        containerStyle={styles.formCheckbox}
                        />
                        <View style={styles.modalButtons}>
                            <Button
                                title="Submit"
                                color="lightskyblue"
                                onPress={() => this.resetForm()}
                            />
                            <Button
                                title="Cancel"
                                color="grey"
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        modal: {
            justifyContent: "center",
            margin: 20
        },
        modalText : {
            fontSize: 24,
            paddingBottom: 40,
            color: "lightpink",
            fontWeight: "bold",
            textAlign: "center"
        },
        formCheckbox: {
            margin: 10,
            backgroundColor: null
        },
        modalButtons: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 10
        }
})

export default DogInfo;
