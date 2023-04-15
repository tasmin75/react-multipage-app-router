import React, { useState } from 'react';

function Create({handleNotes}) {
  const [note,setNote]=useState("");

  const handleInputs=(e)=>{
    setNote(e.target.value)
  }

  return (
    <div>
      <h1>This is the Create Page</h1>
      <textarea 
            rows={20} cols={80} value={note} 
            onChange={handleInputs} 
            placeholder='Write the note'>
      </textarea>
      <button onClick={()=>handleNotes(note)}>Add Note</button>
    </div>
  );
}

export default Create;