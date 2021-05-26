import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SpeechButton from './Components/SpeechButton';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  render(){
    return (
      <SafeAreaProvider>
        <View>
          <Header
          backgroundColor={'cyan'}
          centerComponent={{text: "Text to Speech", style: {fontWeight: "bold", fontSize: 20}}} />
          <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text
            })
          }}
          value={this.state.text}
          placeholder="Enter a word" />
          <SpeechButton word={this.state.text} />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 150,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none'
  }
});