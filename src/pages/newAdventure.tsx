import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, Reducer, useReducer } from 'react'

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
let i = 1
const NewAdventure: NextPage = () => {

	type State = {
		value: JSX.Element[];
		index: number
	}

	const initialFormState: State = {
		value: [<NewEvent key={0}></NewEvent>],
		index: 0
	}

	enum ActionKind {
		Add = 'ADD',
		Remove = 'REMOVE',
	}

	type Action = {
		type: ActionKind,
	}

	const increaseAction: Action = {
		type: ActionKind.Add,
	}

	const decreaseAction: Action = {
		type: ActionKind.Remove
	}

	function formReducer(state: State, action: Action) {
		const { type } = action
		switch (type) {
			case ActionKind.Add:
				console.log(i)
				console.log("add y")
				i++
				return {
					index: state.index++,
					value: [...state.value, <NewEvent key={i}></NewEvent>]
				}

			case ActionKind.Remove:
				state.value.pop()
				console.log(i)
				console.log("remove y")
				i--
				return {
					index: state.index--,
					value: [...state.value]
				}
		}
	}

	const [state, dispatch] = useReducer(formReducer, initialFormState)

	function handleAdd() {
		if (i < 5) {
			dispatch(increaseAction)
		}
	}
	function handleRemove() {
		if (i > 1) {
			dispatch(decreaseAction)
		}
	}

	const buttonCls = "mt-10 border-2 border-black hover:bg-slate-400"

	return (
		<>
			<Head>
				<title>Create new adventure</title>
				<meta name="description" content="Create neat tabletop games on the web" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex w-screen justify-center">
				<div className="flex flex-col">
					<h1 className="mt-10 font-semibold text-lg">Make a new adventure</h1>
					<form className="flex flex-col">
						<label>name of adventure</label>
						<input placeholder="A title of your adventure" className="border-2 border-black"></input>
						<h2>Events: what happens in your game</h2>
						{state.value}
					</form>
					<button onClick={handleAdd} className={buttonCls}>add new event</button>
					<button onClick={handleRemove} className={buttonCls}>remove event</button>
				</div>
				<div>
					<button className={buttonCls}>submit event</button>
				</div>
			</div>
		</>
	)
}

export default NewAdventure
