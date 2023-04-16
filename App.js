import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routers from "./src";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
