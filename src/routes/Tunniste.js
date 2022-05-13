import React from "react";
import { useParams } from "react-router-dom";

import Notelist from "../components/Notelist";

function Tunniste({notes, addNote, updateNote, deleteNote}) {
    let params = useParams();

    return(
        <div className='sisalto'>
            <Notelist notes={notes} handleDeleteNote = {deleteNote} handleAddNote = {addNote} filterNotes = {params.tunnisteId} handleUpdateNote={updateNote}/>
        </div>
    );
}

export default Tunniste;