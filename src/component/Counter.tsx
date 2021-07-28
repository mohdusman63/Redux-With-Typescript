import React, { useState } from 'react'
import { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/reducers/counterSlice'
import { add } from '../store/reducers/todoSlice'

export function Counter() {
    const [textValue, setTextValue] = useState<string>("")
    const count = useSelector((state: RootState) => state.counter.value)
    const todoValue = useSelector((state: RootState) => state.todo.value)
    // const count = useSelector((state: RootState) => state.counter.value)
    console.log(todoValue)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                {JSON.stringify(todoValue)}
                <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(add(textValue))}
                >
                    AddList
                </button>
                {todoValue.map((ele: any, index: number) => {
                    return (
                        <p>{ele}</p>
                    )
                })}


            </div>
        </div>
    )
}