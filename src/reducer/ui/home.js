export const initState = {
  number: 0,
};

export default function homeReducer(state = initState, action) {
  switch (action.type) {
    case 'INCREASE_1':
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
}
