import { render, screen, within } from "@testing-library/react"
import "@testing-library/jest-dom"
import MusicPlatforms from "../components/MusicPlatforms"
import { musicPlatforms } from "@/data/musicPlatforms"

test("render music platforms", () => {
    render(<MusicPlatforms/>)

    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(musicPlatforms.length)

    links.forEach((link, index) => {
        expect(link).toHaveAttribute("href", musicPlatforms[index].href)

        const img = within(link).getByRole("img")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("alt", "platforms")
    })

})