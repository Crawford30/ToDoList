import { React, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {/* This is where the task will go */}
          <Task text="First component" />
          <Task text="Second component" />
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS === 'iOS' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a Task..."} />
        <TouchableOpacity >
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
