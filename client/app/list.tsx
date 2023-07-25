import Contact from './contact'

interface IContacts {
    name: string, 
    email: string, 
    number: string,
    job: string, 
    status: string, 
    interests: string, 
    notes: string
}

interface ContactListProps {
    contacts: IContacts[];
}

//array of contact objects?
//1. write legit API route and test
//2. write mock for it and test again: mock service worker

const contacts = [
  {name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"},
  {name: "dingo", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"},
  {name: "bingo", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"},
  {name: "bill billson", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"}
]

//export default function List({contacts}: ContactListProps)
export default function List() {

    const renderedContactList = contacts.map(contact => 
        <Contact contact={contact} />);

    return (
    <div id='app-header' role="list">
        {renderedContactList}
    </div>
    )
}