import { useEffect, useState } from 'react'
import axios from 'axios'
import { EachItem } from './EachItem'
import './ListItems.css'
import { Input } from './Input';

export const ListItems = (props)=>{
    const [ allItems, setAllItems ] = useState(props.taskers)
    
    //WILL CALL UP THE LATEST DATABASE SNAPSHOT AFTER ALL FUNCTIONS ARE PERFORMED
    //SPECIFICALLY - THE DATA PORTION OF THE RESPONSE CONTAINS THE OBJECTS TO BE MAPPED AND LISTED
    useEffect(()=>{
        axios.get('/todos')
        .then((response)=>{
            console.log(response.data)
            setAllItems(response.data)
        })
    },[])

    //THIS WILL UPDATE THE STATE OF ALL THE ITEMS BEING MAPPED WHICH TRIGGERS A RERENDER. 
    //RERENDERING CAUSES A REFRESH OF THE LATEST DATABASE SNAPSHOT 
    let refreshHandler = ()=>{
        axios.get('/todos')
        .then((response)=>{
            console.log(response.data)
            setAllItems(response.data)
        })
    }
   //LISTITEMS HAS TWO SUBCOMPONENTS. THE ONREFRESH PROPERTY IS PASSED DOWN TO THE SUBMITHANDLER EDITHANDLER AND DELETEHANDLER. IN ALL CASES THE FUNCTION GETS A FRESH SNAPSHOT OF THE DATABASE TO UPDATE THE STATE FOR MAPPING  
   //ALL JSON RESPONSES ARE ASSIGNED A UNIQUE KEY ISSUED BY MONGODB. THESE KEYS ARE NEEDED FOR EFFICIENT IDENTIFCATION DURING THE MAPPING FUNCTION
    return (
        <div>
            <Input onRefresh={refreshHandler}/>
            <br/>
            <label id="listingSection" onClick={refreshHandler}>Consolidated list of items to do</label>
            <div id="linerow">
                {allItems.map((dbData)=>{
                return (<EachItem 
                    todoItem = {dbData.todoItem}
                    date = {dbData.date}
                    number = {dbData._id}
                    key = {dbData._id}  
                    onRefresh={refreshHandler}           
                />) 
            })}
            </div>
        </div>
    )
}