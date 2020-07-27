import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const QuestionButton = props => {
    return (
        <View >
            <TouchableOpacity
                style={
                    props.setRig === 0 ?
                        { backgroundColor: props.buttonData.correct === true ? "blue" : "red" }
                        : null
                }
                onPress={props.setInd} >
                <Text>
                    {props.buttonData.Text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export { QuestionButton }

