import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Notelist from './Notelist';
import AddNote from './AddNote';

function Main() {
    const [notes, setNotes] = useState([
        {
          id: nanoid(),
          header: 'otsikko1',
          text: 'teksti1',
          reminder: ''
        },
        {
          id: nanoid(),
          header: 'otsikko2',
          text: 'teksti2',
          reminder: ''
        },
        {
          id: nanoid(),
          header: 'otsikko3',
          text: 'teksti3',
          reminder: ''
        }
    ]);

    const addNote = (header, text, reminder) => {
        const newNote = {
          id: nanoid(),
          header: header,
          text: text,
          reminder: reminder
        }
        const newNotelist = [...notes, newNote];

        setNotes(newNotelist);
    }

    const deleteNote = (id) => {
      const newNotelist = notes.filter((note) => note.id !== id);

      setNotes(newNotelist);
    }

    return (
        <div className='sisalto'>
            <AddNote handleAddNote = {addNote} />
            <Notelist notes={notes} handleDeleteNote = {deleteNote} />
        </div>
    );
}

export default Main