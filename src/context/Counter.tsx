import { createContext, useReducer } from "react";

export const CouterContext = createContext({} as any);
const initialState = { count: 0 };
const couterReducer = (state: any, action: any) => {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREASE":
      return { count: state.count + action.payload };
    default:
      state;
  }
};

export const CouterProvider = ({ children }: any) => {
  const [state, dishpatch] = useReducer(couterReducer, initialState);
  return (
    <CouterContext.Provider value={{ state, dishpatch }}>
      {children}
    </CouterContext.Provider>
  );
};

