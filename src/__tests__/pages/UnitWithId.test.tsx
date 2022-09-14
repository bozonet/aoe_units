import { render, screen } from "@testing-library/react";
import Unit from "../../pages/Unit";
import { Provider } from "react-redux";
import Router from "react-router-dom";
import store from "../../store/store";


    //mock react-router-dom useParams unitId
    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
            unitId: "1",
        }),
       }));
       
describe("Unit", () => {
  it("Unit with Id", () => {
    render(<Unit />, {
        wrapper: ({ children }) => (
            <Provider store={store}>
                <Router.BrowserRouter>
                    {children}
                </Router.BrowserRouter>
            </Provider>
        ),
    });

    //page title
    const pageTitle = screen.getByText("Unit Detail");
    expect(pageTitle).toBeInTheDocument();

    // Archer in document 2 times
    const archer = screen.getAllByText("Archer");
    expect(archer).toHaveLength(2);

    //Last field
    const lastField = screen.getByText("ACCURACY");
    expect(lastField).toBeInTheDocument();


  });


});

