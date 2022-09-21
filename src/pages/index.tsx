import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Make your own adventure</title>
        <meta name="description" content="Create neat tabletop games on the web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-screen h-screen items-center">
        <h1 className="mt-10 font-semibold text-lg">MAKE YOUR OWN ADVENTURE</h1>
        <div className="flex flex-row justify-between gap-10"> 
          <h2>Choose an adventure to play</h2>
          <h2 className="hover:underline"><Link href="./newAdventure">Make your own adventure</Link></h2>
        </div>
      </div>
    </>
  )
}

export default Home
