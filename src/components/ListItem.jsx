import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// ListItem bileşeni, her bir görevi temsil eder.
const ListItem = ({ task }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{task}</Text>
        </View>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    itemContainer: {
        padding: 16, // İç boşluk
        borderBottomWidth: 1, // Alt kenar kalınlığı
        borderBottomColor: '#ccc', // Alt kenar rengi
    },
    itemText: {
        fontSize: 16, // Yazı boyutu
    },
});

export default ListItem;