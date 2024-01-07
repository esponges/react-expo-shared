import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store/rtk-redux/store';
import { Home } from './store/views/Home';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

console.log('apollo client', client);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style='auto' />
        </View>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
