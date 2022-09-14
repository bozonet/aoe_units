import { render, screen } from "@testing-library/react";
import Unit from "../../pages/Unit";
import { Provider } from "react-redux";
import Router from "react-router-dom";
import store from "../../store/store";


    //mock react-router-dom useParams unitId
    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
            unitId: "0",
        }),
       }));
       
describe("Unit", () => {
  it("Unit initalState", () => {
    render(<Unit />, {
        wrapper: ({ children }) => (
            <Provider store={store}>
                <Router.BrowserRouter>
                    {children}
                </Router.BrowserRouter>
            </Provider>
        ),
    });

    // nothing found
    const initialState = screen.getByText("Unit not found");
    expect(initialState).toBeInTheDocument();
  });


});

