import { useState } from 'react'
import { Icon } from '@iconify/react';
import "./Toggle.css"

export const Toggle = ({ toggled, toggleTheme }) => {
    const [isToggled, toggle] = useState(toggled);

    const callback = () => {
        toggle(!isToggled);
        toggleTheme();
    };

    return (
        <label className={`label__toggle ${isToggled ? 'dark-mode' : ''}`}>
          <input className='input__dark' type="checkbox" defaultChecked={isToggled} onClick={callback} />
          <span className='span__toggle'>
            <Icon className={`span__icon__sun ${isToggled ? 'hidden' : ''}`} icon="material-symbols:clear-day-rounded" width="22" height="22"/>
            <Icon className={`span__icon__moon ${isToggled ? '' : 'hidden'}`} icon="material-symbols:mode-night" width="22" height="22"/>
          </span>
        </label>      
    );
};