import { render, screen } from "@testing-library/react";
import Units from "../../pages/Units";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import { act } from "react-dom/test-utils";

class ResizeObserver {
    observe() {
        // do nothing
    }
    unobserve() {
        // do nothing
    }
    disconnect() {
        // do nothing
    }
}

window.ResizeObserver = ResizeObserver;
export default ResizeObserver;



describe("Units", () => {
  it("Units render With Table", () => {
    render(<Units />, {
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


    //when table is rendered, it should have 5 columns
    const tableColumns = screen.getAllByRole("columnheader");
    expect(tableColumns.length).toBe(4);


    });

    it("Units filtered by Age and Cost", () => {
        render(<Units />, {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </Provider>
            ),
        });

        //Click on "Dark" label on age-filter class expect table age column to have "Dark" values
        const darkAge = screen.getByLabelText("Dark");
        //get Gold checkbox
        const goldAge = screen.getByLabelText("Gold");

       act(() => {
            darkAge.click();
            goldAge.click();
             //

       });
       //Gold checkbox should be checked
       expect(goldAge).toBeChecked();

       //All "Age" column values should be "Dark" and have 13 rows
         const tableAgeColumn = screen.getAllByRole("cell", { name: /Dark/i });
            expect(tableAgeColumn.length).toBe(13);
    });
});
