import React,{useContext} from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import Context from '../context/store';

const FinishScreen = props => {
    const {state, dispatch} = useContext(Context);
    const goBack = () => {
        dispatch({type:"TOTAL_RESET"})
        props.navigation.navigate("HomeScreen")
    }
    return(
        <View>
            <Text>Toplam Doğru: {state.total.trues}</Text>
            <Text>Toplam Yanlış: {state.total.falses}</Text>
            <TouchableOpacity onPress={goBack}>
                <Text>Geri</Text>
            </TouchableOpacity>
        </View>
    )
}
export {FinishScreen}