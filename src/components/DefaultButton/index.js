import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DefaultButton(secureTextEntry, toggleSecureEntry) {
    return (
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
            <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
});