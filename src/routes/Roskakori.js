import React from 'react';
import Menu from '../components/Menu';

function Roskakori({notes, removedNotes}) {
    return (  
        <div className="roskakori_sivu">
            <Menu notes={notes}/>
            <div className='sisalto'>
                <div>
                    <h5>Roskakorissa olevat muistiinpanot poistetaan sivun päivittäessä</h5>
                    <div className='notelist'>
                        {removedNotes.map((note) => (
                            <div className='note' tabIndex={100}>
                                <div className='notebody'>
                                    <div className='uprow'>
                                        <textarea
                                            className='notetitle'
                                            rows='1'
                                            value={note.header}
                                        ></textarea>
                                    </div>

                                    <textarea
                                        rows='7'
                                        style={{width:'100%', height:'100%'}}
                                        value={note.text}
                                    ></textarea>
                                </div>
                                <div className='notefooter'>
                                    <div className='notetag'>
                                        <div className={note.tag.color}></div>
                                        <div>{note.tag.name}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roskakori;