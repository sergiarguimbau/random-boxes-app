import 'react-native';
import React from 'react';
import App from '../App';
import MainView from '../src/modules/main/MainView';
import { BoxNumber, RoundButton } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App renders correctly', () => {
  renderer.create(<App />);
});

it('MainView renders correctly', () => {
  renderer.create(<MainView />);
});

it('BoxNumber component renders correctly', () => {
  renderer.create(<BoxNumber number={0}/>);
});

it('RoundButton component renders correctly', () => {
  renderer.create(<RoundButton title={'Test'}/>);
});