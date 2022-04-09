import React from 'react';

function Note({id, header, text, handleDeleteNote}) {
    return (
        <div className='note'>
            <div className='notebody'>
                <div className='uprow'>
                    <h2>{header}</h2>
                    <button className='remove' onClick={() => handleDeleteNote(id)}>x</button>
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