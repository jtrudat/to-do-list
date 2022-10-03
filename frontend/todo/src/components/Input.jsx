import { useState } from 'react'
import axios from 'axios'
import './Input.css'
import { FormControlLabel, Switch, Collapse } from '@mui/material'

export const Input = (props)=>{
    let [item, setItem] = useState('')
    let [date, setDate] = useState('')
    let [isToggled, setIsToggled] = useState(false)

    //ASSIGNS THE NEWLY INPUT DATA TO AN OBJECT. 
    //THE OBJECT IS THEN ROUTED INTO THE ITEM MODEL ON THE SERVER AND THEN POSTED TO THE COLLECTIONS MODEL
    let handleSubmit = (evt)=>{
        //evt.preventDefault()
        let newItem = {
            todoItem : item,
            date : date
        }
        axios.post('/todos', newItem)
        setItem('')
        setDate('')
        props.onRefresh()
        }   
    
    //SETS THE STATE FOR THE DESIRED ITEM TASKER TO BE ENTERED INTO THE DATABASE
    let handleItemChange = (evt)=>{
        setItem(evt.target.value)
        console.log(evt.target.value)
    }

    //SETS THE STATE FOR THE DESIRED ITEM TASKER DATE TO BE ENTERED INTO THE DATABASE
    let handleDateChange = (evt)=>{
        setDate(evt.target.value)
        console.log(evt.target.value)
    }
    let toggler = ()=>{
        setIsToggled((prev)=>(!prev))}

    return(
        <form>
            <FormControlLabel label=<h5> Slide to enter a new item ✏️</h5>
            control={<Switch checked={isToggled}  onClick={toggler}/>}
            />
        <Collapse in={isToggled}>
            <div>
            <label>Task : 👉 </label>
            <input className="inner" type="text" maxLength="31" size="28" value={item} placeholder="Enter your item here" onChange={handleItemChange}></input>
            </div>
            <br></br>
            <div>
                <label>Due by : 👉 </label>
                <input className="inputdate" type="datetime-local" min='2022-09-01' max='2023-01-01' value={date} onChange={handleDateChange}></input>
            <button className="submitter" onClick={handleSubmit}>Add 📝</button>
            </div>   
            <br></br>
        </Collapse>
        </form>
        
    )
} 