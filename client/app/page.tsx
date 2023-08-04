//import Image from 'next/image'
import Search from './search'
import Header from './header'
import List from './list'
import Pagination from './pagination'
import {API} from '../app/data/api'

export default function Home() {
  //contacts passed in here with a mock or state
  const api = new API()
  const contacts = [
    {name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"},
    {name: "dingo", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"},
    {name: "bill billards", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"},
    {name: "bill billingsley", email: "bingo@dummyemail.com", number: "555-1234", job: "Popular Dog From Song", status: "Friend", interests: "singing, spelling, farming", notes: "Bingo is his name-o"}
  ]

  const data = api.getContactData();
  console.log("data: " + data);

  return (
    <main>
      <div><Header /></div>
      <div><Search /></div>
      <div><List contacts={contacts} /></div>
      <div><Pagination /></div>
    </main>
  )
}
