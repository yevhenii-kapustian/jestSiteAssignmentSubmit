import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import EpisodeItemsDetails from "../components/EpisodeItemsDetails"

it("renders Episode Items Details details including one text", () => {
    render(<EpisodeItemsDetails/>)

    expect(screen.getByText(/Here you can find more information/i))
})