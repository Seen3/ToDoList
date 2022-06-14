import { useState } from 'react';
import { FlatList, StyleSheet, View,Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible,setModalVisibility]=useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  
  function startAddGoalHandeler(){
    setModalVisibility(true);
  }
  function endAddGoalHandeler(){
    setModalVisibility(false);
  }

  function addGoalHandeler(enteredGoalText) {
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text:enteredGoalText,id:Math.random().toString()},
    ]);
    endAddGoalHandeler();
  };
  function deleteGoalHandeler(id){
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=>goal.id!==id);
    });
  };
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}> 
      <Button title='Add new Goal' color="#a2aaf5" onPress={startAddGoalHandeler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandeler} onCancel={endAddGoalHandeler}/>
      <View style={styles.tasksContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandeler}/>
          );
        }}
         keyExtractor={(item,index)=>{
          return item.id;
         }}
         alwaysBounceVertical={false}
         />
      </View>
    </View>
    </>
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