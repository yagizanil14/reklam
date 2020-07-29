import React from 'react'
import { SafeAreaView, View, Text,TouchableOpacity } from 'react-native'

const TrafficSigns = props => {
    const getTrafficSigns = () => {
        props.navigation.navigate("TrafficScreen")
    }
    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={getTrafficSigns}>
                    <Text>TRAFFİC SİGNS 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTrafficSigns}>
                <Text>TRAFFİC SİGNS 2</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTrafficSigns}>
                <Text>TRAFFİC SİGNS 3</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTrafficSigns}>
                <Text>TRAFFİC SİGNS 4</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export {TrafficSigns}