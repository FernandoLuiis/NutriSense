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
        marginBottom: 5,
        color: "#333",
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 14, 
        height: 50,
        backgroundColor: "#FFF",
    },
});

export default InputName;
