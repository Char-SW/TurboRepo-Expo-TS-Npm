import Feature1 from 'feature1';
import Feature2 from 'feature2';
import Feature3 from 'feature3';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feature1">
        <Tab.Screen name="Feature1" component={Feature1} options={{ title: 'Feature 1' }} />
        <Tab.Screen name="Feature2" component={Feature2} options={{ title: 'Feature 2' }} />
        <Tab.Screen name="Feature3" component={Feature3} options={{ title: 'Feature 3' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
