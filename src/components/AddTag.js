import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTag({notes, showAddTag, addTag}) {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [tagNew, setTagNew] = useState({color: '', name: ''});

    //https://stackoverflow.com/a/58429784
    const tags = [...new Map(notes.map(note =>
        [note.tag['name'], note.tag])).values()];

    const chooseTag = (tag) => {
        addTag(tag);
        showAddTag();
    }


    const showColorPicker = () => {
        setDisplayColorPicker(true);
    }

    const handleTagName = (event) => {
        setTagNew({color: tagNew.color, name: event.target.value});
    }

    const handleTagColor = (color) => {
        setTagNew({color: color, name: tagNew.name});
    }

    const detectEnter = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            addTag(tagNew);
            showAddTag();
        }
    }

    return(
        <div className='addtagcontainer'>
            <ul className='taglist'>
                {tags.map((tag) => (
                    <li className='tagcontainer' key={nanoid()} value={tag} onClick={() => chooseTag(tag)}>
                        <div className={tag.color}></div>
                        <div>{tag.name}</div>
                    </li>
                ))}
                <li className='tagcontainer' tabIndex={100}>
                    <div>
                        <div className={tagNew.color ? tagNew.color:'emptycolor'} onClick={showColorPicker}></div>
                        <div className='colorpickerpositioner'>
                            {displayColorPicker && <div className='colorpicker'>
                                <div className='red' onClick={() => handleTagColor('red')}></div>
                                <div className='orange' onClick={() => handleTagColor('orange')}></div>
                                <div className='yellow' onClick={() => handleTagColor('yellow')}></div>
                                <div className='green' onClick={() => handleTagColor('green')}></div>
                                <div className='blue' onClick={() => handleTagColor('blue')}></div>
                            </div>}
                        </div>
                    </div>
                    <textarea rows={1} onChange={handleTagName} onKeyDown={detectEnter}></textarea>
                </li>
            </ul>
        </div>
    );
}

export default AddTag;