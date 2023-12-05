const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'add':
      return { ...state, count: state.count + (action.payload || 0) };
    default:
      throw new Error();
  }
};

export default counterReducer;