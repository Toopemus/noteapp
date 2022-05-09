import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Notelist from './Notelist';

function Main({filterNotes}) {
    const [notes, setNotes] = useState([
        {
          id: nanoid(),
          header: 'otsikko1',
          text: 'teksti1',
          reminder: '',
          tag: {
            color: 'red',
            name: 'Koti'
          }
        },
        {
          id: nanoid(),
          header: 'otsikko2',
          text: 'teksti2',
          reminder: '',
          tag: {
            color: 'green',
            name: 'Harrastus'
          }
        },
        {
          id: nanoid(),
          header: 'otsikko3',
          text: 'teksti3',
          reminder: '',
          tag: {
            color: 'blue',
            name: 'Työ'
          }
        }
    ]);

    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('note-app-data'));

      if(savedNotes) {
        setNotes(savedNotes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('note-app-data', JSON.stringify(notes));
    }, [notes]);

    const addNote = (header, text, reminder, tag) => {
        const newNote = {
          id: nanoid(),
          header: header,
          text: text,
          reminder: reminder,
          tag: {
            color: tag.color,
            name: tag.name
          }
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
            <Notelist notes={notes} handleDeleteNote = {deleteNote} handleAddNote = {addNote} filterNotes = {filterNotes}/>
        </div>
    );
}

export default Main