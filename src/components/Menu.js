import React, { useState } from 'react';
import { BiMenu, BiBell, BiTrash, BiZoomIn } from 'react-icons/bi'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { GoArrowRight } from "react-icons/go"
import { FiSettings } from 'react-icons/fi'
import { NavLink } from "react-router-dom";

function Menu({notes}) {
    const [inactive, setInactive] = useState(false);

    const tags = [...new Map(notes.map(note =>
        [note.tag['name'], note.tag])).values()];

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
                <li className='menuitem'>
                    <NavLink exact to="/" style={navLinkStyling}>
                        <div className='notetag'>
                            <MdOutlineStickyNote2 className='logoitem'/>
                            Muistiinpanot
                        </div>
                    </NavLink>
                </li>
                <li className='menuitem'>
                    <NavLink exact to="/muistutus" style={navLinkStyling}>
                        <div className='notetag'>
                            <BiBell className='logoitem'/>
                            Muistutus
                        </div>
                    </NavLink>
                </li>
                <li className='menuitem'>
                    <div className={navLinkStyling}>
                        <div className={inactive ? 'notetag_inactive notetag': 'notetag'}>
                            <GoArrowRight className='logoitem'/>
                            Tunnisteet
                        </div>
                    </div>
                </li>
                {tags.map((tag) => (
                    <li className='menutagitem' key={tag.tagid}>
                        <NavLink to={`/tunnisteet/${tag.tagid}`} style={navLinkStyling}>
                            <div className='notetag'>
                                <div className={tag.color}></div>
                                {tag.name}
                            </div>
                        </NavLink>
                    </li>
                ))}
                <li className='menuitem'>
                    <NavLink exact to="/roskakori" style={navLinkStyling}>
                        <div className='notetag'>
                            <BiTrash className='logoitem'/>
                            Roskakori
                        </div>
                    </NavLink>
                </li>
                <li className='menuitem'>
                    <NavLink exact to="/asetukset" style={navLinkStyling}>
                        <div className='notetag'>
                            <FiSettings className='logoitem'/>
                            Asetukset
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;