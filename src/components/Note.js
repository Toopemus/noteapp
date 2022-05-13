import React, { useState } from 'react';

function Note({id, header, text, reminder, tag, handleDeleteNote, handleUpdateNote}) {
    const [note, setNote] = useState({
        id: id,
        header: header,
        text: text,
        reminder: reminder,
        tag: tag
    });
    const [deleted, setDeleted] = useState(false);
    const parsedReminder = new Date(note.reminder);

    const updateHeader = (event) => {
        let tempNote = {...note};
        tempNote.header = event.target.value;
        setNote(tempNote);
        update(tempNote);
    }

    const updateText = (event) => {
        let tempNote = {...note};
        tempNote.text = event.target.value;
        setNote(tempNote);
        update(tempNote);
    }

    const update = (updatedNote) => {
        handleUpdateNote(updatedNote);
        if(deleted) {
            handleDeleteNote(note.id);
        }
    }

    const deleteNote = () => {
        handleDeleteNote(note.id);
        setDeleted(true);
    }


    return (
        <div className='note' tabIndex={100}>
            <div className='notebody'>
                <div className='uprow'>
                    <textarea
                        className='notetitle'
                        rows='1'
                        value={note.header}
                        onChange={updateHeader}
                    ></textarea>
                    <button className='remove' onClick={() => deleteNote()}>X</button>
                </div>

                <textarea
                    rows='7'
                    style={{width:'100%', height:'100%'}}
                    value={note.text}
                    onChange={updateText}
                ></textarea>
            </div>
            <div className='notefooter'>
                <div className='notetag'>
                    <div className={note.tag.color}></div>
                    <div>{note.tag.name}</div>
                </div>
                <div>{!note.reminder ? '' : `${parsedReminder.getDate()}.${parsedReminder.getMonth()}.${parsedReminder.getFullYear()} ${parsedReminder.getHours()}:${parsedReminder.getMinutes()}`}</div>
            </div>
        </div>
    );
}

export default Note;