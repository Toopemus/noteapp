import React from 'react';
import Menu from '../components/Menu';
import Main from '../components/Main';

function Muistutus({notes, addNote, updateNote, deleteNote}) {
    return (  
        <div className="muistutus_sivu">
            <Menu notes={notes}/>
            <Main filterNotes={'muistutus'} notes={notes} addNote={addNote} updateNote={updateNote} deleteNote={deleteNote}/>
        </div>
    );
}

export default Muistutus;