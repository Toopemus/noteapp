import React from 'react';

function Note({id, header, text, handleDeleteNote}) {
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
                <p>Tunniste placeholder</p>
            </div>
        </div>
    );
}

export default Note;