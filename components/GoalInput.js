import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';
function GoalInput(props) {
    const [enteredText, setEnteredText] = useState('');
    function goalInputHandeler(text) {
        setEnteredText(text);
      };
    function addGoal(){
        props.onAddGoal(enteredText);
        setEnteredText('');
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Enter Task' onChangeText={goalInputHandeler} value={enteredText} />
            <Button title='Add Task' onPress={addGoal} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});