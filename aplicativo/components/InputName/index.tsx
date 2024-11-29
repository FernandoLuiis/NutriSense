import { Text, TextInput, View, StyleSheet } from "react-native";

const InputName = ({ label, onChangeText, value, id, type_keyboard = "default" }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                keyboardType={type_keyboard}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                placeholder={`Digite seu ${label.toLowerCase()}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 12,
    },
    label: {
        fontSize: 16,
        marginBottom: 5, // Ajuste de espaçamento entre o label e o campo
        color: "#333", // Melhor contraste e consistência
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 14, // Fonte levemente maior para melhor legibilidade
        height: 50,
        backgroundColor: "#FFF", // Fundo branco para contraste com o fundo da tela
    },
});

export default InputName;
