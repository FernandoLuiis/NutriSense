import { Text, TextInput, View } from "react-native";

const InputName = ({ label, onChangeText, value, id, type_keyboard = "default" }: any) => {
    return (
        <View
            style={{
                marginLeft: 30,
                marginRight: 30,
                marginTop: 12, // Ajuste para melhorar o espaçamento
            }}
        >
            <Text style={{ fontSize: 16, marginBottom: 0 }}>
                {label} {/* O texto do label precisa estar dentro de um componente Text */}
            </Text>
            <TextInput
                keyboardType={type_keyboard}
                onChangeText={onChangeText}
                value={value}
                id={id}
                style={{
                    padding: 12, // Reduzi o padding para evitar cortes
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderRadius: 12,
                    fontSize: 18, // Ajustei o tamanho da fonte
                    marginBottom: 0,
                    height: 50, // Altura mínima para o campo de texto
                    maxHeight: 60, // Limitar altura para evitar problemas
                }}
                placeholder={`Digite seu ${label.toLowerCase()}`} // Placeholder opcional
            />
        </View>
    );
};

export default InputName;
