import React from 'react';
import Note from './Note';

import AddNote from './AddNote';

//Muistiinpanolista
function Notelist({notes, handleDeleteNote, handleAddNote, filterNotes}) {

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
                    />
                ));
            default:
                return 'poop';
        }
    }

    return(
        <div>
            <AddNote handleAddNote = {handleAddNote} notes={notes} />
            <div className='notelist'>
                {renderSwitch()}
            </div>
        </div>
    );
}

export default Notelist;