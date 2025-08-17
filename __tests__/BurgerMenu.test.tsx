import {screen, render, fireEvent, waitFor, within} from "@testing-library/react"
import "@testing-library/jest-dom"
import BurgerMenu from "../components/Header/BurgerMenu"
import { navigationLinks } from "@/data/navigation";

test("should open and close menu onClick", async () => {
    render(<BurgerMenu />);

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
});