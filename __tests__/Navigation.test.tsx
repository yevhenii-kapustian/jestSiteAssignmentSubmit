import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Navigation from "../components/Header/Navigation"
import { navigationLinks } from "@/data/navigation"


test("should render a link with the provided name and href", () => {
    render(<>
        {navigationLinks.map(({name, link}) => (
            <Navigation key={link} name={name} link={link} />
        ))}
    </>)

    const linkElement = screen.getAllByRole("link")
    expect(linkElement).toHaveLength(navigationLinks.length)

    navigationLinks.forEach(({name, link}) => {
        const linkElement = screen.getByRole("link", {name})
        expect(linkElement).toHaveAttribute("href", link)
    })

})