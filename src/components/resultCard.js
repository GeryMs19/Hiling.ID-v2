import React from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () =>{
    return(
        <View className="flex-1 pb-20">
            <View className="w-11/12 flex-col bg-white self-center my-6 p-3">
                <View className="flex-row py-3 items-center justify-around">
                    <Text>(LKeberangkatan)</Text>
                    <Text>-</Text>
                    <Text>(LTujuan)</Text>
                </View>
                <View className="flex-row py-3 items-center justify-around">
                    <MaterialIcons name="airplanemode-active" size={24} color="green" />
                    <Text className="text-lg font-medium">Majapahit Air</Text>
                    <Text className="text-blue-800">(Tanggal Keberangkatan)</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;