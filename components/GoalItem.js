import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (

        <View style={styles.listItem}>
            <Pressable android_ripple={{ color: '#262b48' }} onPress={props.onDelete.bind(this, props.id)}>
                <Text style={styles.listText}>{props.text}</Text>
            </Pressable>
        </View>

    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#a299f5',
    },
    listText: {
        padding:8,
        color: '#140f07',
    },
});