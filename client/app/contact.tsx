interface ContactProps {
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

export default function Contact({contact}: ContactProps) {
    return (
    <div id='contact' role="list-item">
        {contact.name}  {contact.email}  {contact.number}  {contact.job}  {contact.status}  {contact.interests}  {contact.notes}
    </div>
    )
}

/*
{name, email, number,job, status, interests, notes}
*/