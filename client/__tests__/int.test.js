import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page.tsx'

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

// TODO: check for contacts bleeding in and selectable
// TODO: check pagination
// TODO: check for multiple filtering based on search
// TODO: filter, click, close, filter again
// TODO: click and close contact in list