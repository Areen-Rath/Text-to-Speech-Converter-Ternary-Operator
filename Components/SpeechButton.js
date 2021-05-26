import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Speech from 'expo-speech';

export default class SpeechButton extends React.Component {
    speak = (text) => {
        text
            ? Speech.speak(text)
            : Alert.alert("Invalid Entry")
    }

    render(){
        return (
            <TouchableOpacity
            style={styles.speechButton}
            onPress={() => {this.speak(this.props.word)}}>
                <Text style={styles.buttonText}>Click to hear Speech</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    speechButton: {
        marginTop: 20,
        alignSelf: 'center',
        width: 120,
        height: 60,
        backgroundColor: "cyan",
        borderRadius: 10,
        justifyContent: "space-evenly"
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'center'
    }
});