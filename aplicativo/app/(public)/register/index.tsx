import InputName from "@/components/InputName";
import {useState} from "react";
import {Text, TouchableHighlight} from "react-native";


const RegisterPage = () => {
    const [form, setForm] = useState({});
    const handleUpdateInput = ({value, id}) => {
        setForm({
            ...form, [id]: value
        })
    }

    const handleCreateUser = () => {
        console.log(form)
    }
    return <>
        <InputName label="Nome" id={"email"} onChangeText={(value) => {
            handleUpdateInput({value, id: "name"})
        }}/>
        <InputName label="Senha" id={"senha"} onChangeText={(value) => {
            handleUpdateInput({value, id: "email"})
        }}/>
        <InputName label="Confirmar senha" id={"confirmaSenha"} onChangeText={(value) => {
            handleUpdateInput({value, id: "pass"})
        }}/>

        <TouchableHighlight onPress={handleCreateUser}
        style={{
            margin: 10,
            padding: 15,
            backgroundColor: '#fbfbfb',
            borderRadius: 15,
        }}
        >
            <Text style={{
                textAlign: 'center',
            }}>Criar</Text>
        </TouchableHighlight>
    </>
}

export default RegisterPage;