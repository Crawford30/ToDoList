import { React, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,


    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap', //when it gets too long, it will wrap to the next line

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circle: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55BCF6',

    }



});
export default Task