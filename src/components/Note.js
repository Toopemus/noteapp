import React from 'react';

function Note({id, header, text, reminder, tag, handleDeleteNote}) {
    const parsedReminder = new Date(reminder);

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
                <div className='notetag'>
                    <div className={tag.color}></div>
                    <div>{tag.name}</div>
                </div>
                <div>{!reminder ? '' : `${parsedReminder.getDate()}.${parsedReminder.getMonth()}.${parsedReminder.getFullYear()} ${parsedReminder.getHours()}:${parsedReminder.getMinutes()}`}</div>
            </div>
        </div>
    );
}

export default Note;