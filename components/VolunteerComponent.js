import React, { Component } from "react";
import { 
    View,
    ScrollView,
    Text,
    Image,
    Button,
    Modal,
    StyleSheet
} from "react-native";
import { Input, CheckBox } from "react-native-elements";

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        title: "Volunteer",
    };

    render() {
        return (
            <ScrollView>
                <Image
                    source={require("./images/volunteers2.jpg")}
                    style={{width: 400, height: 300, alignSelf: "center"}}
                />
                <Text
                    style={{
                        color: "lightskyblue",
                        fontWeight: "bold",
                        fontSize: 30,
                        textAlign: "center",
                        paddingTop: 10,
                        paddingBottom: 10
                    }}
                >
                    What should you know before volunteering?
                </Text>
                <Text style={{padding: 20}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, ante at feugiat laoreet, urna ipsum auctor ligula, nec ullamcorper nisl ex at dui. Sed hendrerit tempus nisl vitae pulvinar. Etiam lectus nunc, feugiat ac nibh et, consequat bibendum
                    augue. Duis quis pulvinar massa. Aliquam eget sapien sit amet risus varius gravida ut auctor est.
                </Text>
                <Button
                    title="Volunteer"
                    color="lightpink"
                    onPress={() => this.toggleModal()}
                />
                <Modal
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>
                            Please fill out the form below to receive more information about volunteering at Find A Fur Baby
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
});

export default Volunteer;
