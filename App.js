// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import welcom from './welcom';
import order from './order';
 import plantify from './plantify';
 import Login from './Login';
 import home from './home';
//  import Signup from './Signup';
 import About from './About';


import waterpapermonia from './waterpapermonia';
import watermelon from './watermelon'

import Verification from './Verification'
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />    

       <Stack.Screen name="plantify" component={plantify} />   

       <Stack.Screen name="waterpapermonia" component={waterpapermonia} />  

       <Stack.Screen name="welcom" component={welcom} />    

        <Stack.Screen name="About" component={About} />     

       <Stack.Screen name="order" component={order} />        




       <Stack.Screen name="Verification" component={Verification} />   
       <Stack.Screen name="watermelon" component={watermelon} />  

 
       <Stack.Screen name="home" component={home} />    


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;










