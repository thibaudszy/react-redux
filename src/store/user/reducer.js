const initialState = {
  id: 1,
  name: "Thibaud",
};

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
