import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function Details({navigation}) {
  const [name1, setName1] = useState('');
  const [unit, setUnit] = useState('');
  const [unit2, setUnit2] = useState('');
  const [Output, setOutput] = useState();
  var converted = '';

  const unitarry = [
    'Select from Unit',
    'Kilometre',
    'Meter',
    'Centimeter',
    'Millimetre',
    'Foot',
    'Inch',
  ];
  const unitarry1 = [
    'Select to Unit',
    'Kilometre',
    'Meter',
    'Centimeter',
    'Millimetre',
    'Foot',
    'Inch',
  ];

  const onPressFun = () => {
    if (unit == 'Kilometre') {
      var mulVal = 1;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }

    //meter
    if (unit == 'Meter') {
      var mulval = 1 / 1000;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }

    //Centimeter
    if (unit == 'Centimeter') {
      var mulval = 1 / 100000;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }
    //Millimetre
    if (unit == 'Millimetre') {
      var mulval = 1 / 1000000;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }
    //Foot
    if (unit == 'Foot') {
      var mulval = 1 / 3281;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }
    //Foot
    if (unit == 'Inch') {
      var mulval = 1 / 39370;
      if (unit2 == 'Kilometre') {
        converted = name1 * 1 * mulval;
      }
      if (unit2 == 'Meter') {
        converted = name1 * 1000 * mulval;
      }
      if (unit2 == 'Centimeter') {
        converted = name1 * 100000 * mulval;
      }
      if (unit2 == 'Millimetre') {
        converted = name1 * 1000000 * mulval;
      }
      if (unit2 == 'Foot') {
        converted = name1 * 3280.84 * mulval;
      }
      if (unit2 == 'Inch') {
        converted = name1 * 39370.1 * mulval;
      }
    }
    setOutput(converted.toFixed(4));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text style={styles.textedit}>Length Unit Converter App</Text>
      <TextInput
        style={styles.input}
        placeholder="enter value"
        keyboardType="numeric"
        onChangeText={Value => setName1(Value)}
      />

      <Text numberOfLines={3} style={{color: 'black'}}>
        Convert from
      </Text>
      <Picker
        style={{height: 40, width: 150}}
        selectedValue={unit}
        onValueChange={(itemValue, itemPosition) => setUnit(itemValue)}>
        {unitarry ? (
          unitarry.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))
        ) : (
          <Picker.Item label={'no data'} value={'no data'} />
        )}
      </Picker>

      <Text numberOfLines={3} style={{color: 'black'}}>
        Convert To
      </Text>
      <Picker
        style={{height: 40, width: 150, marginBottom: 20}}
        selectedValue={unit2}
        onValueChange={(itemValue, itemPosition) => setUnit2(itemValue)}>
        {unitarry1 ? (
          unitarry1.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))
        ) : (
          <Picker.Item label={'no data'} value={'no data'} />
        )}
      </Picker>

      <Button title="Convert" onPress={onPressFun}></Button>

      <Text style={{marginTop: 30, color: 'black'}} numberOfLines={3}>
        Converted Value
      </Text>
      <Text style={styles.outputcss}>{Output}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textedit: {
    marginBottom: 30,
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 20,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 250,
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
  },
  outputcss: {
    width: '50%',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderColor: 'black',
    borderRadius: 40,
  },
});

export default Details;
