import './App.css';
import {Routes,Route,useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Update from './Pages/Update';
import Delete from './Pages/Delete';
import Navbar from './Navbar/Navbar';
import { createContext, useState } from 'react';


export const allNotesRef=createContext([]);
export const setAllNotesRef=createContext();

function App() {
  const navigate=useNavigate();
const [notes,setNotes]=useState([]);
const [count,setCount]=useState(1);


  const handleNotes=(note)=>{
     setNotes([...notes,{id:count,note:note}]);
     setCount(count+1);
     alert("Note Added");
  }
  const handleDeleteNote =(id)=>{
    const tempData= notes.filter((item)=>item.id!=id);
    setNotes(tempData);
    navigate("/delete"); 
  }

  return (
    <div className="App">
   <allNotesRef.Provider value={notes}>
   <setAllNotesRef value={setNotes}>

  <Navbar/>

        <Routes>
          <Route path='/' element={<Home  handleDeleteNote={handleDeleteNote}/>}/>
          <Route path='/create' element={<Create handleNotes={handleNotes}/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>

      </setAllNotesRef>
      </allNotesRef.Provider>
    
    </div>
  );
}

export default App;