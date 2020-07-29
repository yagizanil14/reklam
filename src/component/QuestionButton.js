import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import Context from '../context/store';

const QuestionButton = props => {
    const {state, dispatch} = useContext(Context);
    return (
        <View >
            <TouchableOpacity
                style={
                    state.right === 0 ?
                        { backgroundColor: props.buttonData.correct === true ? "blue" : "red" }
                        : null
                }
                onPress={()=>props.setInd(props.buttonData.correct)} >
                    {props.buttonData.Text !== undefined ? 
                    <Text>
                    {props.buttonData.Text}
                    </Text>:
                    <View>
                        {console.log(props.buttonData.img)}
                        <Image style={{width:200, height: 100}} source={{uri:props.buttonData.img}} />
                    </View>
                }
                
            </TouchableOpacity>
        </View>
    )
}
export { QuestionButton }

