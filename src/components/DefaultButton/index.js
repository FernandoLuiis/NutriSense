import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DefaultButton({ secureTextEntry, toggleSecureEntry }) {
    return (
        <TouchableOpacity onPress={toggleSecureEntry} style={buttonStyles.eyeIcon}>
            <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
});
