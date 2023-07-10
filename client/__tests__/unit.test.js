import {render, screen} from '@testing-library/react'
import Search from '../app/Search.tsx'
import Home from '../app/page.tsx'
import '@testing-library/jest-dom'

describe("Search", () => {
    it("renders the Search bar", () => {
        render(<Search />);

        expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    });

    it("renders Home and its heading", () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
          name: /welcome to next\.js!/i,
        })
    
        expect(heading).toBeInTheDocument()
    });
});