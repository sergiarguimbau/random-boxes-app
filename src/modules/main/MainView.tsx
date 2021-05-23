import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { BoxNumber, RoundButton } from '../../components'

export type MainProps = {
  children?: React.ReactNode;
  randomDigits?: [number, number, number],
  generateRandomDigits?: () => void;
};

const MainView = (props: MainProps) => { 

  useEffect(() => {
    // Generate random digits at startup
    props.generateRandomDigits?.();
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle='dark-content' />
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{'Random Boxes'}</Text>
        </View>
        <View style={styles.boxesContainer}>
          <BoxNumber number={props.randomDigits?.[0]} />
          <BoxNumber number={props.randomDigits?.[1]} />
          <BoxNumber number={props.randomDigits?.[2]} />
        </View>
        <View style={styles.buttonGenerateContainer}>
          <RoundButton title={'Generate'} onPress={() => props.generateRandomDigits?.()} />
        </View>
        <View style={styles.buttonLogContainer}>
          <RoundButton title={'Show Log'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  },
  screenContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  titleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 28,
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGenerateContainer: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  buttonLogContainer: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'flex-end',
  }
});

export default MainView;