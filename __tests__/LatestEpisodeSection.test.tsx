import {screen, render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import LatestEpisodeSection from "../components/LatestEpisodesSection"
import { episodes } from "@/data/episodes"

describe("test Latest Episode functionality", () => {
    it("renders section title and toggles episodes list when the button is clicked", () => {
        render(<LatestEpisodeSection />)

        const sectionTitle = screen.getByRole("heading", {name: "Latest episodes", level: 2})

        expect(sectionTitle).toBeInTheDocument()

        expect(screen.getAllByTestId("target-itemImage")).toHaveLength(1);
        expect(screen.queryAllByTestId("target-itemImage").slice(1)).toHaveLength(0)

        const button = screen.getByRole("button", { name: /View all episodes/i });

        fireEvent.click(button);
        expect(screen.getAllByTestId("target-itemImage")).toHaveLength(episodes.length);

        fireEvent.click(button);
        expect(screen.getAllByTestId("target-itemImage")).toHaveLength(1);
        expect(screen.queryAllByTestId("target-itemImage").slice(1)).toHaveLength(0)
       
    })

    it("renders first episode details including image, number, title, description, and action button", () => {
        render(<LatestEpisodeSection />);

        const firstEpisode = episodes[0];

        const image = screen.getByTestId("target-itemImage") as HTMLImageElement;
        expect(image.alt).toBe(firstEpisode.title);

        expect(screen.getByText(`Episode ${firstEpisode.episodeNumber}`)).toBeInTheDocument();

        const episodeTitle = screen.getByRole("heading", { name: firstEpisode.title, level: 5 });
        expect(episodeTitle).toBeInTheDocument();

        expect(screen.getByText(firstEpisode.description)).toBeInTheDocument();

        const button = screen.getByRole("button", { name: /View Episode Details/i });
        expect(button).toBeInTheDocument();
    })
})