import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../../store/store";

const PageWrapper = ({ children }) => {

  const {persistor} = wrapper.getState();
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default PageWrapper;
