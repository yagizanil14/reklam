import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

HomeScreen = () => {
  DATA = [
    {
      id: 1,
      question: 'turkiyenin baskenti neresidir?',
      cevap: [
        {Text: 'Ankara', correct: true},
        {Text: 'Adana', correct: false},
        {Text: 'Amasya', correct: false},
        {Text: 'Artvin', correct: false},
      ],
    },
    {
      id: 2,
      question: 'turkiyenin baskenti neresidir?',
      cevap: [
        {Text: 'Ankara', correct: true},
        {Text: 'amasya', correct: false},
        {Text: 'istanbul', correct: false},
        {Text: 'antalya', correct: false},
      ],
    },
    {
      id: 3,
      question: 'turkiyenin baskenti neresidir?',
      cevap: [
        {Text: 'Ankara', correct: true},
        {Text: 'amasya', correct: false},
        {Text: 'istanbul', correct: false},
        {Text: 'antalya', correct: false},
      ],
    },
  ];

  const queries = DATA.map(query => {
      return query
  })
  const sorgular = queries.map(sorgu => {
      return sorgu
  })

  useEffect(() => {
    console.log(sorgular);
  }, []);

  clicked = correct => {};

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.row}>
          {sorgular.map((item) => {
            <>
              <Text style={styles.textBaslik}>{item.question}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.yazi}>{item.cevap.Text}</Text>
              </TouchableOpacity>
            </>;
          })}
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBaslik: {
    fontSize: 20,
    marginBottom: 50,
  },
  head: {
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: 30,
    backgroundColor: '#000',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yazi: {
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  aktif: {
    width: '40%',
    height: 30,
    backgroundColor: 'blue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    width: '40%',
    height: 30,
    backgroundColor: 'red',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
