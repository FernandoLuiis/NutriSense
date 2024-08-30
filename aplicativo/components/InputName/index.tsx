import {Text, TextInput, View} from "react-native";

const InputName = ({label, onChangeText, value, id}: any) => {
    return <View style={{
        marginLeft: 5,
        marginRight: 5,
    }}>
        <Text>{label}</Text>
        <TextInput onChangeText={onChangeText} value={value} id={id} style={{
            padding: 5,
            borderWidth: 1,
            borderStyle: 'solid',
        }}/>
    </View>
}

export default InputName;