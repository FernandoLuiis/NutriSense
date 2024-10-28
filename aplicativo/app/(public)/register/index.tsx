import InputName from "@/components/InputName";
import {useState} from "react";
import {Text, TouchableHighlight, Alert} from "react-native";
import { router } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/setup/firebase"; // Certifique-se de que esse caminho está correto

// Inicializar o Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterPage = () => {
    const [form, setForm] = useState({
        email: '',
        senha: '',
        confirmaSenha: ''
    });

    const handleUpdateInput = ({value, id}) => {
        setForm({
            ...form, [id]: value
        });
    };

    
    const handleCreateUser = async () => {
        const { email, senha, confirmaSenha } = form;

        if (senha !== confirmaSenha) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        try {
            // Criar o usuário com email e senha no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            // Após o cadastro bem-sucedido, redirecionar para outra página
            Alert.alert('Sucesso', 'Usuário criado com sucesso!');
            router.push('/RegisterSilo'); // Redirecionar para outra tela após o cadastro
        } catch (error) {
            Alert.alert('Erro', error.message);
        }
    };

    return (
        <>
            <InputName label="E-mail" id="email" onChangeText={(value) => handleUpdateInput({value, id: "email"})} />
            <InputName label="Senha" id="senha" onChangeText={(value) => handleUpdateInput({value, id: "senha"})} />
            <InputName label="Confirmar senha" id="confirmaSenha" onChangeText={(value) => handleUpdateInput({value, id: "confirmaSenha"})} />

            <TouchableHighlight onPress={handleCreateUser} style={{ top:180, margin: 80, padding: 18, backgroundColor: '#555152', borderRadius: 15 }}>
                <Text style={{ textAlign: 'center', color:"#fff" }}>Criar</Text>
            </TouchableHighlight>
        </>
    );
};

export default RegisterPage;
