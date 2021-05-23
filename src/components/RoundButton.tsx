import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export type RoundButtonProps = {
  title: string,
  color?: string,
  onPress?: () => void;
};

const RoundButton = (props: RoundButtonProps) => { 
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.titleContainer, {backgroundColor: props.color ? props.color : '#000000'}]}>
        <Text style={styles.titleText}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 22,
    textTransform: 'uppercase',
  }
});

export default RoundButton;