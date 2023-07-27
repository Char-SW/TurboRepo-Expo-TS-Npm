import { Button, StyleSheet, Text, View } from 'react-native';

import Feature1 from 'feature1';
import Feature2 from 'feature2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Feature3Home = ({ navigation }) => (
	<View style={styles.container}>
		<Text> Feature 3 - navigates between modules / uses a nested navigator to move between screens within the module. </Text>
		<Button title="Feature 1" onPress={() => navigation.navigate("Feature1")} />
		<Button title="Feature 2" onPress={() => navigation.navigate("Feature2")} />
	</View>
);
			
export default function Feature3() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Feature3Home"
				component={Feature3Home}
				options={{ title: 'Feature 3' }}
			/>
			<Stack.Screen
				name="Feature1"
				component={Feature1}
			/>
			<Stack.Screen
				name="Feature2"
				component={Feature2}
			/>
			
		</Stack.Navigator>			
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});