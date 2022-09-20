import { useState, useEffect } from 'react'
import './EachItem.css'
import axios from 'axios'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEraser } from 'react-icons/fa'



export const EachItem = (props) =>{
const [ newDate, setNewDate ] = useState('')
    
    // useEffect(()=>{
    //     axios.get('/todos')
    //     .then((response)=>{
    //         console.log(response.data)
    //         props.onRefresh(response.data)
    //     })
        
        
    // },[])    

//PUT - for updating the time and date of each listing
// The unique key for each item is tied to the mongoId so the correct item is targeted    
const dateEditHandler= (evt) =>{
    //let mongoId = evt.target.id
    setNewDate(evt.target.value)
    // let editedDate = {
    //     date : newDate
    // }
    // console.log(newDate)
    // console.log(mongoId)
    // axios.put(`/todos/${mongoId}`, editedDate)
    
    //*Temporary auto refresh*
    // window.location.reload(true)
}

const descriptionHandler = ()=>{
    console.log('clicked me for description')
}

const editHandler = (evt)=>{
    let mongoId = evt.target.id
    let editedDate = {
        date : newDate
    }
    axios.put(`/todos/${mongoId}`, editedDate)
    window.location.reload(true)
}

//DELETE - for removing the individual list item
// The unique key for each item is tied to the mongoId so the correct item is targeted
const deleteHandler = (evt)=>{
    let mongoId = evt.target.id
    axios.delete(`/todos/${mongoId}`)
    console.log(mongoId)
    
    
    //*Temporary auto refresh*
    window.location.reload(true)
} 


    return(
        <div>
            <div className="each-item">
                <input type="checkbox"></input>
                <h6 id={props.number} onClick={descriptionHandler}><b>{props.todoItem}</b></h6>
                <h6><b>/ due by {props.date}<input id={props.number} className="date" type="datetime-local" onChange={dateEditHandler}></input></b></h6>
                <button id={props.number} onClick={editHandler} className="buttons"><FaEraser id={props.number} onClick={editHandler}/></button>
                <button id={props.number} onClick={deleteHandler} className="buttons"><FaTrashAlt id={props.number} onClick={deleteHandler}/></button>
            </div>
        </div>
    )
}