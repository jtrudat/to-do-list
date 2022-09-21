import './App.css'
import { Input } from './components/Input';
import { ListItems } from './components/ListItems'
import { FaCarSide, FaRunning } from 'react-icons/fa'
import { useState } from 'react'


//FOR DEMONSTRATION PURPOSES ONLY, WHEN INTERNET ACCESS TO THE DATABASE IS UNAVAILABLE
//DUMMYDATA IS PASSED AS A PROPERTY FROM THE APP COMPONENT TO THE LISTITEMS COMPONENTS 
//TO BE USED AS AN INITIAL STATE SO THAT A PRACTICE DATA SOURCE CAN BE PRESENT
let dummyData = [
  {
    _id: '1',
    todoItem: 'paint the fence',
    date: '2022-09-15',
    key: 11
  },
  {
    _id: '2',
    todoItem: 'walk the dog',
    date: '2022-09-14',
    key: 21
  },
  {
    _id: '3',
    todoItem: 'water the flowers',
    date: '2022-09-13',
    key: 31
  }
]

function App() {
  let itemsList = useState(dummyData)
  


//THE MAIN APP COMPONENT HAS TWO SUBCOMPONENTS, THE INPUT AND THE LISTITEMS. 
//LISTITEMS IS PASSED THE TASKERS PROPERTY WHICH CONTAINS THE INTERNALLY STORED DUMMY DATA.  
  return (
    <div className="setDisplay">
      <div><h3><b><FaCarSide className="sidecar"/>- Taskers & To-do's quicksheet - <FaRunning className="battery"/></b></h3></div>
      <Input />
      <ListItems taskers={itemsList}/>
    </div>
  );
}

export default App;
