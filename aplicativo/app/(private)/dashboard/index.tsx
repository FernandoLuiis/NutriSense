/*import {Text} from "react-native";

const DashboardPage = () => {
    return <>
        <Text>Page</Text>
    </>
}

export default DashboardPage;*/

import React, {useEffect, useState} from 'react';
import {View, Button, Dimensions, TextInput} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import {getNivelRacao} from "@/service/silos";
import {api} from "@/axios";

const DashboardPage = () => {
    const [percentage, setPercentage] = useState(0);

    const handleInputChange = async () => {
        await handleGetNivelRacao()
    };

    const handleGetNivelRacao = async () => {
        const reponse = await getNivelRacao();
        await api.post("/nivel-racao", {
            umidade: 2.0,
            nivel: 3.0,
            codigo_silo: 1
        })
        setPercentage(reponse.porcentagem)
    }

    useEffect(()=>{

        handleGetNivelRacao()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <BarChart
                data={{
                    labels: ['SILO'],
                    datasets: [
                        {
                            data: [percentage],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 50}
                height={220}
                yAxisSuffix="%"
                fromZero
                showValuesOnTopOfBars
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForLabels: {
                        fontSize: 18,
                    },
                }}
                verticalLabelRotation={30}
            />
            <Button title="Atualizar" onPress={handleGetNivelRacao} />
            <Button title="Alerta" onPress={(handleInputChange)}/>
        </View>
    );
};

export default DashboardPage;
