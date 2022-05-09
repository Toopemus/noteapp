import React, { useState } from 'react';

import Calendar from './Calendar';
import AddTag from './AddTag';

function AddNote({handleAddNote, notes}) {
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [reminder, setReminder] = useState('');
    const [tag, setTag] = useState({color: '', name: ''});
    const [showCal, setShowCal] = useState(false);
    const [showTag, setShowTag] = useState(false);

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
            handleAddNote(header, text, (reminder ? reminder.toJSON() : ''), tag);
            setHeader('');
            setText('');
            setReminder('');
            setTag({color: '', name: ''});
        }
    };

    const showCalendar = () => {
        setShowCal(!showCal);
    }

    const showAddTag = () => {
        setShowTag(!showTag);
    }

    const addReminder = (reminder) => {
        setReminder(reminder);
        showCalendar();
    }

    const addTag = (tag) => {
        setTag(tag);
        showAddTag();
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
                        <button onClick={showCalendar}>{!reminder ? 'Aseta aika' : `${reminder.getDate()}.${reminder.getMonth()}.${reminder.getFullYear()} ${reminder.getHours()}:${reminder.getMinutes()}`}</button>
                        <div className='calendarpositioner'>
                            {showCal && <Calendar handleShowCalendar={showCalendar} addReminder={addReminder}/>}
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
                <div>
                    <div onClick={showAddTag} className='addtagbutton'>
                        <div className={tag.color ? tag.color : 'emptycolor'}></div>
                        <div>{tag.name ? tag.name : 'Lisää tunniste'}</div>
                    </div>
                    <div className='addtagpositioner'>
                        {showTag && <AddTag notes={notes} showAddTag={showAddTag} addTag={addTag} />}
                    </div>
                </div>
                <button className='save' onClick={save}>Lisää</button>
            </div>
        </div>
    );
}

export default AddNote;