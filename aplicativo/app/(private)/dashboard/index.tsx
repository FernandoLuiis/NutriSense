import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAllSilos, getSiloInfo } from "@/service/silos";

const DashboardPage = () => {
    const [percentage, setPercentage] = useState(0);
    const [allSilos, setAllSilos] = useState([]);
    const [selectedSilo, setSelectedSilo] = useState(null);
    const [createDate, setCreateDate] = useState('');

    const handleGetSiloInfo = async (id) => {
        setPercentage(0); // Define como 0% por padrão
        const response = await getSiloInfo(id);
        console.log('Resposta do getSiloInfo:', response); // Verificar os dados retornados

        if (!response || response.nivel === undefined) {
            // Caso não haja dados, define 0% e uma data padrão
            setCreateDate('');
            setPercentage(0);
            setSelectedSilo(id);
            Alert.alert(
                "Informação indisponível",
                `Nenhum dado disponível para o Silo ${id}.`,
                [{ text: "OK", onPress: () => console.log("Alerta fechado.") }]
            );
            return;
        }

        // Ajuste para formatar a data corretamente, se disponível
        const formattedDate = response.createdat
            ? response.createdat.replace(
                /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/,
                "$3-$2-$1T$4:$5:$6"
            )
            : '';
        setCreateDate(formattedDate);
        setPercentage(response.nivel);
        setSelectedSilo(id);

        // Exibir alerta se o nível estiver abaixo de 50%
        if (response.nivel < 70) {
            Alert.alert(
                "Atenção!",
                `O nível do Silo ${id} está baixo (${response.nivel}%).`,
                [{ text: "OK", onPress: () => console.log("Alerta fechado.") }]
            );
        }
    };

    const handleGetAllSilos = async () => {
        const response = await getAllSilos();
        setAllSilos(response);
    };

    useEffect(() => {
        handleGetAllSilos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Selecione um silo para visualizar o nível de ração:</Text>

            <FlatList
                data={allSilos}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.siloButton}
                        onPress={() => handleGetSiloInfo(item.cd_silo)}
                    >
                        <Text style={styles.siloButtonText}>{`Silo ${item.cd_silo}`}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => String(item.cd_silo)}
                contentContainerStyle={styles.siloList}
            />

            {selectedSilo && (
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardHeader}>Silo {selectedSilo}</Text>
                        <Text style={styles.cardSubheader}>Nível Atual:</Text>
                        <Text style={styles.cardPercentage}>{percentage}%</Text>
                        <Text style={styles.cardDate}>
                            Salvo em: {createDate
                                ? `${new Date(createDate).toLocaleDateString("pt-BR")} às ${new Date(createDate).toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })}`
                                : "Data não disponível"}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    siloList: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    siloButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 6,
        height: 40,
        paddingHorizontal: 19,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    siloButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContainer: {
        flex: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 70,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        alignItems: 'center',
    },
    cardDate: {
        fontSize: 14,
        color: '#777',
        marginTop: 10,
    },
    cardHeader: {
        fontSize: 22,
        fontWeight: '700',
        color: '#4CAF50',
        marginBottom: 20,
    },
    cardSubheader: {
        fontSize: 16,
        color: '#555',
    },
    cardPercentage: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default DashboardPage;
