import {render, screen} from '@testing-library/react'
import Search from '../app/Search.tsx'
import Home from '../app/page.tsx'
import '@testing-library/jest-dom'

describe("Search", () => {
    it("renders the Search bar", () => {
        render(<Search />);

        const searchBar = screen.getByRole('heading', { name: /Search/i });
        expect(searchBar).toBeInTheDocument();
    });

});

// TESTING: use React Testing Library for testing rendering or query off of DOM methods. Arrange the app like normal in react.