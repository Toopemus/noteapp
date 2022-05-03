import React, {useState, useEffect} from 'react';
import { BiMenu, BiBell, BiTrash } from 'react-icons/bi'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { GoArrowRight } from "react-icons/go"
import { FiSettings } from 'react-icons/fi'
import { Link } from "react-router-dom";

function Menu(props) {
    const [inactive, setInactive] = useState(false);

    const toggleClass = () => {
        setInactive(!inactive);
    };

    return(
            <div className={inactive ? 'side_menu': 'side_menu inactive'}>
                <div className="top-icon" onClick={toggleClass}>
                    < BiMenu className='logo' />
                </div>
                <ul class="menu_items">
                    <li>
                        <MdOutlineStickyNote2 className='logo' />
                        <Link to="/" className='logo'>Muistiinpanot</Link>
                    </li>
                    <li>
                        <BiBell className='logo' />
                        <Link to="/muistutus">Muistutus</Link>
                    </li>
                    <li>
                        <GoArrowRight className='logo' />
                        <Link to="/tunnisteet">Tunnisteet</Link>
                    </li>
                    <li>
                        <BiTrash className='logo' />
                        <Link to="/roskakori">Roskakori</Link>
                    </li>
                    <li>
                        <FiSettings className='logo' />
                        <Link to="/asetukset">Asetukset</Link>
                    </li>
                </ul>
            </div>
    );
}

export default Menu;