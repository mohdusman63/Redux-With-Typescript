import React, { ChangeEvent, FC, useState } from 'react';
import { Props } from '../Interfaces'
export const Person: FC<Props> = ({ name, email, address }) => {
    const [country, setCountry] = useState<string | null>(null)
    const [value, setVal] = useState<string>("")
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setVal(event.target.value)
    }
    return (
        <div>
            {email}
            <br />
            {name}
            <br />
            {address}
            <br />
            <input type="text" value={value} onChange={changeHandler} />
            {value}

        </div>
    );
}
