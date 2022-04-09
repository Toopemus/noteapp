import React from 'react';
import Note from './Note';

//Muistiinpanolista
function Notelist({notes, handleDeleteNote}) {
    return(
        <div className='notelist'>
            {notes.map((note) => (
            <Note id={note.id} header={note.header} text={note.text} handleDeleteNote = {handleDeleteNote} />
            ))}
        </div>
    );
}

export default Notelist;