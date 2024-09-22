import React, { createContext, useReducer, ReactNode } from "react";

type authState = {
  user: string | null;
};

type authAction = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

interface authContextInterface {
  state: authState;
  dispatch: (action: authAction) => void;
}

export const AuthContext = createContext<authContextInterface | undefined>(
  undefined
);

export const AuthReducer = (
  state: authState,
  action: authAction
): authState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
