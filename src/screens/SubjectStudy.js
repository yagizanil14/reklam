import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const SubjectStudy = props => {
    const getSubject = () => {
        props.navigation.navigate("SubjectScreen")
    }
    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={getSubject}>
                    <Text>Konu 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getSubject}>
                <Text>Konu 2</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getSubject}>
                <Text>Konu 3</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={getSubject}>
                <Text>Konu 4</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export {SubjectStudy}