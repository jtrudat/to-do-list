import { useState } from 'react'
import axios from 'axios'
import './Input.css'

export const Input = (props)=>{
    let [item, setItem] = useState('')
    let [Date, setDate] = useState('')

    //ASSIGNS THE NEWLY INPUT DATA TO AN OBJECT. 
    //THE OBJECT IS THEN ROUTED INTO THE ITEM MODEL ON THE SERVER AND THEN POSTED TO THE COLLECTIONS MODEL
    let handleSubmit = (e)=>{
        e.preventDefault()
        let newItem = {
            todoItem : item,
            date : Date
        }
        axios.post('/todos', newItem)
        setItem('')
        setDate('')
        //window.location.reload(true)
        props.onRefresh()
        }   
    
    //SETS THE STATE FOR THE DESIRED ITEM TASKER TO BE ENTERED INTO THE DATABASE
    let handleItemChange = (e)=>{
        setItem(e.target.value)
        console.log(e.target.value)
    }

    //SETS THE STATE FOR THE DESIRED ITEM TASKER DATE TO BE ENTERED INTO THE DATABASE
    let handleDateChange = (e)=>{
        setDate(e.target.value)
        console.log(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label>To Do Item 👉 </label>
                <input className="inner" type="text" maxLength="21" size="24" value={item} placeholder="list me here please" onChange={handleItemChange}></input>
            </div>
            <br/>   
            <div>
                <label>Due by 👉 </label>
                <input className="inputdate" type="datetime-local" min='2022-09-01' max='2023-01-01' value={Date} onChange={handleDateChange}></input>
                <button className="submitter" type="submit">Add 📝</button>
            </div>   
        </div>
        </form>
        
    )
} 