import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { QuestionButton } from './'

const HScreenItem = props => {

    const [ansIndex, setAnsIndex] = useState(0)
    const [dataLenght, setDataLenght] = useState([...props.itemData.item])
    const [right, setRight] = useState(1)
    const [randomNumbers, setRandomNumbers] = useState([])

    useEffect(() => {
        getRandom()
    }, [])

    const getRandom = () => {
        const RandomNumber = []
        for (let i = 0; RandomNumber.length <= props.itemData.item[ansIndex].cevap.length - 1; i + 1) {
            const randomNumber = Math.floor(Math.random() * Math.floor(props.itemData.item[ansIndex].cevap.length))
            if (RandomNumber.indexOf(randomNumber) === -1) {
                RandomNumber.push(randomNumber)
            }
        }
        setRandomNumbers(RandomNumber)
    }

    const setIndex = () => {
        if (ansIndex < dataLenght.length - 1) {
            if (right > 0) {
                setRight(0)
                setTimeout(() => {
                    setAnsIndex(ansIndex + 1)
                    setRight(1)
                }, 2500)
                console.log("bastı")
            }
        } else {
            // Bitiş ekranına git
            setAnsIndex(0)
        }
    }
    return (
        <View>
            <View style={{ flex: 1 }}>
                <Text >{props.itemData.item[ansIndex].question}</Text>
                <View >
                    {randomNumbers.length > 0 ? randomNumbers.map((e,index) => {
                        return (
                            <View key={index}>
                                {console.log(props.itemData.item[ansIndex].cevap[e])}
                                <QuestionButton setRig={right} setInd={setIndex} buttonData={props.itemData.item[ansIndex].cevap[e]} />
                            </View>
                        )
                    }) : null}
                </View>
            </View>
        </View>
    )
}
export {HScreenItem} 