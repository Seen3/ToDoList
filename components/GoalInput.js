import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandeler(text) {
        setEnteredGoalText(text);
    };
    function addGoalHandeler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Enter Task' onChangeText={goalInputHandeler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Task' onPress={addGoalHandeler} color="#fcc5ff" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f00"/>
                    </View>
                </View>

            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#373351',
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        borderWidth: 2,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop:16,
        flexDirection: 'row',
    },
    button:{
        width:100,
        marginHorizontal:8
    },
    image:{
        width:100,
        height:100,
        margin:20,
    }
});