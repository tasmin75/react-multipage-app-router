import React, { useContext } from 'react';
import {allNotesRef} from '../App'


function Home({handleDeleteNote}) {
    const notesRef=useContext(allNotesRef);
    console.log(notesRef);
  return (
    <div>
    <h1>React multi- page</h1>
      <h3>This is my home page</h3>
      {
        notesRef.map((item)=>{
            return <div key={item.id}>
            <p >Note: {item.id}. {item.note}</p>
            <button onClick={()=>handleDeleteNote(item.id)}>Delete</button>
            </div>
      })
      }
    </div>
  );
}

export default Home;