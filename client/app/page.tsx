"use client"

import { useState, useEffect } from 'react'

//import Image from 'next/image'
import Search from './search'
import Header from './header'
import List from './list'
import Pagination from './pagination'
import {API} from '../app/data/api'

interface ContactListState {
  contacts: IContacts[];
}

interface IContacts {
  name: string, 
  email: string, 
  number: string,
  job: string, 
  status: string, 
  interests: string, 
  notes: string
}

export default function Home() {
  const api = new API()

  const [contacts, setContacts] = useState<IContacts[]>([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await api.getContactData();
        setContacts(data);
      } catch(error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <main>
      <div><Header /></div>
      <div><Search /></div>
      <div><List contacts={contacts} /></div>
      <div><Pagination /></div>
    </main>
  )
}
