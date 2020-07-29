import React, { useState, useEffect, useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { QuestionButton } from '.'
import Context from '../context/store';

const HScreenItem = props => {

    const [ansIndex, setAnsIndex] = useState(0)
    const [dataLenght, setDataLenght] = useState([...props.itemData.item])
    const [randomNumbers, setRandomNumbers] = useState([])
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        getRandom()
    }, [])

    const getRandom = () => {
        const RandomNumber = []
        if (props.itemData.item[ansIndex].cevap !== undefined) {
            for (let i = 0; RandomNumber.length <= props.itemData.item[ansIndex].cevap.length - 1; i + 1) {
                const randomNumber = Math.floor(Math.random() * Math.floor(props.itemData.item[ansIndex].cevap.length))
                if (RandomNumber.indexOf(randomNumber) === -1) {
                    RandomNumber.push(randomNumber)
                }
            }
            setRandomNumbers(RandomNumber)
        } else {
            for (let i = 0; RandomNumber.length <= props.itemData.item[ansIndex].imgCevap.length - 1; i + 1) {
                const randomNumber = Math.floor(Math.random() * Math.floor(props.itemData.item[ansIndex].imgCevap.length))
                if (RandomNumber.indexOf(randomNumber) === -1) {
                    RandomNumber.push(randomNumber)
                }
            }
            setRandomNumbers(RandomNumber)
        }
    }

    const setIndex = correct => {
        if (ansIndex < dataLenght.length - 1) {
            if (state.right > 0) {
                dispatch({ type: "RİGHT_DOWN" })
                elseİf(correct)
                setTimeout(() => {
                    getRandom()
                    setAnsIndex(ansIndex + 1)
                    dispatch({ type: "RİGHT_PLUS" })
                }, 2500)
            }
        } else {
            if (state.right > 0) {
                dispatch({ type: "RİGHT_DOWN" })
                elseİf(correct)
                setTimeout(() => {
                    props.prop.navigation.navigate("FinishScreen")
                    getRandom()
                    setAnsIndex(0)
                    dispatch({ type: "RİGHT_PLUS" })
                }, 2500)
            }
        }
    }

    const elseİf = correct => {
        if (correct !== true) {
            dispatch({ type: "TOTAL_FALSES" })
        } else {
            dispatch({ type: "TOTAL_TRUES" })
        }
    }

    const backQuestion = () => {
        if (ansIndex > 0) {
            setAnsIndex(ansIndex - 1)
        }
    }

    const nextQuestion = () => {
        if (ansIndex < dataLenght.length - 1) {
            setAnsIndex(ansIndex + 1)
        }
    }
    return (
        <View>
            <View style={{ flex: 1 }}>
                {console.log(state)}
                <View>
                    {props.itemData.item[ansIndex].question !== undefined ?
                        <Text>{props.itemData.item[ansIndex].question}</Text> :
                        <View>
                            {props.itemData.item[ansIndex].imgQuestionText !== undefined ?
                                <View>
                                    <Image style={{ width: 300, height: 150 }} source={{ uri: props.itemData.item[ansIndex].imgQuestion }} />
                                    <Text>{props.itemData.item[ansIndex].imgQuestionText}</Text>
                                </View>:
                                <Image style={{ width: 300, height: 150 }} source={{ uri: props.itemData.item[ansIndex].imgQuestion }} />
                            }
                        </View>
                    }
                </View>
                <View >
                    {randomNumbers.length > 0 ? randomNumbers.map((e, index) => {
                        return (
                            <View key={index}>
                                <QuestionButton
                                    setInd={setIndex}
                                    buttonData={
                                        props.itemData.item[ansIndex].cevap !== undefined ?
                                            props.itemData.item[ansIndex].cevap[e] :
                                            props.itemData.item[ansIndex].imgCevap[e]
                                    } />
                            </View>
                        )
                    }) : null}
                </View>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>

                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={backQuestion}>
                            <Text>Önceki</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Text>
                            {dataLenght.length}/{ansIndex + 1}
                        </Text>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={nextQuestion}>
                            <Text>Sonraki</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export { HScreenItem } 