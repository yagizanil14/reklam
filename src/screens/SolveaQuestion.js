import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const SolveaQuestion = props => {
    const getTest = () => {
        props.navigation.navigate("HomeScreen")
    }
    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={getTest}>
                    <Text>Test 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTest}>
                <Text>Test 2</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTest}>
                <Text>Test 3</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getTest}>
                <Text>Test 4</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export {SolveaQuestion}