import { compose } from 'recompose';
import { connect } from 'react-redux';

import MainView from './MainView';
import { MainState, generateRandomDigits } from './MainState'

export default compose(
  connect(
    (state: {main: MainState}) => ({
      randomDigits: state.main.randomDigits,
      randomDigitsLog: state.main.randomDigitsLog,
    }),
    dispatch => ({
      generateRandomDigits: () => dispatch(generateRandomDigits()),
    }),
  ),
)(MainView);
