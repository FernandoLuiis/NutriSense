import InputName from "@/components/InputName";
import {useState} from "react";
import {Text, TouchableHighlight} from "react-native";
import { router } from "expo-router";


const RegisterPage = () => {
    const [form, setForm] = useState({});
    const handleUpdateInput = ({value, id}) => {
        setForm({
            ...form, [id]: value
        })
    }

   /* const handleCreateUser = () => {
        console.log(form)
    }*/
    const handleCreateUser = () =>{
        router.push('/dashboard')
    }


    return <>
        <InputName label="E-mail" id={"email"} onChangeText={(value, id:"email") => {
            handleUpdateInput({value, id: "name"})
        }}/>
        <InputName label="Senha" id={"senha"} onChangeText={(value, id:"senha") => {
            handleUpdateInput({value, id: "email"})
        }}/>
    
        <InputName label="Confirmar senha" id={"confirmaSenha"} onChangeText={(value, id:"confirmasenha") => {
            handleUpdateInput({value, id: "pass"})
        }}/>

        <TouchableHighlight onPress={handleCreateUser}
        style={{
            top:180,
            margin: 80,
            padding: 18,
            backgroundColor: '#555152',
            borderRadius: 15,
           
        }}
        >
            <Text style={{ textAlign: 'center',color:"#fff"}}>Criar</Text>
        
        </TouchableHighlight>
    </>
}

export default RegisterPage;