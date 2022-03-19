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
import { CATS } from "../shared/catsAdopt";

export function RenderCat(props) {
    const { cat } = props;

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

class CatInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CATS,
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
        const catId = this.props.navigation.getParam("catId");
        const cat = this.state.cats.filter((cat) => cat.id === catId)[0];
        return (
            <ScrollView>
                <RenderCat 
                    cat={cat}
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

export default CatInfo;