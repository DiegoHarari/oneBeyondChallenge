import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Home} from './screens/Home/Home';
import {Details} from './screens/Details/Details';

import {APIContextProvider} from './context/apiContext';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <APIContextProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </APIContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
