import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export type BoxNumberProps = {
  number?: number,
};

const BoxNumber = (props: BoxNumberProps) => { 
  return (
    <View style={styles.boxContainer}>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{props.number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 4,
    padding: 16,
    marginHorizontal: 4,
    width: '25%',
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 28,
  }
});

export default BoxNumber;