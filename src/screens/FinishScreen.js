import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const FinishScreen = props => {
    const totalTrue = props.route.params.totalTrue
    return(
        <View>
            <Text>Toplam Doğru: {totalTrue.trues}</Text>
            <Text>Toplam Yanlış: {totalTrue.falses}</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("HomeScreen")}}>
                <Text>Geri</Text>
            </TouchableOpacity>
        </View>
    )
}
export {FinishScreen}