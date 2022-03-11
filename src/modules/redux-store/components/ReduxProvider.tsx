import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "modules/redux-store";

export const ReduxProvider: React.FC = ({ children }) => {
  return <Provider store={configureStore()}>{children}</Provider>;
};
