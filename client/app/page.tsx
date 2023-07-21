//import Image from 'next/image'
import Search from './search'
import Header from './header'
import List from './list'
import Pagination from './pagination'

export default function Home() {
  return (
    <main>
      <div><Header /></div>
      <div><Search /></div>
      <div><List contacts={contacts} /></div>
      <div><Pagination /></div>
    </main>
  )
}
