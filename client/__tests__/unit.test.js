import {render, screen} from '@testing-library/react'
import Search from '../app/search.tsx'
import Header from '../app/header.tsx'
import ContactBox from '../app/contactbox.tsx'
import Contact from '../app/contact.tsx'
import Pagination from '../app/pagination.tsx'
import List from '../app/list.tsx'
import '@testing-library/jest-dom'
//import testContactList from './mockdata/mockdata.js';

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

    test('contact box component gets expected list of contacts',() =>{
        const testContactList = [
            {name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"},
            {name: "dingo", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"},
            {name: "bingo", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"}
        ]

        render(<List contacts={testContactList} />);

        const contactOne = screen.getByText(/dummyname/)
        const contactTwo = screen.getByText(/dingo/)
        const contactThree = screen.getByText(/bingo/)

        expect(contactOne).toBeInTheDocument();
        expect(contactTwo).toBeInTheDocument();
        expect(contactThree).toBeInTheDocument();
    })

    //given that I have a search bar component, when I type into it, then the component's internal value should equal what I type
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