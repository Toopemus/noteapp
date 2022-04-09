import React, { useState } from 'react';

function AddNote({handleAddNote}) {
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');

    const handleHeader = (event) => {
        setHeader(event.target.value);
    };

    const handleText = (event) => {
        setText(event.target.value);
    };

    //Tallentaa muistiinpanon
    const save = () => {
        //TODO: Ilmoita käyttäjälle tyhjästä muistiinpanosta
        //Tarkistetaan ettei yritetä lisätä tyhjää muistiinpanoa
        if(header.trim().length > 0 && text.trim().length > 0) {
            handleAddNote(header, text);
            setHeader('');
            setText('');
        }
    };

    return(
        <div className='addnote'>
            <textarea
                rows='1'
                placeholder='Otsikko...'
                value={header}
                onChange={handleHeader}
            ></textarea>
            <textarea
                rows='5'
                placeholder='Lisää tekstiä...'
                value={text}
                onChange={handleText}
            ></textarea>
            <button className='save' onClick={save}>Lisää</button>
        </div>
    );
}

export default AddNote;