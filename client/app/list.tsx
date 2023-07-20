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

export default function List({contacts}: ContactListProps) {
    const renderedContactList = contacts.map(contact => 
        <Contact contact={contact} />);

    return (
    <div id='app-header' role="list">
        {renderedContactList}
    </div>
    )
}