type initialStateType = {
  greet: boolean;
};

type actionType = {
  type: string;
  payload: { value: any };
};

export const initialState: initialStateType = {
  greet: false,
};

const AppReducer = (state: initialStateType, { type, payload }: actionType) => {
  switch (type) {
    case 'toggleGreeting':
      return { ...state, greet: payload.value };
    default:
      throw new Error();
  }
};

export default AppReducer;
