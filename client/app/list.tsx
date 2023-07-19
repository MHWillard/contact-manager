interface ContactListProps {
    contact: {
        name: string, 
        email: string, 
        number: string,
        job: string, 
        status: string, 
        interests: string, 
        notes: string
    }
}

//array of contact objects?


export default function List() {
    return (<div id='app-header' role="list"><h3>Contact List</h3></div>)
}