import React, { useEffect, useState } from 'react';
import { View, Button, Dimensions, TextInput, Text, FlatList } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { getAllSilos, getNivelRacao, getSiloInfo } from "@/service/silos";
import { api } from "@/axios";

const DashboardPage = () => {
    const [percentage, setPercentage] = useState(0);
    const [allSilos, setAllSilos] = useState([])
    const handleInputChange = async () => {
        await handleGetNivelRacao()
    };

    const handleGetSiloInfo = async (id) => {
        setPercentage(0)
        const response = await getSiloInfo(id)
        setPercentage(response.nivel)
    }

    const handleGetAllSilos = async () => {
        const response = await getAllSilos();
        setAllSilos(response)
    }

    const handleGetNivelRacao = async () => {
        const reponse = await getNivelRacao();
        await api.post("/nivel-racao", {
            umidade: 2.0,
            nivel: 3.0,
            codigo_silo: 1
        })
        setPercentage(reponse.porcentagem)
    }

    useEffect(() => {
        handleGetAllSilos();
        //handleGetNivelRacao()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={allSilos}
                renderItem={({ item }) => <View>
                    <Text style={{
                        padding: 10, backgroundColor: 'blue', marginBottom: 5, width: 100
                    }} onPress={async () => {
                        console.log(item.cd_silo)
                        handleGetSiloInfo(item.cd_silo)
                    }}>{item.cd_silo}</Text> </View>}
                keyExtractor={item => item.id}
            />

            <View id='card' style={
                {
                    padding: 10,
                    backgroundColor: '#f2f2f2'
                }
            }>
                <Text style={{
                    fontSize: 36,
                    color: 'red'
                }}>Nivel</Text>
                <Text style={{
                    fontSize: 14,
                    color: 'red'
                }}>${percentage}%</Text>
            </View>

            <Button title="Atualizar" onPress={handleGetNivelRacao} />
            <Button title="Alerta" onPress={(handleInputChange)} />
        </View>
    );
};

export default DashboardPage;
