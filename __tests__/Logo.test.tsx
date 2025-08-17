import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Logo from "../components/Logo"

test("renders the logo with text", () => {
    render(<Logo/>)
    
    const logoText = screen.getByText("Castaway")
    expect(logoText).toBeInTheDocument()
})