import { useState } from 'react'
import axios from 'axios'

export const Input = ()=>{
    let [itemName, setItemName] = useState('')
    let [enteredDate, setEnteredDate] = useState('')

    let submitHandler = (evt)=>{
        evt.preventDefault()
        let newItem = {
            todoItem : itemName,
            date : enteredDate
        }
        axios.post('/todos', newItem)
        setItemName('')
        setEnteredDate('')
        window.location.reload(true)
    }   
    
    let itemChangeHandler = (evt)=>{
        setItemName(evt.target.value)
        console.log(evt.target.value)
    }

    let dateChangeHandler = (evt)=>{
        setEnteredDate(evt.target.value)
        console.log(evt.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
        <div>
            <div>
            <label>to do item -- </label>
            <input type="text" maxLength="23" size="24" value={itemName} onChange={itemChangeHandler}></input>
            </div>
            <div>
                <label>due by -- </label>
                <input className="inputdate" type="datetime-local" min='2022-09-01' max='2023-01-01' value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            <br></br>
            <button type="submit">add the new item</button>
            
            
        </div>
        </form>
        
    )
} 