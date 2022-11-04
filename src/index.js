import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import TodoReducer from "./store/TodoReducer";
import App from "./App";
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(TodoReducer, applyMiddleware(thunk));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
