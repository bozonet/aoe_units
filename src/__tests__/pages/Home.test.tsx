import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";


describe("Home", () => {
  it("Home renders with content", () => {
    render(<Home />, {
wrapper: ({ children }) => (
            <Provider store={store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        ),
    });
    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Units")).toBeInTheDocument();
    expect(screen.getByAltText("hero")).toBeInTheDocument();
    });
});
