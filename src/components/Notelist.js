import React, { useState } from 'react';
import Note from './Note';

import AddNote from './AddNote';

//Muistiinpanolista
function Notelist({notes, handleDeleteNote, handleAddNote, filterNotes, handleUpdateNote}) {
    const [displayAddNote, setDisplayAddNote] = useState(false);

    const renderSwitch = () => {
        switch(filterNotes) {
            case 'muistiinpanot':
                return notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        header={note.header}
                        text={note.text}
                        reminder={note.reminder}
                        tag={note.tag}
                        handleDeleteNote = {handleDeleteNote}
                        handleUpdateNote = {handleUpdateNote}
                    />
                ));
            case 'muistutus':
                return notes.filter((note) => note.reminder).map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        header={note.header}
                        text={note.text}
                        reminder={note.reminder}
                        tag={note.tag}
                        handleDeleteNote = {handleDeleteNote}
                        handleUpdateNote = {handleUpdateNote}
                    />
                ));
            default:
                return notes.filter((note) => note.tag.tagid === filterNotes).map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        header={note.header}
                        text={note.text}
                        reminder={note.reminder}
                        tag={note.tag}
                        handleDeleteNote = {handleDeleteNote}
                        handleUpdateNote = {handleUpdateNote}
                    />
                ));
        }
    }

    const toggleAddNote = () => {
        setDisplayAddNote(!displayAddNote);
    }

    return(
        <div>
            {!displayAddNote && <div className='addnotebutton' onClick={toggleAddNote}>Luo uusi muistiinpano...</div>}
            {displayAddNote && <AddNote handleAddNote = {handleAddNote} notes={notes} toggleAddNote={toggleAddNote} />}
            <div className='notelist'>
                {renderSwitch()}
            </div>
        </div>
    );
}

export default Notelist;