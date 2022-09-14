import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import FilteredUnits from "../../components/FilteredUnits";

describe("Filtered Units Table", () => {
    
  it("Filtered Units Initial State renders without crashing", () => {
    render(<FilteredUnits />, {
        wrapper: ({ children }) => (
            <Provider store={store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        ),
    });

    //get HTMl element control  
    const tableTitle = screen.getByText("Filtered Units");
    expect(tableTitle).toBeInTheDocument();

    //when table is rendered, it should have 4 columns
    const tableColumns = screen.getAllByRole("columnheader");
    expect(tableColumns.length).toBe(5);

    //when table is rendered, it should have 105 rows with headings
    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toBe(105);

    //"Elite Woad Raider" should be in the table
    const eliteWoadRaider = screen.getByText("Elite Woad Raider");
    expect(eliteWoadRaider).toBeInTheDocument();

    });


});
