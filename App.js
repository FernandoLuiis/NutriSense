import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import LoginPage from './src/pages/Login';
import firebaseConfig from './src/helper/FirebaseConfig';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <LoginPage/>
  );
}
