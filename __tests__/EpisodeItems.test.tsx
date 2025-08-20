import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import EpisodeItems from "../components/LatestEpisodesSection/EpisodeItems"
import { EpisodesType } from "@/types/episodesType"

it("should display all the items in the component", () => {
    const mockEpisodeItems: EpisodesType = {
        image: "/image.png",
        episodeNumber: 1,
        title: "title",
        description: "description"
    }
    render(<EpisodeItems {...mockEpisodeItems}/>)

    const image = screen.getByTestId("target-itemImage") as HTMLImageElement
    expect(image.alt).toBe(mockEpisodeItems.title)

    expect(screen.getByText(`Episode ${mockEpisodeItems.episodeNumber}`)).toBeInTheDocument()

    const episodeTitle = screen.getByRole("heading")
    expect(episodeTitle).toHaveTextContent(mockEpisodeItems.title)
    expect(episodeTitle).toBeInTheDocument()

    expect(screen.getByText(mockEpisodeItems.description)).toBeInTheDocument()

    const button = screen.getByRole("button", {name: "View Episode Details"})
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByText(/Here you can find more information/i)).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.queryByText(/Here you can find more information/i)).not.toBeInTheDocument()

})