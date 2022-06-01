import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tasks = (props) => {
    return (
        <View style={styles.Item}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.t}</Text>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    Item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    square: {
        width:20,
        height: 20,
        backgroundColor: "#55BCF6",
        opacity: 0.8,
        borderRadius: 4
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 6,
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: "#55BCF6"
    },
    itemText: {
        maxWidth: "80%",
        // backgroundColor: 'red'
    }
})

export default Tasks