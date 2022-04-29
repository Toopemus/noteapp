import React, { useState } from 'react';

import Calendar from './Calendar';

function AddNote({handleAddNote}) {
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [showCal, setShowCal] = useState(false);

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

    const showCalendar = () => {
        setShowCal(!showCal);
    }

    return(
        <div className='addnote'>
            <div className='addupper'>
                <div className='addheader'>
                    <textarea
                        rows='1'
                        placeholder='Otsikko...'
                        value={header}
                        onChange={handleHeader}
                    ></textarea>
                        <div className='reminder'>
                        <button onClick={showCalendar}>Aseta aika</button>
                        <div className='calendarpositioner'>
                            {showCal && <Calendar/>}
                        </div>
                    </div>
                </div>

                <div className='addbody'>
                    <textarea
                        rows='5'
                        placeholder='Lisää tekstiä...'
                        value={text}
                        onChange={handleText}
                    ></textarea>
                </div>
            </div>
            <div className='addfooter'>
                <textarea
                    rows='1'
                    placeholder='Lisää tunniste...'
                ></textarea>
                <button className='save' onClick={save}>Lisää</button>
            </div>
        </div>
    );
}

export default AddNote;