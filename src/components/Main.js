import React from 'react';

import Notelist from './Notelist';

function Main({filterNotes, notes, addNote, updateNote, deleteNote}) {
  return (
    <div className='sisalto'>
      <Notelist notes={notes} handleDeleteNote = {deleteNote} handleAddNote = {addNote} filterNotes = {filterNotes} handleUpdateNote={updateNote}/>
    </div>
  );
}

export default Main