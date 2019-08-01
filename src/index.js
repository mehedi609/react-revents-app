import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./app/store/configureStore";
import { Provider } from "react-redux";

/*const rootEl = document.getElementById("root");
let render = () => ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept("./app/layout/App", () => setTimeout(render));
}

render();*/

const store = configureStore();

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
