import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

function NewEvent() {
    return (
        <>
            <h2 className="font-semibold">NEW EVENT</h2>
            <label>Title of event</label>
            <input className="border-2 border-black"></input>

            <label>Description of event</label>
            <input className="border-2 border-black"></input>

            <label>Effevt of event</label>
            <input className="border-2 border-black"></input>
        </>
    )
}

const NewAdventure: NextPage = () => {
    const [n, setN] = useState(2)
    const [container, setContainer] = useState([<NewEvent key={1}></NewEvent>])
    function handleClick() {
        if (n < 10) {
            setN(n + 1)
        }
        setContainer(container => [...container, <NewEvent key={n}></NewEvent>])
    }

    function handleRemoveEventClick() {
        let temp = container
        temp.pop()
        setContainer([...temp])
    }

    return (
        <>
            <Head>
                <title>Create new adventure</title>
                <meta name="description" content="Create neat tabletop games on the web" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col w-screen h-screen items-center">
                <h1 className="mt-10 font-semibold text-lg">Make a new adventure</h1>
                <form className="flex gap-5 flex-col">
                    <label>name of adventure</label>
                    <input placeholder="A title of your adventure" className="border-2 border-black"></input>
                    <h2>Events: what happens in your game</h2>
                    {container}
                </form>
                <button onClick={handleRemoveEventClick} className="mt-10 border-2 border-black hover:bg-slate-400">remove event</button>
                <button onClick={handleClick} className="mt-10 border-2 border-black hover:bg-slate-400">add new event</button>
            </div>
        </>
    )
}

export default NewAdventure