import {render, screen} from '@testing-library/react'
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
    test('when i load the web page', ()=>{
        //arrange, act, assert
        //given, when, then
        
        render(<List contacts={testContactList} />);
        //then the contacts should appear in the contact list box as their own components
        // TODO: assert that contact-box is populated with three list contacts

        //and when I type for a contact name in the search bar
        
        //then the contacts filter to only contacts that match that text

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

// TODO: check for contacts bleeding in and selectable
// TODO: check pagination
// TODO: check for multiple filtering based on search
// TODO: filter, click, close, filter again
// TODO: click and close contact in list