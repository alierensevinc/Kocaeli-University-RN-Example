import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// App bileşeni, uygulamanın ana bileşenidir.
export default function App() {
    const [tasks, setTasks] = useState([]); // Görev listesini tutan state
    const [taskName, setTaskName] = useState(''); // Mevcut görev adını tutan state

    const addTask = () => {
        if (taskName.trim()) {
            setTasks([...tasks, taskName]); // Yeni görevi görevler dizisine ekle
            setTaskName(''); // Girdi alanını temizle
        }
    };

    return (
        // Ana kapsayıcı View bileşeni
        <View style={styles.container}>
            {/* Başlık metni */}
            <Text style={styles.title}>TO DO Uygulaması</Text>
            {/* Girdi alanı ve butonun bulunduğu kapsayıcı View bileşeni */}
            <View style={styles.inputContainer}>
                {/* Görev adı için TextInput bileşeni */}
                <TextInput
                    style={styles.input}
                    placeholder={'Görev Adı'}
                    value={taskName}
                    onChangeText={setTaskName}
                />
                {/* Ekle butonu */}
                <Button title="Ekle" onPress={addTask} />
            </View>
            <View>
                {tasks.map((task, index) => (
                    <Text key={index}>{task}</Text>
                ))}
            </View>
        </View>
    );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
    container: {
        flex: 1, // Esnek yerleşim
        backgroundColor: '#fff', // Arka plan rengi beyaz
        alignItems: 'center', // Yatayda ortalama
        justifyContent: 'flex-start', // Dikeyde başa hizalama
        marginTop: 36 // Üstten boşluk
    },
    title: {
        fontSize: 20, // Yazı boyutu
        fontWeight: 'bold', // Kalın yazı
    },
    inputContainer: {
        flexDirection: 'row', // Yatayda yerleşim
        alignItems: 'center', // Yatayda ortalama
        justifyContent: 'space-between', // Elemanlar arasında boşluk bırakma
    },
    input: {
        height: 40, // Yükseklik
        width: 200, // Genişlik
        margin: 12, // Dış boşluk
        borderWidth: 1, // Kenar kalınlığı
        padding: 10, // İç boşluk
    }
});