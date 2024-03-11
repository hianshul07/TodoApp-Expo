import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	// TextInput,
	Pressable,
	TouchableOpacity,
	View,
} from 'react-native';
import { PaperProvider, TextInput, Appbar, Button, FAB } from 'react-native-paper';
import Task from './components/Task';

export default function App() {
	const [task, setTask] = useState('');
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]), setTask(null);
	};

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	};

	return (
		<PaperProvider>
			<Appbar.Header >
       <Appbar.Content title="Tasks" style={styles.sectionTitle}/>
    </Appbar.Header>
			<View style={styles.container}>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					keyboardShouldPersistTaps='handled'
				>
					<View style={styles.tasksWrapper}>
						<View style={styles.items}>
							{taskItems.map((item, index) => {
								return (
									<Pressable key={index} onPress={() => completeTask(index)}>
										<Task text={item} />;
									</Pressable>
								);
							})}
						</View>
					</View>
				</ScrollView>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.writeTaskWrapper}
				>
					<TextInput
						style={styles.input}
						label="Enter task"
						multiline={true}
						// placeholder='write a task'
						mode='outlined'
						value={task}
						onChangeText={(text) => setTask(text)}
					/>
					<FAB style={styles.addButton} size='medium' icon="plus" mode="flat" onPress={() => handleAddTask()} />
				</KeyboardAvoidingView>
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
		// paddingHorizontal: 32
		paddingHorizontal: 20,
		alignItems: 'center'
	},
	tasksWrapper: {
		paddingTop: 62,
	},
	items: {
		marginTop: 30,
	},
	writeTaskWrapper: {
		// position: 'absolute',
		bottom: 48,
		width: '100%',
		flexDirection: 'row',
		
		justifyContent: 'space-between',
		// alignItems: 'center',
	},
	input: {
		// paddingVertical: 8,
		// marginHorizontal: 16,
		backgroundColor: '#FFF',
		// borderColor: '#C0C0C0',
		// borderWidth: 1,
		borderRadius: 12,
		width: '80%',
	},
	addButton: {
		alignItems: "center",
		justifyContent: "center",
		
	},
});

