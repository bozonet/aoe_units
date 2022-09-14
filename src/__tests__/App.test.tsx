import { render } from "@testing-library/react";
import App  from "../App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/store";


describe("App", () => {
  it("renders without crashing", () => {
    render(<App />, {
      wrapper: ({ children }) => (
        <Provider store={store}>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </Provider>
      ),
    });
  });
});
