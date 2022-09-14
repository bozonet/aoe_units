import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";



describe("Header", () => {
  it("Header component renders with content", () => {
    render(<Header pageTitle="Test Title"/>, {
        wrapper: ({ children }) => (
            <BrowserRouter>
                {children}
            </BrowserRouter>
        )});
        
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    //link with href="/" and text "Home"
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    //link with href="/units" and text "Units"
    expect(screen.getByRole("link", { name: "Units" })).toHaveAttribute("href", "/units");

  });
});
