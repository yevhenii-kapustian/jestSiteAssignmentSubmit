import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Form from "../components/Form"

describe("Form Component", () => {
    test("renders title, inputs and button", () => {
        render(<Form/>)

        expect(screen.getByText("Email Newsletter")).toBeInTheDocument()
        expect(screen.getByRole("heading", {level: 5})).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
    })

    it("should allow typing in inputs", () => {
        render(<Form/>)

        const nameInput = screen.getByPlaceholderText("Name") as HTMLInputElement
        const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement

        fireEvent.change(nameInput, {target: {value: "Yevhenii"}})
        fireEvent.change(emailInput, {target: {value: "ke1vin.kapustian@gmail.com"}})

        expect(nameInput.value).toBe("Yevhenii")
        expect(emailInput.value).toBe("ke1vin.kapustian@gmail.com")
    })

    test("doesn't submit if inputs are empty", () => {
        render(<Form/>)

        const buttonSubmit = screen.getByRole("button", {name: /submit/i})
        fireEvent.click(buttonSubmit)

        expect(screen.getByPlaceholderText("Name") as HTMLInputElement).toHaveValue("")
        expect(screen.getByPlaceholderText("Email") as HTMLInputElement).toHaveValue("")
    })

    it("should saves form and clears inputs", () => {
        render(<Form/>)

        const nameInput = screen.getByPlaceholderText("Name") as HTMLInputElement
        const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement
        const buttonSubmit = screen.getByRole("button", {name: /submit/i})

        fireEvent.change(nameInput, {target: {value: "Yevhenii"}})
        fireEvent.change(emailInput, {target: {value: "ke1vin.kapustian@gmail.com"}})
        fireEvent.click(buttonSubmit)
        
        expect(nameInput).toHaveValue("")
        expect(emailInput).toHaveValue("")
    })
})