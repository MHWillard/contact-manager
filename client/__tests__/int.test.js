import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page.tsx'
import List from '../app/list.tsx'
import testContactList from './mockdata/mockdata.js';

test('check if all components render',()=>{
    //goes to website
    render(<Home />);

    //everything loads up: header, searchbox, etc.
    const appLogo = screen.getByRole('banner');
    expect(appLogo).toBeInTheDocument();

    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();

    const contactList = screen.getByRole('list');
    expect(contactList).toBeInTheDocument();

    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
})

describe('given that contacts are loaded in the database', () =>{
    test('loading contacts from API, rendering them, and changing based on text value from search', ()=>{
        //arrange, act, assert
        //given, when, then

        //given that contacts are loaded in the database, when I render the component, then the contacts should appear in the contact list box as their own components with the correct information
        //arrange
        //fake API mock that returns contact list

        //act
        ////pass into Home state
        render(<Home />);
        //assert
        const contactOne = screen.getByText(/dummyname/)
        const contactTwo = screen.getByText(/dingo/)
        const contactThree = screen.getByText(/bill billards/)
        const contactFour = screen.getByText(/bill billingsley/)

        expect(contactOne).toBeInTheDocument();
        expect(contactTwo).toBeInTheDocument();
        expect(contactThree).toBeInTheDocument();
        expect(contactFour).toBeInTheDocument();

        //and when I type for a contact name in the search bar
        const searchBar = screen.getByRole('textbox');
        fireEvent.change(searchBar, {target: {value: 'bill bill'}});
        
        //then the contacts filter to only contacts that match that text
        expect(contactOne).not.toBeInTheDocument();
        expect(contactTwo).not.toBeInTheDocument();
        expect(contactThree).toBeInTheDocument();
        expect(contactFour).toBeInTheDocument();

        //mock contact data
        //dump into List component
        //check for what loads: List > Contact components

        //mock type
        //mock return of search data
        //check List > Contact component dump/render again
    })
})

/* 
given that contacts are loaded in the database
when i load the web page
then the contacts should appear in the contact list box as their own components
*/

/*
TODO Tests to Write
- frontend can otherwise poll and get backend data
- search bar captures value
- captured search bar value runs search on API and returns contacts that match
- Header displays proper name and alignment and style
- Entire app is centered and responsive
- Contact list repopulates automatically with relevant contacts
- Contact list loads a contact component for each contact
- The contact component has all proper data and arrangements laid out in correct style
- Pagination has pages youj can jump to if contacts are too long
- You can click the number of the page to go to it or use the prev/next buttons to flip pages
*/