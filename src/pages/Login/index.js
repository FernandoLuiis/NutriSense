import React, { useState } from 'react';
import DefaultButton from '../../components/DefaultButton';
import { StyleSheet, Dimensions, Text, View, TextInput, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ButtonGradient from '../../components/ButtonGradient/';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDI3oAJ08RZj20vzEGIPv61wyu49KX4NP8",
    authDomain: "nutrisense-5abcd.firebaseapp.com",
    projectId: "nutrisense-5abcd",
    storageBucket: "nutrisense-5abcd.appspot.com",
    messagingSenderId: "90428145815",
    appId: "1:90428145815:web:aec5d5fe9b11c82d19e9d2",
    measurementId: "G-5FB6HN7B66"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const { width, height } = Dimensions.get('window');

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Login bem-sucedido!');
            // Navegar para outra tela após login, se necessário
            // navigation.navigate('Home');
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
                <DefaultButton>secureTextEntry={secureTextEntry}, toggleSecureEntry={toggleSecureEntry}</DefaultButton>
            </View>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            <ButtonGradient onPress={handleLogin} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 175,
        height: 175,
        marginBottom: 20,
        marginTop: 50,
    },
    titulo: {
        fontSize: 50,
        color: '#181818',
        fontWeight: 'bold',
    },
    sub_titulo: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
    },
    icon: {
        marginHorizontal: 10,
    },
    forgotPassword: {
        marginTop: 20,
        color: 'gray',
    },
});