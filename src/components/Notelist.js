import React from 'react';
import Note from './Note';

//Muistiinpanolista
function Notelist({notes, handleDeleteNote}) {
    return(
        <div className='notelist'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    header={note.header}
                    text={note.text}
                    reminder={note.reminder}
                    handleDeleteNote = {handleDeleteNote}
                />
            ))}
        </div>
    );
}

export default Notelist;