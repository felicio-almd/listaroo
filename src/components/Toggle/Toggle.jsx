import { useState } from 'react'
import { Icon } from '@iconify/react';
import "./Toggle.css"

export const Toggle = ({ toggled, onClick, toggleTheme }) => {
    const [isToggled, toggle] = useState(toggled);

    const callback = () => {
        toggle(!isToggled);
        toggleTheme(); // Chama a função para alternar o tema
    };

    return (
        <label className='label__toggle'>
            <input className='input__dark' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='span__toggle'>
                {/* <Icon icon="material-symbols:mode-night" width="30" height="30"/> */}
                {/* <Icon icon="material-symbols:clear-day-rounded" width="30" height="30"/> */}
            </span>
        </label>
    );
};