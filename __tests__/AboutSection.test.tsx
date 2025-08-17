import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import AboutSection from "../components/AboutSection"

test("renders AboutSectin with section name, image, title & discription", () => {
    render(<AboutSection/>)

    const image = screen.getByRole("img", {name: "Jacob Paulaner"}) as HTMLImageElement

    expect(image).toHaveAttribute("alt", "Jacob Paulaner")
    expect(screen.getByText("Meet your host")).toBeInTheDocument()
    expect(screen.getByRole("heading", {level: 5})).toBeInTheDocument()
    expect(screen.getByText(/Jacob has a background in audio engineering/i)).toBeInTheDocument()
    expect(screen.getByText(/he's here to help you level up/i)).toBeInTheDocument()
})