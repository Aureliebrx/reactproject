import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './components/menu';
import Connexion from './components/connexion';
import Inscription from './components/inscription';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title1}>Bienvenue sur le site de votre Pizzeria</Text>
      <View style={styles.container}>
    </View>
      <Text style={styles.h2}>Accedez à notre carte et commandez en ligne !</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        }}
          />
    </View>
  );
}

function MenuScreen() {
  return (
      <Menu/>
  );
}

function ConnexionScreen() {
  return (
    <Connexion/>
  );
}

function InscriptionScreen() {
  return (
    <Inscription/>
  );
}

function ProfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.container}>
      <Image
        style={styles.profil}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png',
        }}
      />
    </View>
      <Text>Nom : BIRRAUX</Text>
      <Text>Prénom : Aurélie</Text>
      <Text>Date de naissance : 18/10/2001 (21 ans)</Text>
      <Text>Commandes</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? 'black' : 'black', height: 60, textAlign: 'center', fontWeight:'bold', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="MENU" component={MenuScreen} />
        <Tab.Screen name="CONNEXION" component={ConnexionScreen} />
        <Tab.Screen name="INSCRIPTION" component={InscriptionScreen} />
        <Tab.Screen name="PROFIL" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  title1: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  h2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    paddingTop: 50,
  },
  profil: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  img: {
    marginTop: 80,
    width: 400,
    height: 400,
  }
});
