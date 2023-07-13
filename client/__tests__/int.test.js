import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('searching for a particular contact on the website',()=>{
    //goes to website
    render(<Home />);

    //everything loads up: header, searchbox, etc.
    //// assert header
    //// assert searchbox
    //// assert contact box
    //// assert pagination

    //contacts load in from DB and can be seen
    //goes over one page and next page of contacts loads in
    //goes back to the previous page
    //types a name in the search field and sees all the comments auto filter
    //does it again, mistypes so no contacts return
    //corrects the typing to bring up an entry

    it('')
})

//types for an entry
//clicks on the entry
//entry brings up a new window of information
//clicks one of the edit buttons
//makes a change and confirms
//the entry window updates to show the new info
//they close out of the window
//they click on ti again to make sure it's still there and it is