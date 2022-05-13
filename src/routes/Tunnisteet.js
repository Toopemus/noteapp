import React from 'react';
import Menu from '../components/Menu';

function Tunnisteet({notes}) {
    return (  
        <div className="Tunniste_sivu">
            <Menu notes={notes}/>
            <h1>Tunniste osio!</h1>
        </div>
    );
}

export default Tunnisteet;