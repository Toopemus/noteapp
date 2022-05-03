import React, {useState, useEffect} from 'react';
import { BiMenu, BiBell, BiTrash } from 'react-icons/bi'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { GoArrowRight } from "react-icons/go"
import { FiSettings } from 'react-icons/fi'
import { NavLink } from "react-router-dom";

function Menu(props) {
    const [inactive, setInactive] = useState(false);

    const toggleClass = () => {
        setInactive(!inactive);
    };

    const navLinkStyling =({ isActive }) => {
        return {
            className : isActive ? 'active' : 'not-active',
        }
    }

    return(
        <div className={inactive ? 'side_menu inactive': 'side_menu'}>
            <div className="top-icon" onClick={toggleClass}>
                < BiMenu className='logo' />
            </div>
            <ul class="menu_items">
                <li>
                    <NavLink exact to="/" style={navLinkStyling}>
                        <MdOutlineStickyNote2 className='menu_logo_item'/>
                        <a className='text_item'>Muistiinpanot</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/muistutus" style={navLinkStyling}>
                        <BiBell className='menu_logo_item_two'/>
                        <a className='text_item_two'>Muistutus</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/tunnisteet" style={navLinkStyling}>
                        <GoArrowRight className='menu_logo_item_three'/>
                        <a className='text_item_three'>Tunnisteet</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/roskakori" style={navLinkStyling}>
                        <BiTrash className='menu_logo_item_four'/>
                        <a className='text_item_four'>Roskakori</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/asetukset" style={navLinkStyling}>
                        <FiSettings className='menu_logo_item_five'/>
                        <a className='text_item_five'>Asetukset</a>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;