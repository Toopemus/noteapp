import React from 'react';

function Note({id, header, text, reminder, handleDeleteNote}) {
    return (
        <div className='note'>
            <div className='notebody'>
                <div className='uprow'>
                    <span className='notetitle'>{header}</span>
                    <button className='remove' onClick={() => handleDeleteNote(id)}>X</button>
                </div>

                <p>{text}</p>
            </div>
            <div className='notefooter'>
                <div>Tunniste</div>
                <div>{!reminder ? '' : `${reminder.getDate()}.${reminder.getMonth()}.${reminder.getFullYear()} ${reminder.getHours()}:${reminder.getMinutes()}`}</div>
            </div>
        </div>
    );
}

export default Note;