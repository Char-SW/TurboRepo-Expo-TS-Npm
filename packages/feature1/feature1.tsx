import { StyleSheet, Text, View } from 'react-native';

import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Feature1() {
	return (
		<View style={styles.container}>
			<Image
				source="https://picsum.photos/seed/696/3000/2000"
				style={{width: 400, height: 300, marginTop: 10}}
				placeholder={blurhash}
				contentFit="cover"
				transition={1000}
				alt="base image"
			/>
			<Text>Feature 1 - imports and uses a dependency (expo-image)</Text>
		</View>
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
