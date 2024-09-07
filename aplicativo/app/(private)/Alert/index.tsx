import {Text} from "react-native";
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const AlertPage = () => {
    return <>
    <View style={styles.container}>
        <Text style={styles.h1}>ALERTA</Text>
        <Text style={styles.h2}>Verifique o silo ou equipamento de alimentação</Text>
        <Ionicons name="home" size={80} color="red" style={styles.icon}/>
        <Ionicons name="alert" size={100} calor="red" style={styles.alertIcon}/>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonDesativar}>DESATIVAR</Text>
        </TouchableOpacity>
    
    </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    h1:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        },
    h2:{
        fontSize: 16,
        textAling: 'center',
        marginBottom: 100,
    },
    icon:{
        marginBottom:20,
    },
    alertIcon:{
        marginBotton:20,
    },
    button:{
        backgroundColor:'black',
        paddingVertical:10,
        paddingHorizontal:40,
        borderRadius:10,
    },
    buttonDesativar:{
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    },
    
})

export default AlertPage;