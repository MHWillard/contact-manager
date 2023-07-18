import {render, screen} from '@testing-library/react'
import Search from '../app/search.tsx'
import Header from '../app/header.tsx'
import ContactBox from '../app/contactbox.tsx'
import Contact from '../app/contact.tsx'
import Pagination from '../app/pagination.tsx'
import '@testing-library/jest-dom'

describe("component check", () => {

    it("renders the Header", () => {
        render(<Header />);

        const header = screen.getByRole('heading', { name: /Header/i });
        expect(header).toBeInTheDocument();
    });

    it("renders the box for holding contacts", () => {
        render(<ContactBox />);

        const contactBox = screen.getByRole('heading', { name: /ContactBox/i });
        expect(contactBox).toBeInTheDocument();
    });

    it("renders the Pagination element", () => {
        render(<Pagination />);

        const pagination = screen.getByRole('heading', { name: /Pagination/i });
        expect(pagination).toBeInTheDocument();
    });

});

describe("component internals", ()=> {
    test("search component has search bar",() => {
        render(<Search />);

        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toBeInTheDocument();
    });

    test('contact component loads data accurately', ()=> {
        const testContact = {name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"}
        render(<Contact contact={testContact} />)

        expect(screen.getByRole('list-item')).toHaveTextContent('dummyname')
    })
});

// TESTING: use React Testing Library for testing rendering or query off of DOM methods. Arrange the app like normal in react.

/*
TODO: set up search bar
TODO: set up header with app name
TODO: style: overall gradient
TODO: style: white-gray color scheme for sinle page app
TODO: center app: header, search box, contact-box (with contact components), pagination based on entries
TODO: set up and test page based pagination

*/