import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ButtonGradient } from '../Button/ButtonGradient';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login bem-sucedido!');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo_login.png')} style={styles.logo} />
      <Text style={styles.titulo}>NutriSense</Text>
      <Text style={styles.sub_titulo}>Excelência e controle</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
          <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      <ButtonGradient onPress={handleLogin} />
    </View>
  );
}
