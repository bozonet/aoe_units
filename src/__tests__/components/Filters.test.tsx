import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import Filters from "../../components/Filters";
import { act } from "react-dom/test-utils";
import { click } from "@testing-library/user-event/dist/click";

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


describe("Costs Filters", () => {

    it("Costs Filters Initial State renders without crashing", () => {
        render(<Filters />, {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </Provider>
            ),
        });

        //get HTMl element control  
        const title = screen.getByText("Costs");
        expect(title).toBeInTheDocument();

        //Wood Checkbox should be unchecked
        const woodCheckbox = screen.getByLabelText("Wood");
        expect(woodCheckbox).not.toBeChecked();

        //Food Checkbox should be unchecked
        const foodCheckbox = screen.getByLabelText("Food");
        expect(foodCheckbox).not.toBeChecked();

        //Gold Checkbox should be unchecked
        const goldCheckbox = screen.getByLabelText("Gold");
        expect(goldCheckbox).not.toBeChecked();

    });

    it("Costs Filters Wood Checkbox", () => {
        render(<Filters />, {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </Provider>
            ),
        });

        //Wood Checkbox should be unchecked
        const woodCheckbox = screen.getByLabelText("Wood");
        expect(woodCheckbox).not.toBeChecked();

        //when click on "Wood" checkbox, it should be checked
        act(() => {
            click(woodCheckbox);
        });
        expect(woodCheckbox).toBeChecked();

        //check store state for wood
        const state = store.getState();
        //"Wood" should be in the state
        expect(state.filter.costFilters.filters[0]).toBe("Wood");

        //when click on "Wood" checkbox, it should be unchecked
        act(() => {
            click(woodCheckbox);
        });
        expect(woodCheckbox).not.toBeChecked();

        //check store state for wood
        const state2 = store.getState();
        //"Wood" should not be in the state
        expect(state2.filter.costFilters.filters[0]).not.toBe("Wood");

    });

});
