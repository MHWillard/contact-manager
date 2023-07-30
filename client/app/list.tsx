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

export default function List({contacts}: ContactListProps) {
//export default function List() {

    const renderedContactList = contacts.map(contact => 
        <Contact contact={contact} />);

    return (
    <div id='app-header' role="list">
        {renderedContactList}
    </div>
    )
}