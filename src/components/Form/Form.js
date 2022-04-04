import { useState } from "react";
import './Form.styles.css'

export const Form  = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }

    const handleChange =  (e) => {
        setValue(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="messageInput" value={value} onChange={handleChange} type="text"></input>
            <input className="submitInput" type="submit"></input>
        </form>
    )
}