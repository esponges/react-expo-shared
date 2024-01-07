import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store/rtk-redux/store';
import { Home } from './store/views/Home';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </Provider>
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
