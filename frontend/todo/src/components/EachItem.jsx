import { useState } from 'react'
import './EachItem.css'
import axios from 'axios'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

export const EachItem = (props) =>{
const [ newDate, setNewDate ] = useState()

//PUT - for updating the time and date of each listing
// The unique key for each item is tied to the mongoId so the correct item is targeted    
// PUT 1ST PART - UPDATING THE DATE'S STATE
const handleDateEdit = (e) =>{
    setNewDate(e.target.value)
}

//PUT 2ND PART - TAKING THE DATE'S UPDATED STATE AND SUBMITTING IT INTO A NEW OBJECT
// THE DESIRED LOCATION TO UPDATE IS IDENTIFIED BY THE TARGET ID WHICH IS GENERATED BY MONGODB
//THE NODE EXPRESS SERVER COMMAND FROM THIS ROUTE TELLS THE DATABSE TO UPDATE THE DATA
const handleEdit = (e)=>{
    let mongoId = e.target.id
    let editDate = {
        date : newDate
    }
    axios.put(`/todos/${mongoId}`, editDate)
    props.onRefresh()
}

//DELETE - FOR REMOVING A SINGLE LISTED ITEM
//FOLLOWS SAME PRINCIPLE AS PUT FOR TARGETING A SPECIFIC ITEM, BUT THE EXPRESS SERVER ROUTE COMMAND TO THE DATABASE IS TO DELETE THE UNIQUE ID AND ASSOCIATED ITEM 
    const handleDelete = (e)=>{
    let mongoId = e.target.id
    axios.delete(`/todos/${mongoId}`)
    console.log(mongoId)
    props.onRefresh() 
} 
    return(
        <div>
            <div className="each-item">
                <input className="checkbox" type="checkbox"></input>
                <h6 id={props.number}><b>{props.todoItem}</b></h6>
                <h6><b>＠ {props.date}<input id={props.number} className="date" type= "datetime-local" onChange={handleDateEdit}></input></b></h6>
                <button id={props.number} onClick={handleEdit} className="buttons"><FaEdit id={props.number} onClick={handleEdit}/>Edit</button>
                <button id={props.number} onClick={handleDelete} className="buttons"><FaTrashAlt id={props.number} onClick={ handleDelete}/> ❌</button>
            </div>
        </div>
    )
}
