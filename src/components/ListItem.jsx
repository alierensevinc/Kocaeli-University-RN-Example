import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// ListItem bileşeni, her bir görevi temsil eder.
const ListItem = ({ task, onDelete }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{task}</Text>
            <Button title="Sil" onPress={onDelete} />
        </View>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    itemContainer: {
        padding: 16, // İç boşluk
        borderBottomWidth: 1, // Alt kenar kalınlığı
        borderBottomColor: '#ccc', // Alt kenar rengi
        flexDirection: 'row', // Yatayda yerleşim
        justifyContent: 'space-between', // Elemanlar arasında boşluk bırakma
        alignItems: 'center', // Yatayda ortalama
    },
    itemText: {
        fontSize: 16, // Yazı boyutu
    },
});

export default ListItem;