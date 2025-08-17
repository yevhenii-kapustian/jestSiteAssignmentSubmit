import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import WelcomeSection from "../components/WelcomeSection"
import { musicPlatforms } from "@/data/musicPlatforms"

test("renders WelcomeSection with image, heading, and music platforms", () => {
    render(<WelcomeSection/>)

    const image = screen.getByTestId("target-welcomeImage") as HTMLImageElement
    expect(image.alt).toContain("welcomeImage")

    const title = screen.getByRole("heading", {level: 1})
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent("Take your podcast to the next level")

    const musicPlatformsLink = screen.getAllByRole("link")
    expect(musicPlatformsLink).toHaveLength(musicPlatforms.length)

    musicPlatformsLink.forEach(link => {
        expect(link).toBeInTheDocument()
    })
})