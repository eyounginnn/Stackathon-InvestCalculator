import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import MainNav from './navigation/mainNav';
// import CustomerScreen from './src/CustomerScreen';
import utilities from './tailwind.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://qachasnek.stepzen.net/api/boisterous-sloth/__graphql",
  headers: {'Authorization':'apikey qachasnek::stepzen.io+1000::41fdd9285a9f81f85d0b00e2fc96195ec51db91511f815516a3a9a59a7c0634f'},
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
      <NavigationContainer>
      <MainNav />
      </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
