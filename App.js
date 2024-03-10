import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Tasks</Text>
				<View style={styles.items}></View>
			</View>
			<Task text="car"/>
			<Task text="cat"/>
			<Task text="orange"/>
			<Task text="dog"/>
			<Task text="vroom"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
    // paddingHorizontal: 32
    paddingHorizontal: 20,
	},
	tasksWrapper: {
		paddingTop: 62,
	},
	sectionTitle: {
		// color: '#fff',
		fontSize: 32,
		fontWeight: 'bold',
	},
	items: {},
});

