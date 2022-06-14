import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [allTasks, addTasks] = useState([]);
  
  function addGoal(enteredText) {
    addTasks(allTasks => [...allTasks, {text:enteredText,key:Math.random().toString()}]);
  };
  function deleteGoal(id){
    addTasks(allTasks=>{
      return allTasks.filter((goal)=>goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal} />
      <View style={styles.tasksContainer}>
        <FlatList data={allTasks} renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoal}/>
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 2,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  tasksContainer: {
    flex: 5,
  },

})