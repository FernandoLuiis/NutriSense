import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Alert')}>
                <Text style={styles.menuText}>Alerta</Text> {/* Certifique-se de que os textos estão dentro de <Text> */}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('RegisterSilo')}>
                <Text style={styles.menuText}>Registro de Silo</Text> {/* Certifique-se de que os textos estão dentro de <Text> */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuText: {
        fontSize: 16,
    },
});

export default Menu;
