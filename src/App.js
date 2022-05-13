import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Main from './components/Main';
import Menu from './components/Menu';
import { Routes, Route } from "react-router-dom";
import Asetukset from './routes/Asetukset';
import Muistutus from './routes/Muistutus';
import Roskakori from './routes/Roskakori';
import Tunnisteet from './routes/Tunnisteet';
import Tunniste from './routes/Tunniste';

import './App.css';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      header: 'otsikko1',
      text: 'teksti1',
      reminder: '',
      tag: {
        tagid: nanoid(),
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
        tagid: nanoid(),
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
        tagid: nanoid(),
        color: 'blue',
        name: 'Työ'
      }
    }
]);

const [removedNotes, setRemovedNotes] = useState([]);

//Gets notes from local storage when the component is initialized
useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('note-app-data'));

  if(savedNotes) {
    setNotes(savedNotes);
  }
}, []);

//Saves notes to local storage when notes are changed
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
        tagid: tag.tagid,
        color: tag.color,
        name: tag.name
      }
    }
    const newNotelist = [...notes, newNote];

    setNotes(newNotelist);
}

const updateNote = (note) => {
  let tempNotes = [...notes];
  let indexOfNote = tempNotes.findIndex((o) => o.id === note.id);
  tempNotes[indexOfNote] = note;

  setNotes(tempNotes);
}

const deleteNote = (id) => {
  const addToRemoved = notes.find((note) => note.id === id);
  setRemovedNotes([...removedNotes, addToRemoved]);
  const newNotelist = notes.filter((note) => note.id !== id);
  setNotes(newNotelist);
}

  return (
      <Routes>
        <Route exact path='/' element={<><Menu notes={notes}/><Main filterNotes={'muistiinpanot'} notes={notes} addNote={addNote} updateNote={updateNote} deleteNote={deleteNote}/></>}/>
        <Route exact path='/muistutus' element={< Muistutus notes={notes} addNote={addNote} updateNote={updateNote} deleteNote={deleteNote}/>}/>
        <Route exact path='/tunnisteet' element={< Tunnisteet notes={notes}/>}/>
        <Route exact path='/tunnisteet/:tunnisteId' element={<><Menu notes={notes}/>< Tunniste notes={notes} addNote={addNote} updateNote={updateNote} deleteNote={deleteNote}/></>} />
        <Route exact path='/roskakori' element={< Roskakori notes={notes} removedNotes={removedNotes}/>}/>
        <Route exact path='/asetukset' element={< Asetukset notes={notes}/>}/>
      </Routes>
  );
}

export default App;
