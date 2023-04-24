import React from 'react';
import {
  Image, StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,
} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const DATAPIZZA = [
  {
    title: 'Pizzas',
    data: ['Regina', 'Campione', 'Veggie'],
  },
  {
    title: 'Pasta',
    data: ['Bolognesa', 'Carbonara', 'Cappio'],
  },
  {
    title: 'Desserts',
    data: ['Pizza nutella', 'Crepes', 'Tiramisu'],
  },
  {
    title: 'Boissons',
    data: ['IceTea', 'CocaCola'],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.menu}> Découvrez notre carte </Text>
    <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg',
        }}
      />
    <SectionList
      sections={DATAPIZZA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#FCC2BB',
    padding: 10,
    color: 'white',
    marginVertical: 8,
    fontSize: 10,
    margin:2,
  },
  header: {
    fontSize: 32,
    backgroundColor: 'red',
    marginTop:20,
    fontSize: 30,
    color:'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
  menu: {
    fontSize: 30,
    margin: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;