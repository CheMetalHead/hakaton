import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Avalible API routes</h1>
      <ul>
        <li>/api/faculties [GET]</li>
        <li>/api/rooms [GET]</li>
        <li>/api/desks [GET, POST]</li>
        <li>/api/desks/[id] [DELETE]</li>
      </ul>
    </div>
  )
}

export default Home
