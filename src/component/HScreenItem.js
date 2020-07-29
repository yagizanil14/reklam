import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { QuestionButton } from '.'

const HScreenItem = props => {

    const [ansIndex, setAnsIndex] = useState(0)
    const [dataLenght, setDataLenght] = useState([...props.itemData.item])
    const [right, setRight] = useState(1)
    const [randomNumbers, setRandomNumbers] = useState([])
    const [total, setTotal] = useState({trues:0, falses:0})

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
            if (right > 0) {
                setRight(0)
                if(correct !== true){
                    const totals = {...total}
                    totals.falses = totals.falses +1
                    setTotal(totals)
                    console.log(total)
                }else{
                    const totals = {...total}
                    totals.trues = totals.trues + 1
                    setTotal(totals)
                    console.log(total)
                }
                setTimeout(() => {
                    getRandom()
                    setAnsIndex(ansIndex + 1)
                    setRight(1)
                }, 2500)
            }
        } else {
            if (right > 0) {
                setRight(0)
                if(correct !== true){
                    const totals = {...total}
                    totals.falses = totals.falses +1
                    setTotal(totals)
                    console.log(total)
                }else{
                    const totals = {...total}
                    totals.trues = totals.trues + 1
                    setTotal(totals)
                    console.log(total)
                }
                setTimeout(() => {
                    props.prop.navigation.navigate("FinishScreen",{totalTrue:total})
                }, 2500)
            }
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
                <View>
                    {props.itemData.item[ansIndex].question !== undefined ?
                        <Text>{props.itemData.item[ansIndex].question}</Text> :
                        <Image style={{width:300, height: 150}} source={{ uri: props.itemData.item[ansIndex].imgQuestion }} />}
                </View>
                <View >
                    {randomNumbers.length > 0 ? randomNumbers.map((e, index) => {
                        return (
                            <View key={index}>
                                <QuestionButton
                                    setRig={right}
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