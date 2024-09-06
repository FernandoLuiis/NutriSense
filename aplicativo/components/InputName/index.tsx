import {Text, TextInput, View} from "react-native";

const InputName = ({label, onChangeText, value, id}: any) => {
    return <View style={{
        marginLeft: 30,
        marginRight: 30,
        top:200,
    }}>
        <Text>{label}</Text>
        <TextInput onChangeText={onChangeText} value={value} id={id} style={{
            padding: 20,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 12,
            textShadowColor: 'dark',
            flex:1,
            justifyContent:"center",
            fontSize:24,
            marginBottom:20,
        }}/>
    </View>
}

export default InputName;