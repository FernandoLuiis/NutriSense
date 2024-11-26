import { useState } from "react";
import { Text, TouchableHighlight, ScrollView, View, StyleSheet } from "react-native";
import InputName from "@/components/InputName";
import { router } from "expo-router";
import { api } from "@/axios";

const RegisterSilo = () => {
    const [form, setForm] = useState({});
    const handleUpdateInput = ({ value, id }) => {
        setForm({ ...form, [id]: value });
    };

    const handleCreateSilo = async () => {
        try {
            await api.post("/capacidade_silos", { ...form });
            // router.push('/dashboard')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Registrar Silo</Text>

            <InputName
                label="Código do Silo"
                id={"cd_silo"}
                keyboardType="numeric"
                onChangeText={(value, id = "cd_silo") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Capacidade do Silo (KG)"
                id={"capacidade_silo"}
                keyboardType="numeric"
                onChangeText={(value, id = "capacidade_silo") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Diâmetro Inicial Cone Inferior"
                id={"diametro_inicial_i"}
                keyboardType="numeric"
                onChangeText={(value, id = "diametro_inicial_i") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Diâmetro Final Cone Inferior"
                id={"diametro_final_i"}
                keyboardType="numeric"
                onChangeText={(value, id = "diametro_final_i") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Diâmetro Inicial Cone Superior"
                id={"diametro_inicial_s"}
                keyboardType="numeric"
                onChangeText={(value, id = "diametro_inicial_s") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Diâmetro Final Cone Superior"
                id={"diametro_final_s"}
                keyboardType="numeric"
                onChangeText={(value, id = "diametro_final_s") => handleUpdateInput({ value, id })}
            />
            <InputName
                label="Diâmetro Central"
                id={"diametro_central"}
                keyboardType="numeric"
                onChangeText={(value, id = "diametro_central") => handleUpdateInput({ value, id })}
            />

            <TouchableHighlight onPress={handleCreateSilo} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableHighlight>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: "#F3F4F6",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    inputText: {
        fontSize: 10, // Diminui o tamanho do texto dentro dos campos
    },
    button: {
        backgroundColor: "#555152",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "300",
    },
});

export default RegisterSilo;
