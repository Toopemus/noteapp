import React from 'react';
import Menu from '../components/Menu';
import Main from '../components/Main';

function Muistutus() {
    return (  
        <div className="muistutus_sivu">
            <Menu />
            <Main filterNotes={'muistutus'}/>
        </div>
    );
}

export default Muistutus;