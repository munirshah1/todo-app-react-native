import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [taskItems, setTaskItems] = useState(['Task 1', 'Task 2']);

  return (
    <View style={styles.container}>
      {/* Display Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
