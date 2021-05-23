import { AnyAction } from 'redux'

// Initial state
export type MainState = {
  readonly randomDigits: [number, number, number]; // tuple
  readonly randomDigitsLog: Array<[number, number, number]> // array of tuples
};

const initialState: MainState = {
  randomDigits: [NaN, NaN, NaN],
  randomDigitsLog: [],
};

// Actions
const GENERATE_RANDOM_DIGITS = 'MainState/GENERATE_RANDOM_DIGITS';

// Action creators
export function generateRandomDigits(): AnyAction {
  // New tuple random digits
  const randomDigits = [getRandomDigit(), getRandomDigit(), getRandomDigit()];
  return {
      type: GENERATE_RANDOM_DIGITS,
      payload: randomDigits,
  };
}

// Helper functions
// Returns random number between 0 - 9
function getRandomDigit(): number {
  const MAX = 10;
  const randomDigit = Math.floor(Math.random() * MAX); // between {0, MAX-1}
  return randomDigit;
}

// Reducer
export default function MainReducer(state: MainState = initialState, action: AnyAction) {
  switch (action.type) {
    case GENERATE_RANDOM_DIGITS:
      return Object.assign({}, state, {
        randomDigits: action.payload,
        randomDigitsLog: [action.payload, ...state.randomDigitsLog],
      });
    default:
      return state;
  }
}