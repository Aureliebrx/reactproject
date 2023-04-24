import React from 'react';
import {Alert, Separator, Button, SafeAreaView, StyleSheet, View, Text, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const Separator = () => <View style={styles.separator} />;
  return (
    
    <SafeAreaView style={styles.container}>
    <Separator/>
    <Text style={styles.item1}>Nom</Text>
      <TextInput
       style={{
          height: 40,
          width: 400,
          borderColor: 'red',
          borderWidth: 1,
          margin: 10,
          color: 'white',
        }}
        defaultValue="Tapez ici ..."
      />
      <Text style={styles.item2}>Prénom</Text>
      <TextInput
         style={{
          height: 40,
          width: 400,
          borderColor: 'red',
          borderWidth: 1,
          margin: 10,
          color: 'white',
        }}
        defaultValue="Tapez ici ..."
      />
      <Text style={styles.item2}>Adresse mail</Text>
      <TextInput
         style={{
          height: 40,
          width: 400,
          borderColor: 'red',
          borderWidth: 1,
          margin: 10,
          color: 'white',
        }}
        defaultValue="ex : aurelie@gmail.com"
      />
      <Text style={styles.item2}>Mot de passe</Text>
      <TextInput
         style={{
          height: 40,
          width: 400,
          borderColor: 'red',
          borderWidth: 1,
          margin: 10,
          color: 'white',
        }}
        defaultValue="Entrez votre mot de passe..."
      />
      <TextInput
         style={{
          height: 40,
          width: 400,
          borderColor: 'red',
          borderWidth: 1,
          margin: 10,
          color: 'white',
        }}
        defaultValue="Resaisissez votre mot de passe..."
      />
     
    </SafeAreaView>
    
  
  
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 1000,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 12,
    marginTop: 40,
    marginLeft: 20,
    textAlign: 'center',
  },
  item2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 12,
    marginTop: 30,
    marginLeft: 20,
    textAlign: 'center',
  },
  titleitem: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  },
});

export default TextInputExample;