import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {router} from "expo-router";
import {firebaseConfig} from "@/setup/firebase";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleCreateAccount = () =>{
        router.push('/register')
    }
    const handleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if(response){
                router.push('/dashboard');
            }
        } catch (error) {
            Alert.alert('Erro', error.message);
        }
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/logo_login.png')} style={styles.logo} />
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
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.icon}>
                    <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.forgotPassword} onPress={handleCreateAccount}>Crie sua conta</Text>
            <Text style={styles.forgotPassword} onPress={handleCreateAccount}>Esqueceu sua senha</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

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
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        paddingHorizontal: 52,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});