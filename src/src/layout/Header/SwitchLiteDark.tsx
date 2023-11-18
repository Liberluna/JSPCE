import { useState } from 'react';

function SwitchButton(props) {
    return (
        <></>
    )
}

export function Switcher() {

    if (typeof localStorage === 'undefined' || localStorage === undefined) {
        return <button>Switch!</button>
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
        console.log(theme);

    const handleSwitch = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={handleSwitch}>Switch!</button>
    );
}