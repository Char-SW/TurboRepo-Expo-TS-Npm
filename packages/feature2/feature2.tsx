import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import common from 'common';
import { useState } from 'react';

export default function Feature2() {
	const [typedText, onChangeText] = useState<string>('');
	const [result, setResult] = useState<string | number>();
	const commonApis = common();

	const onCalculate = () => {
		const getLetters = commonApis.calculateLetters(typedText);
		const getWords = commonApis.calculateWords(typedText);
		setResult(
			"Characters: " + getLetters + " & Words: " + getWords
		);
	}

	const onReset = () => {
		onChangeText('');
		setResult('');
	}

	return (
		<View style={styles.container}>
			<Text> Feature 2 - imports and uses another internal module as a dependency (common) </Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={typedText}
				placeholder="Start typing..."
			/>
			<View style={styles.buttonContainer}>
				<Button
					onPress={onCalculate}
					title="Calculate"
					color="#841584"
					accessibilityLabel="Count Words & Letters"
				/>
				<Button
					onPress={onReset}
					title="Reset"
					color="#000"
					accessibilityLabel="Reset"
				/>
			</View>
			<Text style={styles.result}> Result: {"\n"} {result} </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	result: {
		textAlign: 'center'
	}
});
