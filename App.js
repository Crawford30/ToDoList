import { React, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState(null);
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    //Dismiss keyboard on add task 
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleDeletetask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (<TouchableOpacity key={index} onPress={() => handleDeletetask(index)}>
              <Task text={item} />
            </TouchableOpacity>)
          })}
          {/* This is where the task will go */}

        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS === 'iOS' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a Task..."} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#c0c0c0',


  },
  addText: {}

});
