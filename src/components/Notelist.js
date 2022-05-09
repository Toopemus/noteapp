import React from 'react';
import Note from './Note';

import AddNote from './AddNote';

//Muistiinpanolista
function Notelist({notes, handleDeleteNote, handleAddNote}) {
    return(
        <div>
            <AddNote handleAddNote = {handleAddNote} notes={notes} />
            <div className='notelist'>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        header={note.header}
                        text={note.text}
                        reminder={note.reminder}
                        tag={note.tag}
                        handleDeleteNote = {handleDeleteNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default Notelist;