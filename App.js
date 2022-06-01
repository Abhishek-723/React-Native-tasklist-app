import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './Components/Tasks';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState();

    const addTask = (newTask) => {
        Keyboard.dismiss();
        setTasks([...tasks, newTask]);
        setInput(null);
    }
    const deleteTask = (index) => {
        const tasksArr = [...tasks];
        tasksArr.splice(index, 1);
        setTasks(tasksArr);
    }
  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Today's Tasks</Text>
            <View>
                {
                    tasks.map((data, index) => (
                        <TouchableOpacity onPress={() => deleteTask(index)}>
                            <Tasks t={data} key={index} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.taskWrapper}
        >
            <TextInput style={styles.taskInputs} placeholder={'Add a task here'} value={input} onChangeText={Text => setInput(Text)}/>
            <Button title="Add Task" style={styles.taskButton} onPress={() => addTask(input)} />
        </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  headerView: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  headerText: {
      fontSize: 24,
      fontWeight: 'bold'
  },
  taskWrapper: {
      position: 'absolute',
      bottom: 10,
      width: "100%",
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  taskInputs: {
      backgroundColor: "#fff",
      width: "70%",
      padding: 10,
      borderRadius: 2
  },
  taskButton: {
      width: "20%"
  }
});
