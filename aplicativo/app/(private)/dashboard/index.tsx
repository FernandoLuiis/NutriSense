/*import {Text} from "react-native";

const DashboardPage = () => {
    return <>
        <Text>Page</Text>
    </>
}

export default DashboardPage;*/

import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const DashboardPage = () => {
    const [percentage, setPercentage] = useState(50);

    const handleInputChange = (value) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
            setPercentage(parsedValue);
        }else{
            router.push('/(private)/Alert')
        }
    };

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

            <TextInput
                style={{
                    marginTop: 20,
                    height: 40,
                    width: 200,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    textAlign: 'center',
                }}
                keyboardType="numeric"
                placeholder="Informe a porcentagem"
                onChangeText={handleInputChange}
            />

            <Button title="Atualizar" onPress={() => {}} />
            <Button title="Alerta" onPress={(handleInputChange)}/>
        </View>
    );
};

export default DashboardPage;
