import { screen, render, within } from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "../components/Footer";
import { navigationLinks } from "@/data/navigation";
import { musicPlatforms } from "@/data/musicPlatforms";

test("renders Footer component with logo, social media, navigation & music platforms", () => {
    render(<Footer/>)

    expect(screen.getByText("Castaway")).toBeInTheDocument()
    expect(screen.getByRole("link", {name: /instagram/i})).toBeInTheDocument()
    expect(screen.getByRole("link", {name: /twitter/i})).toBeInTheDocument()
    expect(screen.getByRole("link", {name: /facebook/i})).toBeInTheDocument()
    
    navigationLinks.forEach(({name, link}) => {
        const linkElement = screen.getByRole("link", {name})
        expect(linkElement).toHaveAttribute("href", link)
    })

    const platformsContainer = screen.getByTestId("music-platforms");
    const platformLinks = within(platformsContainer).getAllByRole("link");
    expect(platformLinks).toHaveLength(musicPlatforms.length);

    platformLinks.forEach((link, index) => {
        expect(link).toHaveAttribute("href", musicPlatforms[index].href);

        const img = within(link).getByRole("img");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("alt", "platforms");
    });
})