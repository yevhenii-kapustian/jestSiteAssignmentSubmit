import {screen, render, fireEvent, waitFor, within} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../components/Header"
import { navigationLinks } from "@/data/navigation"

describe("testing the whole component", () => {
    test("is logo display", () => {
        render(<Header/>)

        const logoText = screen.getByText("Castaway")
        expect(logoText).toBeInTheDocument()
    })

    test("if navbar with desktop", () => {
        render(<Header/>)

        expect(screen.getAllByRole("link").length).toBe(4)

        const navigationDesktop = screen.getByTestId("navigationDesktop")
        expect(navigationDesktop).toHaveClass("max-sm:hidden")
    })

    test("if navbar with mobile", async () => {
        render(<Header/>)

        const burgerWrapper = screen.getByTestId("burgerWrapper");
        expect(burgerWrapper).toHaveClass("hidden max-sm:block");

        expect(within(burgerWrapper).queryByRole("link")).not.toBeInTheDocument();

        const openBurgerButton = screen.getByRole("button", { name: /openButton/i });
        fireEvent.click(openBurgerButton);

        const menuList = within(burgerWrapper).getByRole("list");
        const links = within(menuList).getAllByRole("link");
        expect(links.length).toBe(navigationLinks.length); 

        const closeBurgerButton = screen.getByRole("button", { name: /closeButton/i });
        fireEvent.click(closeBurgerButton);

        await waitFor(() => {
            expect(within(burgerWrapper).queryByRole("list")).not.toBeInTheDocument();
        });
    })

})