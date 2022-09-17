import { useState } from 'react'
import './EachItem.css'
import axios from 'axios'


export const EachItem = (props) =>{

//PUT - for updating the time and date of each listing
// The unique key for each item is tied to the mongoId so the correct item is targeted    
const dateEditHandler= (evt) =>{
    let mongoId = evt.target.id
    let newDate = evt.target.value
    let editedDate = {
        date : newDate
    }
    console.log(newDate)
    console.log(mongoId)
    axios.put(`/todos/${mongoId}`, editedDate)
    //*Temporary auto refresh*
    window.location.reload(true)
}

//DELETE - for removing the individual list item
// The unique key for each item is tied to the mongoId so the correct item is targeted
const deleteHandler = (evt)=>{
    let mongoId = evt.target.id
    axios.delete(`/todos/${mongoId}`)
    console.log(mongoId)
    function refresh (){
        props.onRefreshHandler()
    }
    //*Temporary auto refresh*
    window.location.reload(true)
} 


    return(
        <div>
            <div>
                <input type="checkbox"></input><h6>☝️{props.todoItem}</h6>
                <h6> -- to be done by {props.date}<input id={props.number} className="date" type="datetime-local" onChange={dateEditHandler}></input></h6>
                <button id={props.number} onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}