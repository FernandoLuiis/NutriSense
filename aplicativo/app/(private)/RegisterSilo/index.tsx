import InputName from "@/components/InputName";
import {useState} from "react";
import {Text, TouchableHighlight} from "react-native";
import { router } from "expo-router";


const RegisterSilo = () => {
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
        <InputName label="Codigo do Silo" id={"cd_silo"} onChangeText={(value, id:"cd_silo") => {
            handleUpdateInput({value, id: "cd_silo"})
        }}/>
        <InputName label="Capacidade do Silo KG" id={"qtd_silo"} onChangeText={(value, id:"qtd_silo") => {
            handleUpdateInput({value, id: "qtd_silo"})
        }}/>
        <InputName label="Diametro Inicial Cone Inferior" id={"diametro_inicial_i"} onChangeText={(value, id:"diametro_inicial_i") => {
            handleUpdateInput({value, id: "diametro_inicial_i"})
        }}/>
        <InputName label="Diametro Final Cone Inferior" id={"diametro_final_"} onChangeText={(value, id:"diametro_final_i") => {
            handleUpdateInput({value, id: "diametro_final_i"})
        }}/>
        <InputName label="Diametro Inicial Cone Superior" id={"diametro_inicial_s"} onChangeText={(value, id:"diametro_inicial_s") => {
            handleUpdateInput({value, id: "diametro_inicial_s"})
        }}/>
        <InputName label="Diametro Final Cone Inferior" id={"diametro_final_s"} onChangeText={(value, id:"diametro_final_s") => {
            handleUpdateInput({value, id: "diametro_final_s"})
        }}/>
        <InputName label="Diametro Central" id={"diametro_central"} onChangeText={(value, id:"diametro_central") => {
            handleUpdateInput({value, id: "diametro_central"})
        }}/>

        <TouchableHighlight onPress={handleCreateUser}
        style={{
            top:10,
            margin: 80,
            padding: 18,
            backgroundColor: '#555152',
            borderRadius: 15,
           
        }}
        >
            <Text style={{ textAlign: 'center',color:"#fff"}}>Salvar</Text>
        
        </TouchableHighlight>
    </>
}

export default RegisterSilo;